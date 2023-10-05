import { useEffect, useState, useRef } from "react"

import AlumniActivityModal from "../../../components/alumniActivityModal"

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

function ActivityList(props) {
  const [news, setNews] = useState([])
  const [activities, setEvents] = useState(() => props.activities)
  const [showModal, setShowModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({
    title:"",
    body:"",
    guestName:"",
    date:"",
    link:"",
    images:""
  });



  useEffect(async () => {

    let updatedEvents = activities.map((element) => {
      let date = new Date(element.date)
      let day = date.getDate()
      let year = date.getFullYear()
      let monthName = month[date.getMonth()]
      element.date = `${day} ${monthName} ${year}`

      return element
    })

    setEvents(updatedEvents)
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

  return (
    <section className="mt-20 mb-20">
                <div className="c3myu ca3ts cbq8v rounded-tl-[100px] bg-secondary ">
                <AlumniActivityModal showModal = {showModal} setShowModal = {setShowModal} modalDetails={modalDetails} />

                    <div className="chaba cqi3d c6in0 ce4pe c5q0m cdcqj ck7qp cf0jn cu7lf" aria-hidden="true"></div>
                    <div className="chaba cqi3d c6in0 ce4pe c5q0m cdcqj cvdk9 cgtx5 cu7lf" aria-hidden="true"></div>
            
                    <div className="ca3ts cmc2m cuafn c0sod">
                        <div className="chn6j cbovh">
            
                            <div className="c3myu ca3ts cpvgl cjy67 cwayg co2li">
            
                                <div className="ctaq8 cgmwa cjtgt" data-aos="fade-up">
                                    <h2 className="cpcm4 c9ob6 text-basic ">Stay Updated on Exciting Alumni Activities</h2>
                                    <p className="ct5dn cnvr3 cnfi1 ">Discover the latest activities, connect with fellow alumni, and make the most of your alumni journey by staying in the loop. Don't miss out on valuable opportunities to reunite, learn, and grow together!</p>
                                </div>
                                
                                <div className="flex  gap-4 md:gap-y-10 md:flex-col">
                                  <div className="w-1/2 md:w-full flex items-center justify-center ">
                                       
                                  <div className="cka5y cef1y ctnab c0sqv corfv cwayg">
                                    <div className="c3myu  cemev">
                                        <img src="code/homePage/images/features-03.png" className="cwayg" width="496" height="496" alt="Features 03" data-aos="fade-up" data-aos-anchor="[data-aos-id-3]"/>
                                    </div>
                                </div>

                                  </div>
                                  <div className="w-1/2 md:w-full ">
                                    <h1 className="cab22 ckq42 flex gap-2 text-basic ">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                          </svg>
                                          ACTIVITIES
                                    </h1>
                                    <div ref={scrollableElement1} className="mt-8  overflow-y-scroll h-[450px]">
        {activities &&
            activities.map((activity, index) => (
              <div
                key={activity._id}
                // data-aos="fade-up"
                // data-aos-anchor-placement="top-bottom"
                // data-aos-delay={`${index * 20}`}

                className={`cursor-pointer text-start relative group hover:shadow-lg  transition-all  flex  h-28 md:h-[95px] mt-6 rounded-2xl overflow-hidden`}
              >
                
                <p onClick={()=>{setShowModal(1);setModalDetails({title:activity.title,body:activity.body,date:activity.date,link:activity.link,images:activity.images})}} className="bg-white w-full h-full bg-opacity-0 opacity-0 absolute group-hover:bg-opacity-[0.8] group-hover:opacity-100 bg-bla transition-opacity duration-300 text-center items-center flex justify-center font-semibold text-2xl text-primary">Read More ...</p>
                
                <div className="border-4 border-r-2 rounded-l-2xl h-full  w-40 text-[#F07C00]  flex flex-col justify-center items-center">
                  <div className="text-5xl md:text-3xl">
                    {activity.date.split(` `)[0]}
                  </div>
                  <div className="text-lg md:text-xs">
                    {" "}
                    {activity.date.split(` `)[1]} {activity.date.split(` `)[2]}
                  </div>
                </div>
                {/* activity body */}
                <div className="flex flex-col justify-center w-full pl-4 text-black border-4 border-l-2 md:pl-2 rounded-r-2xl">
                  <div className="flex justify-between h-1/2 items-center">
                    <div title={activity.title} className="w-5/6 sm:w-full text-lg sm:pb-2 font-semibold  md:text-sm">
                    {activity.title.substring(0, 30)} ...
                    </div>
                  <div className="sm:hidden w-2/6 text-[13.5px] md:-translate-x-[2px] text-[#717171] items-center  md:text-[10px]  flex">
                    <div className="object-contain mr-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-4 sm:h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {" "}
                    </div>
                    {activity.fromTime} - {activity.toTime}
                  </div>
                  </div>
                  <div className="sm:hidden  flex text-sm text-slate-600 pr-2 font-normal  md:text-sm h-1/2 -mt-2">
                  {activity.body.substring(0, 110)} ...  
                  </div>
                  
                    <div className="text-xs absolute right-8 bottom-3 sm:right-6 sm:bottom-[18px] group-hover:opacity-[0.1] text-primary">Read more...</div>
                  <div className="hidden sm:flex  text-[13.5px] md:-translate-x-[2px] text-[#717171] items-center  md:text-[11px]  ">
                    <div className="object-contain mr-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-4 sm:h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
                                  </div>
                                </div>
                                
            
                            </div>
            
                        </div>
                    </div>
            
                </div>
            </section>
    
  )
}

export default ActivityList
