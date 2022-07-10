import Image from "next/image"

const StatisticsNew = () => {
  return (
    <div className=" md:p-[16px] relative mt-24  ">
      <div className="flex items-center">
        <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
        <div className="ml-3 md:ml-2 w-fit italic font-[800] text-center   text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
          STATISTICS
        </div>
      </div>
      <img
        data-aos="zoom-in"
        data-aos-delay="30"
        src="/images/HomePage/Statistics.png"
        className="w-[80%] md:w-full mx-auto h-full"
        alt=""
      />
    </div>
  )
}
export default StatisticsNew
