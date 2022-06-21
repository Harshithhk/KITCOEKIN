import React from "react"

const Career = () => {
  return (
    <section className="mt-16 mx-auto  w-[1407px] sm:w-[90%] sm:mt-8 flex items-start justify-between">
      {/* HEADING */}
      <div className="w-[542px]  h-[500px]">
        <img
          className="h-[650px] w-fit"
          src="/images/Department/pose.png"
          alt="pose"
        />
      </div>
      <div className=" w-[750px] rounded-xl bg-slate-50 p-6">
        {/* <div className=" h-[65px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div> */}
        <div className="ml-3 md:ml-2 w-fit  font-[800]   text-[#3D3859] leading-[54px] text-4xl  md:text-[22px]">
          CONSTRUCT A <span className="text-[#20AD96] "> STUNNING</span> CAREER
          PERSPECTIVE
        </div>
        <div className="mt-12 w-[700px]">
          <div className="w-full h-12 rounded-t-md bg-[#20AD96] text-2xl text-white flex items-center px-4">
            Multiple Platforms Supported for Teaching & Studying
          </div>
          <div className="w-full p-4 py-8 bg-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero
            soluta illum ipsum voluptatum, cum rem molestias quos reiciendis
            vitae, voluptatibus est delectus corporis inventore non cupiditate
            quidem impedit nemo esse eius. Cumque nihil repudiandae et assumenda
            unde, ratione accusantium sequi repellat exercitationem debitis
            cupiditate
          </div>
          <div className="flex justify-between w-full p-4 mt-6 bg-white">
            <div> Multiple Course Participation at the Same Time</div>
            <div className="flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-slate-100">
              <img className="h-4 " src="/images/Department/plus.png" alt="" />
            </div>
          </div>
          <div className="flex justify-between w-full p-4 mt-6 bg-white">
            <div>Trach Study Progress & Deliver Promt Report</div>
            <div className="flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-slate-100">
              <img className="h-4 " src="/images/Department/plus.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Career
