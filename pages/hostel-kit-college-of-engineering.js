import React, { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import DefaultLayout from "../components/DefaultLayout"
import Awsome from "../sections/about-us/Awsome"
import OurVision from "../sections/about-us/OurVision"
import AboutUs from "../sections/about-us/AboutUs"
import MissionCards from "../sections/about-us/MissionCards"
import Testimonials from "../sections/about-us/Testimonials"
import Footer from "../sections/home-page/Footer"
import Accreditation from "../sections/home-page/Accredations"
import Statistics from "../sections/home-page/Statistics"
import StatisticsNew from "../sections/home-page/StatisticsNew"
import Gallaryslider from "../components/Gallary-slider"
import ImageGrid from "../sections/facilities/imageGridHostel"

let images = [
  "/images/Gallary-1png.png",
  "/images/Gallary-2.png",
  "/images/Gallary-3.png",
  "/images/Gallary-2.png",
]

const CollegeHostel = () => {
  const [gallary, setGallary] = useState(false)

  useEffect(() => {
    console.log(gallary)
    return () => {}
  }, [gallary])

  let founders = [
    {
      name: "Late.Shri Shivajirao Desai",
      designation: "Rector, Boy's Hostel",
      img: "/images/About/hostel/a-m-quereshi.jpg",
    },
    {
      name: "Mrs. Vinita. S. Mane",
      designation: "Rector, Girls Hostel",
      img: "/images/About/hostel/vinita-s-mane.jpg",
    },
    {
      name: "Mr.Ranjan B. Patil",
      designation: "Wardan, Boy's Hostel",
      img: "/images/About/hostel/rajan-patil.jpg",
    }
    
  
  ]

  return (
    <DefaultLayout>
      <div className="w-full relative">
        {gallary && <Gallaryslider images={images} setGallary={setGallary} />}
        <section className="relative flex flex-col items-center w-full">
          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-24 h-24 absolute top-0 left-[25%] z-10 sm:w-16 sm:h-16 sm:top-[5%]"
            alt=""
          />

          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-32 h-32 absolute top-[10%] left-[5%] z-10 sm:w-24 sm:h-24 sm:top-[35%]"
            alt=""
          />

          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-40 h-40 absolute top-[10%] left-[60%] z-10 sm:w-20 sm:h-20 sm:top-[17%]"
            alt=""
          />
          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-28 h-28 absolute top-[12.5%] left-[85%] z-10 sm:hidden"
            alt=""
          />
          <div className="absolute w-full h-[500px] top-0 left-0 bg-[#24346D] z-0"></div>
          <h1
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        className="w-[75%] mt-14 sm:text-xl  text-4xl font-bold text-center text-white z-20"
                    >
                        Hostel
                    </h1>
                    <br></br>
                    <br></br>
                    <h6
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
                    >
                        <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Hostel
                    </h6>

          <div className="z-10  mt-14 w-[1407px] sm:w-[95%] sm:mt-8">
            {/* <img
              src="/images/Department/DepartmentGalary.png"
              className="w-full h-full sm:hidden 2xl:block"
              alt=""
            />
            <img
              src="/images/AboutUs/Gallary-mobile.png"
              className="w-full h-full sm:block 3xl:hidden 2xl:hidden"
              alt=""
            /> */}
            <ImageGrid />
          </div>
        </section>
        <section className="mt-16 mx-auto  w-[1407px] sm:w-[90%] sm:mt-8">
      {/* HEADING */}
      <div className="flex items-center w-full">
        <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
        <div className="ml-3 md:ml-2 w-fit  font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
        Hostel
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex text-justify">
        <p className="w-full sm:w-full text-justify mt-8 sm:mt-4 h-fit text-xl sm:text-base text-[#24346D] ">
        KIT is a residential college with hostel facility for boys and girls separately. KIT boys hostel is a multistorey apartment with the capacity of occupying 300 boys. The admissions are given on first cum first served basis. The hostel is provided with connected mess facility, computer facility, Wi-Fi, gym, etc. Prof. A.M. Quereshi is the rector, and Mr. Rajan Patil is the warden of the hostel.Ladies hostel too is a multistorey apartment with the capacity of occupying 120 girls and all the facilities mentioned above. Mrs. Vinita. S. Mane is working as the rector of the hostel.




        </p>
      </div>
    </section>
    <section className="w-full h-[346px] sm:h-fit mt-20 sm:mt-8  flex items-center">
      <div className="w-[160px] h-[160px] rounded-full border-2 bg-[#F8F7FC] absolute ml-[200px] mb-[330px] z-0 border-[#F8F7FC] flex justify-center items-center"></div>
      <section className="h-[290px] sm:h-fit z-10  w-[1407px] flex-wrap sm:w-[340px] mx-auto flex justify-center gap-20 md:gap-4">
        
        <div className=" w-[290px] h-fit shadow-xl bg-white  rounded-3xl border-[#f3f3f3] border-4 p-4 sm:w-[165px]  sm:p-2">
          <img
            src="/images/AboutUs/awesome.svg"
            className="w-16 h-16 sm:w-8 sm:h-8 -translate-x-3 sm:-translate-x-1"
            alt=""
          />
          <h1 className="text-[#24346D] sm:text-xl text-[26px] font-bold mt-1 sm:mt-0">
          GIRLS HOSTEL
          </h1>
          <div className="text-xl text-justify text-primary mt-2 sm:text-sm">
          Capacity (120 students)
          </div>
        </div>
        {/* BOX */}
        <div className=" w-[290px] h-fit shadow-xl  bg-white  rounded-3xl border-[#f3f3f3] border-4 p-4 sm:w-[165px] sm:mt-[10px] sm:p-2">
          <img
            src="/images/AboutUs/awesome.svg"
            className="w-16 h-16 sm:w-8 sm:h-8 -translate-x-3 sm:-translate-x-1"
            alt=""
          />
          <h1 className="text-[#24346D] sm:text-xl text-[26px] font-bold mt-1 sm:mt-0">
          BOYS HOSTEL
          </h1>
          <div className="text-xl text-justify text-primary mt-2 sm:text-sm">
          Capacity (300 students)
          </div>
        </div>
        {/* BOX */}
        
      </section>
    </section>
        
        
    <section className="mt-10 mx-auto  w-[1407px] sm:w-[90%] sm:mt-8">
               {/* HEADING */}
      <div className="flex items-center w-full">
        <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
        <div className="ml-3 md:ml-2 w-fit  font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
        HOSTEL STAFF
        </div>
      </div>
     
        <div className="flex flex-wrap  justify-center sm:w-[95%] mt-16 gap-x-16 gap-y-16 sm:mt-8 sm:gap-x-4 sm:gap-y-4">
            {founders.map((founder,index) => (
              <div  key={index} className="z-30 w-[170px] h-fit sm:w-[120px] rounded-lg overflow-hidden  ">
                <img
               
                  src={founder.img}
                  className="w-full h-[190px] sm:h-auto"
                  alt={founder.img}
                />
                <div className="mx-auto text-lg font-semibold text-center sm:text-xs text-accent">
                  {founder.name}
                </div>
                <h2 className="mx-auto text-lg text-center w-fit text-accent-light sm:text-xs">
                  {founder.designation}
                </h2>
              </div>
            ))}
          </div>
          
       
        </section>
    
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default CollegeHostel

{
  /* <div className="mt-10 ">
          <ReactPlayer
            style={{ borderRadius: "16px", overflow: "hidden" }}
            light={true}
            // playing={true}
            controls={true}
            width={"700px"}
            height={"360px"}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        </div> */
}
