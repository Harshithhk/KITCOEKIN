let news = [
  {
    date: "13 Feb, 2022",
    title: "Dummy text of the printing & typesetting industry",
    startTime: "8:00 AM",
    endTime: "01:00 PM",
  },
  {
    date: "13 Feb, 2022",
    title: "Dummy text of the printing & typesetting industry",
    startTime: "8:00 AM",
    endTime: "01:00 PM",
  },
  {
    date: "13 Feb, 2022",
    title: "Dummy text of the printing & typesetting industry",
    startTime: "8:00 AM",
    endTime: "01:00 PM",
  },
]

let notices = [
  {
    date: "13 Feb, 2022",
    title: "General Notices",
    startTime: "8:00 AM",
    endTime: "01:00 PM",
  },
  {
    date: "13 Feb, 2022",
    title: "General Notices",
    startTime: "8:00 AM",
    endTime: "01:00 PM",
  },
  {
    date: "13 Feb, 2022",
    title: "General Notices",
    startTime: "8:00 AM",
    endTime: "01:00 PM",
  },
]

const NewsAndNotices = () => {
  return (
    <section className="flex mt-16 md:mt-8 md:flex-col">
      <section className="w-1/2 md:w-full pl-[50px] pr-[2.5%] md:p-[16px]">
        {/* TITLE */}
        <div className="flex items-center">
          <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
          <div className="ml-3 md:ml-2 w-fit italic font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
            NEWS
          </div>
        </div>
        {/* CONTENT */}
        <div className="mt-8">
          {news.map((element, index) => (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay={`${index * 10}`}
              className="cursor-pointer hover:shadow-lg transition-all  flex  h-28 md:h-[75px] mt-6 rounded-2xl overflow-hidden"
            >
              <div className="h-full w-40 bg-[#495AB6] flex flex-col justify-center items-center">
                <div className="text-5xl text-white md:text-3xl">
                  {element.date.split(` `)[0]}
                </div>
                <div className="text-lg text-white md:text-xs">
                  {element.date.split(` `)[1]} {element.date.split(` `)[2]}
                </div>
              </div>
              <div className="flex flex-col justify-center w-full pl-4 text-black border-4 rounded-r-2xl">
                <div className="text-lg md:text-sm">{element.title}</div>
                <div className="text-[13.5px] md:text-[10px] text-[#717171] mt-3 md:mt-1 flex items-center">
                  <div className="object-contain mr-2">
                    <img
                      src="/images/HomePage/Clock.svg"
                      className="object-contain h-full"
                      alt=""
                    />{" "}
                  </div>
                  {element.startTime} - {element.endTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-1/2 md:w-full pl-[50px] pr-[2.5%] md:p-[16px]">
        <div className="flex items-center">
          <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
          <div className="ml-3 md:ml-2 w-fit italic font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
            NOTICES
          </div>
        </div>
        <div className="mt-8">
          {notices.map((notice, index) => (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay={`${index * 20}`}
              className="cursor-pointer hover:shadow-lg transition-all  flex  h-28 md:h-[75px] mt-6 rounded-2xl overflow-hidden"
            >
              <div className="border-4 border-r-2 rounded-l-2xl h-full  w-40 text-[#F07C00]  flex flex-col justify-center items-center">
                <div className="text-5xl md:text-3xl">
                  {notice.date.split(` `)[0]}
                </div>
                <div className="text-lg md:text-xs">
                  {" "}
                  {notice.date.split(` `)[1]} {notice.date.split(` `)[2]}
                </div>
              </div>
              <div className="flex flex-col justify-center w-full pl-4 text-black border-4 border-l-2 rounded-r-2xl">
                <div className="text-lg md:text-sm">{notice.title}</div>
                <div className="text-[13.5px] text-[#717171] md:mt-1 md:text-[10px] mt-3 flex">
                  <div className="mr-2">
                    <img src="/images/HomePage/Clock.svg" alt="" />{" "}
                  </div>
                  {notice.startTime} - {notice.endTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}

export default NewsAndNotices
