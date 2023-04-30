import Image from "next/image"

// <section className="relative ">
//   <section className="top-0">
//     <div className="pl-[74.94px ]  italic font-[800] font-poppins">
//       <h2 className="absolute top-[1480.14px] left-[72.7px] text-[59.9549px] h-[89.93px] tracking-[0.005em] leading-[90px] text-[#3D3859]">
//         SEE NEW VISION
//       </h2>

//       <p className="absolute top-[1588px] left-[84.08px] leading-[22px] tracking-[0.005em] h-[85.44px] w-[403.2px] text-[#5C5487] ">
//         Donec convallis fusce tellus pellentesque rutrum convallis duis.
//         Amet sed vestibulum, velit, nam aliquet. Odio sit amet, leo morbi
//         eget purus. Aenean eget sollicitudin nullam sodales quis mattis
//         facilisis integer leo. Pharetra in in molestie egestas.
//       </p>

//       <button
//         className="absolute top-[1758.18px] left-[74.94px] h-[80.94px] w-[325.26px] text-white text-[37.47px]   bg-[#3D3859] italic rounded-[7.4943px]"
//         href="#about"
//       >
//         EXPLORE
//       </button>
//     </div>

//     <img
//       className="absolute top-[1283.04px] left-[547.09px] w-[869.13px] h-[651.37px] rotate-[-3.74deg] "
//       src="/images/HomePage/newVision.png"
//     ></img>
//   </section>
// </section>

const NewVision = () => {
  return (
    <section className="flex h-[450px] justify-between overflow-hidden md:hidden mt-24">
      <div className="pl-[74.94px]  italic font-[800] font-poppins ">
        <h2
          data-aos="zoom-in"
          data-aos-delay="0"
          className=" text-[59.9549px] h-[89.93px] w-[500px] tracking-[0.005em] leading-[90px] text-[#3D3859] mt-4"
        >
          SEE NEW VISION
        </h2>
        <p className=" leading-[22px] tracking-[0.005em] text-justify w-[403.2px] text-[#5C5487] ">
        Experience the latest AR-VR equipment in an open session
      Learn about the technology with a dedicated team of experts
      Understand how to apply the tech to your specific field and build deeper learning
      Build Applications, Games and prototypes
      Explore career in AR-VR technology
        </p>
        <button
          data-aos="zoom-in"
          data-aos-delay="0"
          className=" h-[80.94px] w-[325.26px] text-white text-[37.47px]  mt-9 bg-[#3D3859] hover:bg-[#272242] italic rounded-[7.4943px]"
          
        >
          <a href="new-vision">EXPLORE</a>
        </button>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="0"
        className="min-w-[869.13px] h-[651.37px] overflow-visible "
      >
        <img
          src="/images/HomePage/NewVision.jpg"
          className="h-full translate-y-[-30%] "
          alt=""
        />
      </div>
    </section>
  )
}

export default NewVision
