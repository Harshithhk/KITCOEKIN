import { useEffect, useState, useRef } from "react"

import NewsAndEventsModal from "../../components/nwesAndEventsModal"

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function NewsAndEvents(props) {
  const [news, setNews] = useState(() => props.news)
  const [events, setEvents] = useState(() => props.events)
  const [showModal, setShowModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({
    title:"",
    shortDescription:"",
    fullDescription:"",
    date:"",
    fromTime:"",
    toTime:"",
    link:"",
    fileUrl:""
  });


  useEffect(async () => {
    let updatedNews = news.map((element) => {
      let date = new Date(element.date)
      let day = date.getDate()
      let year = date.getFullYear()
      let monthName = month[date.getMonth()]
      element.date = `${day} ${monthName} ${year}`
      return element
    })

    let updatedEvents = events.map((element) => {
      let date = new Date(element.date)
      let day = date.getDate()
      let year = date.getFullYear()
      let monthName = month[date.getMonth()]
      element.date = `${day} ${monthName} ${year}`

      return element
    })

    setNews(updatedNews)
    setEvents(updatedEvents)

    console.log({ news, events })
  }, [])
 
  const scrollableElement1 = useRef(null);
  const scrollableElement2 = useRef(null);

  const maxHeight1 = useRef(0);
  const maxHeight2 = useRef(0);

  const scrollStep = 1;
  const scrollInterval = 50; // Adjust this value to control the scrolling speed
 
  useEffect(() => {
    const element = scrollableElement1.current;
    maxHeight1.current = element.scrollHeight - element.clientHeight +20;
    let currentScroll = element.scrollTop;
    let isScrolling = false;
  
    const intervalId = setInterval(() => {
      if (!isScrolling) {
        currentScroll += scrollStep;
  
        if (currentScroll >= maxHeight1.current) {
          currentScroll = 0; // Reset scroll position to the top
        }
  
        element.scrollTop = currentScroll;
      }
    }, scrollInterval);
  
    const handleScroll = () => {
      isScrolling = true;
      clearTimeout(timeoutId);
  
      const timeoutId = setTimeout(() => {
        isScrolling = false;
      }, 10); // Adjust this value to set the timeout delay after manual scrolling stops
  
      currentScroll = element.scrollTop;
    };
  
    element.addEventListener('scroll', handleScroll);
  
    return () => {
      clearInterval(intervalId);
      element.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const element = scrollableElement2.current;
    maxHeight2.current = element.scrollHeight - element.clientHeight +20;
    let currentScroll = element.scrollTop;
    let isScrolling = false;
  
    const intervalId = setInterval(() => {
      if (!isScrolling) {
        currentScroll += scrollStep;
  
        if (currentScroll >= maxHeight2.current) {
          currentScroll = 0; // Reset scroll position to the top
        }
  
        element.scrollTop = currentScroll;
      }
    }, scrollInterval);
  
    const handleScroll = () => {
      isScrolling = true;
      clearTimeout(timeoutId);
  
      const timeoutId = setTimeout(() => {
        isScrolling = false;
      }, 10); // Adjust this value to set the timeout delay after manual scrolling stops
  
      currentScroll = element.scrollTop;
    };
  
    element.addEventListener('scroll', handleScroll);
  
    return () => {
      clearInterval(intervalId);
      element.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="flex mt-16 mb-16 md:mb-8 md:mt-8 md:flex-col">
      
      <section className="w-1/2 md:w-full pl-[50px] pr-[2.5%] md:p-[16px]">
      <NewsAndEventsModal showModal = {showModal} setShowModal = {setShowModal} modalDetails={modalDetails} />
        {/* TITLE */}
        <div className="flex items-center">
          <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
          <div className="ml-3 md:ml-2 w-fit font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
            NEWS
          </div>
        </div>
        {/* CONTENT */}
        <div ref={scrollableElement1} className="mt-8 overflow-y-scroll h-[450px]">
          {news &&
            news.map((element, index) => (
              <div
                key={element._id}
                // data-aos="fade-up"
                // data-aos-anchor-placement="top-bottom"
                // data-aos-delay={`${index * 10}`}
                className="cursor-pointer relative group hover:shadow-lg  transition-all  flex  h-28 md:h-[95px] mt-6 rounded-2xl overflow-hidden"
              >
                
                <p onClick={()=>{setShowModal(1);setModalDetails({title:element.title,shortDescription:element.shortDescription,fullDescription:element.fullDescription,date:element.date,fromTime:element.fromTime,toTime:element.toTime,link:element.link,fileUrl:element.fileUrl})}} className="bg-white w-full h-full bg-opacity-0 opacity-0 absolute group-hover:bg-opacity-[0.8] group-hover:opacity-100 bg-bla transition-opacity duration-300 text-center items-center flex justify-center font-semibold text-2xl text-primary">Read More ...</p>
                
                <div className="h-full w-40 bg-[#495AB6] flex flex-col justify-center items-center">
                  <div className="text-5xl text-white md:text-3xl">
                    {element.date.split(` `)[0]}
                  </div>
                  <div className="text-lg text-white md:text-xs">
                    {element.date.split(` `)[1]} {element.date.split(` `)[2]}
                  </div>
                </div>
                {/* event body */}
                <div className="flex flex-col justify-center w-full pl-4 text-black border-4 border-l-2 md:pl-2 rounded-r-2xl">
                  <div className="flex justify-between h-1/2 items-center">
                    <div title={element.title} className="w-5/6 sm:w-full text-lg sm:pb-2 font-semibold  md:text-sm">
                    {element.title.substring(0, 30)} ...
                    </div>
                  <div className="sm:hidden w-2/6 text-[13.5px] md:-translate-x-[2px] text-[#717171] items-center  md:text-[10px]  flex">
                    <div className="object-contain mr-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-4 sm:h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {" "}
                    </div>
                    {element.fromTime} - {element.toTime}
                  </div>
                  </div>
                  <div className="sm:hidden  flex text-sm text-slate-600 pr-2 font-normal  md:text-sm h-1/2 -mt-2">
                  {element.shortDescription.substring(0, 130)} ...  
                  </div>
                  
                    <div className="text-xs absolute right-8 bottom-3 sm:right-6 sm:bottom-[18px] group-hover:opacity-[0.1] text-primary">Read more...</div>
                  <div className="hidden sm:flex  text-[13.5px] md:-translate-x-[2px] text-[#717171] items-center  md:text-[11px]  ">
                    <div className="object-contain mr-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-4 sm:h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {" "}
                    </div>
                    {element.fromTime} - {element.toTime}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      <section className="w-1/2 md:w-full pl-[50px] pr-[2.5%] md:p-[16px]">
        <div className="flex items-center">
          <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
          <div className="ml-3 md:ml-2 w-fit font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
            EVENTS
          </div>
        </div>
        <div ref={scrollableElement2} className="mt-8 overflow-y-scroll h-[450px] ">
          {events &&
            events.map((event, index) => (
              <div
                key={event._id}
                // data-aos="fade-up"
                // data-aos-anchor-placement="top-bottom"
                // data-aos-delay={`${index * 20}`}

                className={`cursor-pointer  relative group hover:shadow-lg  transition-all  flex  h-28 md:h-[95px] mt-6 rounded-2xl overflow-hidden`}
              >
                
                <p onClick={()=>{setShowModal(1);setModalDetails({title:event.title,shortDescription:event.shortDescription,fullDescription:event.fullDescription,date:event.date,fromTime:event.fromTime,toTime:event.toTime,link:event.link,fileUrl:event.fileUrl})}} className="bg-white w-full h-full bg-opacity-0 opacity-0 absolute group-hover:bg-opacity-[0.8] group-hover:opacity-100 bg-bla transition-opacity duration-300 text-center items-center flex justify-center font-semibold text-2xl text-primary">Read More ...</p>
                
                <div className="border-4 border-r-2 rounded-l-2xl h-full  w-40 text-[#F07C00]  flex flex-col justify-center items-center">
                  <div className="text-5xl md:text-3xl">
                    {event.date.split(` `)[0]}
                  </div>
                  <div className="text-lg md:text-xs">
                    {" "}
                    {event.date.split(` `)[1]} {event.date.split(` `)[2]}
                  </div>
                </div>
                {/* event body */}
                <div className="flex flex-col justify-center w-full pl-4 text-black border-4 border-l-2 md:pl-2 rounded-r-2xl">
                  <div className="flex justify-between h-1/2 items-center">
                    <div title={event.title} className="w-5/6 sm:w-full text-lg sm:pb-2 font-semibold  md:text-sm">
                    {event.title.substring(0, 30)} ...
                    </div>
                  <div className="sm:hidden w-2/6 text-[13.5px] md:-translate-x-[2px] text-[#717171] items-center  md:text-[10px]  flex">
                    <div className="object-contain mr-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-4 sm:h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {" "}
                    </div>
                    {event.fromTime} - {event.toTime}
                  </div>
                  </div>
                  <div className="sm:hidden  flex text-sm text-slate-600 pr-2 font-normal  md:text-sm h-1/2 -mt-2">
                  {event.shortDescription.substring(0, 130)} ...  
                  </div>
                  
                    <div className="text-xs absolute right-8 bottom-3 sm:right-6 sm:bottom-[18px] group-hover:opacity-[0.1] text-primary">Read more...</div>
                  <div className="hidden sm:flex  text-[13.5px] md:-translate-x-[2px] text-[#717171] items-center  md:text-[11px]  ">
                    <div className="object-contain mr-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-4 sm:h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {" "}
                    </div>
                    {event.fromTime} - {event.toTime}
                  </div>
                </div>
              </div>
            ))}
        </div>
        
      </section>
    </section>
  )
}

export default NewsAndEvents
