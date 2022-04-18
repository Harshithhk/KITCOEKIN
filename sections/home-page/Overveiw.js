import Image from "next/image"

const Overveiw = () => {
  return (
    <div className="flex flex-wrap justify-around md:items-center h-fulla md:w-full mt-24 md:h-full md:mb-[100px] m-auto overflow-hidden">
      <div className="flex flex-col justify-between w-[590px] font-poppins ">
        <div className="flex items-center w-fit">
          <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
          <div className="ml-3 md:ml-2 w-fit italic font-[800]   text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
            KIT’S OVERVIEW
          </div>
        </div>

        <div className=" text-[#B94700]  w-[516.36px] md:w-[350px] text-[20.9842px] leading-[31.48px] tracking-[0.005em] font-normal md:will-change-contents md:mx-auto">
          An institute established in May 1983, KIT(Autonomous) reflects the
          vision of leading industrialists and educationalists. The vast
          exposure and experience of it’s founders has helped KIT(Autonomous) to
          establish it’s identity as an Institute of repute in the field of
          Engineering and Management education.The Institute has been awarded
          “A” status by Govt. of Maharashtra in recognition of its over all
          academic excellence and infrastructure. It is affiliated to Shivaji
          University, Kolhapur and is approved by AICTE, New Delhi.
          <br />
          The institute consists of many departments and other facilities.
        </div>
        <div className="flex gap-[10px] text-[#3D3859] md:ml-3">
          <div
            data-aos="fade-right"
            data-aos-delay="0"
            className="italic  font-[#3D3859] font-bold underline text-[17.9865px] tracking-[0.005em]"
          >
            Read more
          </div>
          <span data-aos="fade-right" data-aos-delay="0" className="font-bold">
            {">"}
            {">"}
          </span>
        </div>
      </div>
      <div className="w-[719.46px] md:w-[350px] md:h-[269px] md:mt-[32px]">
        <div className="flex justify-between mb-[14px]">
          <div className="w-[227px] h-[244px] md:w-[116px] md:h-[128px] bg-[url(/images/HomePage/bird1.jpeg)] bg-cover bg-center"></div>
          <div className="w-[227px] h-[244px] md:w-[116px] md:h-[128px] bg-[url(/images/HomePage/bird2.jpeg)] bg-center"></div>
          <div className="flex items-center leading-[45px] tracking-[0.005em] italic underline w-[227px] h-[244px] md:w-[116px] md:h-[128px] bg-[#3E395A] text-[#FFFFFF] font-[700] text-center text-[29.9774px] md:text-xl">
            <div
              data-aos="zoom-in"
              data-aos-delay="20"
              className="w-[155px] md:w-[116px] md:h-[128px] m-auto"
            >
              See more what’s in here {">"}
              {">"}
            </div>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="w-[227px] h-[244px] md:w-[116px] md:h-[128px] bg-[url(/images/HomePage/bird3.jpeg)] bg-center bg-cover"></div>
          <div className="w-[227px] h-[244px] md:w-[116px] md:h-[128px] bg-[url(/images/HomePage/bird4.jpg)] bg-center bg-cover"></div>
          <div className="w-[227px] h-[244px] md:w-[116px] md:h-[128px] bg-[url(/images/HomePage/Polygon.png)] bg-center bg-cover"></div>
        </div>
      </div>
    </div>
  )
}

export default Overveiw
