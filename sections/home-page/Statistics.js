import Image from "next/image"

const Statistics = () => {
  return (
    <div className="relative mt-24  md:hidden">
      <div className="flex items-center  ml-[43.57px] pl-[14px] italic text-[#3D3859] w-[568.82px] h-[44.88px] text-[35.9729px] font-[800] leading-[54px] tracking-[0.005em] border-l-[6.74px] border-[#F07C00] text-left">
        STATISTICS
      </div>
      <div className="absolute left-[64.86px] top-[31.6px] bg-[url(/images/HomePage/vector.png)] w-[297.37px] h-[36.91px]"></div>

      <div className=" relative w-[986.24px] h-[542.52px] mt-12 m-auto  overflow-hidden font-poppins">
        <div className="">
          {/* double layer */}
          <div
            data-aos="zoom-in"
            data-aos-delay="40"
            className="left-[210.67px]  bg-[url(/images/HomePage/statistics1.png)] absolute  w-[349.75px] h-[350.3px] bg-cover bg-center "
          ></div>
          <div className="flex items-center justify-center left-[211.17px] translate-x-[51px] translate-y-[51px] absolute  w-[247.31px]  h-[247.31px] rotate-[46.54deg]">
            <div className="font-Poppine text-[#F5F6F8] italic text-center font-bold  text-[50.96px] rotate-[-46.54deg] leading-[76px] traking-[0.005em]">
              5000+
            </div>
            <div></div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="left-[624.26px] bg-[url(/images/HomePage/statistics2.png)] bg-center bg-cover absolute  w-[349.75px] h-[350.3px] "
          ></div>
          <div className="flex items-center justify-center left-[625.06px] translate-x-[51px] translate-y-[51px] absolute  w-[247.31px] h-[247.31px] rotate-[46.54deg]">
            <div className="font-Poppine text-[#F5F6F8] italic text-center font-bold  text-[50.96px] rotate-[-46.54deg] leading-[76px] traking-[0.005em]">
              36+
            </div>
            <div></div>
          </div>
        </div>
        <div className="">
          <div
            data-aos="zoom-in"
            data-aos-delay="20"
            className="bg-[url(/images/HomePage/statistics2.png)] bg-center bg-cover absolute  w-[349.75px] h-[350.3px] bottom-0 "
          ></div>
          <div className="flex flex-col items-center justify-center left-0 bottom-0 translate-x-[51px] translate-y-[-51px] absolute  w-[247.31px]  h-[247.31px] rotate-[46.54deg]">
            <div className="font-Poppine text-[#F5F6F8] italic text-center font-bold  text-[50.96px] rotate-[-46.54deg] leading-[76px] traking-[0.005em]">
              190+
            </div>
            <div> </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="30"
            className="left-[422.5px] bg-[url(/images/HomePage/statistics2.png)] bg-center bg-cover absolute  w-[349.75px] h-[350.3px] bottom-0 "
          ></div>
          <div className="flex items-center justify-center left-[424px] bottom-0 translate-x-[51px] translate-y-[-51px] absolute  w-[247.31px]  h-[247.31px] rotate-[46.54deg]">
            <div className="font-Poppine text-[#F5F6F8] italic text-center font-bold  text-[50.96px] rotate-[-46.54deg] leading-[76px] traking-[0.005em]">
              15000+
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Statistics
