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
import ImageGrid from "../sections/facilities/imageGridLibrary"

let images = [
  "/images/Gallary-1png.png",
  "/images/Gallary-2.png",
  "/images/Gallary-3.png",
  "/images/Gallary-2.png",
]

const CentralLibrary = () => {
  const [gallary, setGallary] = useState(false)
  const libraryCollection = [
    {
      "Sr. No.": 1,
      "Programme": "Civil",
      "Titles": 2312,
      "Volumes": 7082,
      "National Journals": 6,
      "International Journals": 27854
    },
    {
      "Sr. No.": 2,
      "Programme": "Environment",
      "Titles": 1966,
      "Volumes": 5780,
      "National Journals": 6,
      "International Journals": ""
    },
    {
      "Sr. No.": 3,
      "Programme": "Production",
      "Titles": 3180,
      "Volumes": 8740,
      "National Journals": 6,
      "International Journals": ""
    },
    {
      "Sr. No.": 4,
      "Programme": "Mechanical",
      "Titles": 1939,
      "Volumes": 6384,
      "National Journals": 6,
      "International Journals": ""
    },
    {
      "Sr. No.": 5,
      "Programme": "Electronics",
      "Titles": 2828,
      "Volumes": 8079,
      "National Journals": 6,
      "International Journals": ""
    },
    {
      "Sr. No.": 6,
      "Programme": "Computer Science",
      "Titles": 1881,
      "Volumes": 5215,
      "National Journals": 6,
      "International Journals": ""
    },
    {
      "Sr. No.": 7,
      "Programme": "Information Tech",
      "Titles": 1376,
      "Volumes": 4117,
      "National Journals": 6,
      "International Journals": ""
    },
    {
      "Sr. No.": 8,
      "Programme": "Bio-Technology",
      "Titles": 1329,
      "Volumes": 4160,
      "National Journals": 6,
      "International Journals": ""
    },
    {
      "Sr. No.": 9,
      "Programme": "E & TC",
      "Titles": 1251,
      "Volumes": 3369,
      "National Journals": 6,
      "International Journals": ""
    },
    {
      "Sr. No.": 10,
      "Programme": "Electrical",
      "Titles": 166,
      "Volumes": 975,
      "National Journals": 6,
      "International Journals": ""
    },
    {
      "Sr. No.": 11,
      "Programme": "PG Prod/Mech",
      "Titles": 446,
      "Volumes": 1506,
      "National Journals": 6,
      "International Journals": ""
    },
    {
      "Sr. No.": 12,
      "Programme": "PG CAD/CAM/CAE",
      "Titles": 318,
      "Volumes": 1208,
      "National Journals": 6,
      "International Journals": ""
    },
    {
      "Sr. No.": 13,
      "Programme": "PG E & TC",
      "Titles": 370,
      "Volumes": 1543,
      "National Journals": 6,
      "International Journals": ""
    },
    {
      "Sr. No.": 14,
      "Programme": "PG Biochemical",
      "Titles": 297,
      "Volumes": 1109,
      "National Journals": 6,
      "International Journals": ""
    },
    {
      "Sr. No.": 15,
      "Programme": "PG Environment",
      "Titles": 83,
      "Volumes": 305,
      "National Journals": 6,
      "International Journals": ""
    },
    {
      "Sr. No.": 16,
      "Programme": "PG CSE",
      "Titles": 94,
      "Volumes": 372,
      "National Journals": 6,
      "International Journals": ""
    },
    {
      "Sr. No.": 17,
      "Programme": "PG IND",
      "Titles": 63,
      "Volumes": 328,
      "National Journals": 6,
      "International Journals": ""
    },
    {
      "Sr. No.": "",
      "Programme": "Total",
      "Titles": 19899,
      "Volumes": 60272,
      "National Journals": 102,
      "International Journals": 27854
    }
   ]
  useEffect(() => {
    // console.log(gallary)
    return () => {}
  }, [gallary])

  let staff = [
    {
      name: "Dr.Rucha Kamat",
      designation: "Librarian",
      img: "/images/About/library/dr-rucha-kamat.jpg",
    },
    {
      name: "Mr.Subhodh S.Medhekar",
      designation: "Library Clerk ",
      img: "/images/About/library/s-s-medhekar.jpg",
    },
    {
      name: "Mrs.Shailaja S.Chougale",
      designation: "Library Clerk",
      img: "/images/About/library/s-s-chougule.jpg",
    },
    {
      name: "Mr.S.D.Patil",
      designation: "Library Clerk      ",
      img: "/images/About/library/s-d-patil.jpg",
    },
  
    {
      name: "Mr.Ramchandra V. Kulkarni      ",
      designation: "Peon",
      img: "/images/About/library/r-v-kulkarni.jpg",
    },
    {
      name: "Mr.Vinayak S.Shinde",
      designation: "Peon",
      img: "/images/About/library/v-s-shinde.jpg",
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
                        Central Library
                    </h1>
                    <br></br>
                    <br></br>
                    <h6
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
                    >
                        <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Central Library
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
        Central Library
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex text-justify">
        <p className="w-full sm:w-full  mt-8 sm:mt-4 h-fit text-xl sm:text-base text-[#24346D]">
        The Central Library serves as the intellectual hub for the institute. 
It is dedicated to serve as an intellectual and vibrant hub of the Kolhapur
 Institute of Technology’s College of Engineering (Autonomous) by fully 
integrating its services with state-of-the-art technologies, and thereby
 ensuring seamless access to its print as well as online collections by 
blending its creative internal network of human and material resources. <br /> <br />
The Library is housed in an aesthetic building which by itself impresses its 
stakeholders with intelligent ambience endowed with scholarly values. 
The Library is having separate section namely Reference, Periodical, Circulation, 
Digital Library and Book Bank Section for better utilization of its resources.<br /> <br />A rich collection of 19899 Titles and 60272 Volumes of reference and text books have been properly classified and arranged for the user community. The library practices open access policy for the benefit of its stakeholders.
<br /> <br />102 Print journals and more than 1300 back volumes of periodicals are available in the periodical section.
<br /> <br /> A wise and timely investment of 1.5 crores on Library building and more than Rs. 2.92 crores on the books and periodicals by the visionary management and administrators make the stakeholders proud and motivate them to be part of this affluent knowledge heritage.
<br /> <br />
The library is as well equipped with 27854 e-journals & e-resources comprising J-Gate, K-hub and NPTEL. A well equipped Digital Library of 30 Nodes with internet connectivity is available for students. Library is having institutional membership of National Digital Library (NDL) and Developing Library Network (DELNET).
<br/> <br/>
Other noteworthy features are: internet with wi-fi access, reprographic services with print, copy, scan facilities, Topper Incentive Scheme and book bank facility to SC/ST as well as students from open category. Institutional membership with CMTI, Bengaluru and Library of Shivaji University Kolhapur is also an additional facility of the library.

Library orientation is an annual activity for first year and direct second year students to get them acquainted with the facilities. In the orientation program, library gives information as regards to the effective use of Web OPAC based on the search criteria such as author, title, and department. Complete automation of circulation is yet another success story which couldn’t have been in place without the dedicated, sincere and hard working library staff. Library also offers CAS (Current Awareness Service) and SDI (Special Dissemination of Information) to the users. Thus the library takes pride in serving the stakeholders with a learned, well qualified and supportive staff.

<br/> <br/>
<p>

        <p className="font-bold text-left"> Web Online Public Access Catalogue(OPAC)</p><br/>
<p className="font-semibold">The Central Library is pleased to inform you that you can avail the facility of Web OPAC. You can browse the present library collection on Web.
</p><br/>
<p className="font-semibold">To access the collection through our Library software :</p><br/>
<p>1. Visit www.easyuseful.com</p>
<p>2. Under software Login click on ‘Vidyasagar LMS’</p>
<p>3. Login Name : PRN number</p>
<p>4. Password : First three letters of surname</p>




        </p>


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
            19,899+
          </h1>
          <div className="text-xl text-justify text-primary mt-2 sm:text-sm">
          Titles
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
            60,272+
          </h1>
          <div className="text-xl text-justify text-primary mt-2 sm:text-sm">
          Volumes
          </div>
        </div>
        {/* BOX */}
        {/* BOX */}
        <div className=" w-[290px] h-fit shadow-xl  bg-white  rounded-3xl border-[#f3f3f3] border-4 p-4 sm:w-[165px] sm:mt-[10px] sm:p-2">
          <img
            src="/images/AboutUs/awesome.svg"
            className="w-16 h-16 sm:w-8 sm:h-8 -translate-x-3 sm:-translate-x-1"
            alt=""
          />
          <h1 className="text-[#24346D] sm:text-xl text-[26px] font-bold mt-1 sm:mt-0">
            1,300+
          </h1>
          <div className="text-xl text-justify text-primary mt-2 sm:text-sm">
          back volumes
          </div>
        </div>
        {/* BOX */}
        {/* BOX */}

        <div className=" w-[290px] shadow-xl h-fit bg-white  rounded-3xl border-[#f3f3f3] border-4 p-4 sm:w-[165px] sm:p-2">
          <img
            src="/images/AboutUs/awesome.svg"
            className="w-16 h-16 sm:w-8 sm:h-8 -translate-x-3 sm:-translate-x-1"
            alt=""
          />
          <h1 className="text-[#24346D] sm:text-xl text-[26px] font-bold mt-1 sm:mt-0">
            27,854+
          </h1>
          <div className="text-xl text-justify text-primary mt-2 sm:text-sm">
          e-journals

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
        LIBRARY STAFF
        </div>
      </div>
        <div className="flex flex-row sm:flex-col">
        <div className="flex flex-wrap  justify-center w-[60%] sm:w-[95%] mt-16 gap-x-16 gap-y-16 sm:mt-8 sm:gap-x-4 sm:gap-y-4">
            {staff.map((founder,index) => (
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
          <div className="flex flex-col items-center w-[500px] sm:w-auto mt-10">
           
          <div className=" shadow-lg items-center grid grid-cols-3  w-full h-fit p-2 mt-6 bg-[#F8F7FC] font-semibold text-center rounded-lg sm:w-full justify-between  min-h-[55px] ">  
                    <div className="">Name</div>
                    <div className="">Designation</div>
                    <div className="">Qualification</div> 
              </div>
        
              <div className="shadow-lg  grid grid-cols-3 divide-x  w-full h-fit p-2 mt-6 bg-white  text-center rounded-lg sm:w-full justify-between  min-h-[55px] ">  
                     {/* row end */}
                     <div className="">	Dr. (Mrs.) R.R. Kamat</div>
                     <div >
                     Librarian
                     </div>
                     <div>M.Lib & Inf. Sci, SET, Ph.D</div>
                     {/* row end */}
              </div>
              <div className="shadow-lg  grid grid-cols-3 divide-x  w-full h-fit p-2 mt-2 bg-white  text-center rounded-lg sm:w-full justify-between   min-h-[55px] ">  
                     {/* row end */}
                     <div className="">	Mr. S.S.Medhekar</div>
                     <div >
                     Library Clerk
                                          </div>
                     <div>M.Com , M.Lib & Inf. Sci.</div>
                     {/* row end */}
              </div><div className="shadow-lg  grid grid-cols-3 divide-x  w-full h-fit p-2 mt-2 bg-white  text-center rounded-lg sm:w-full justify-between min-h-[55px] ">  
                     {/* row end */}
                     <div className="">	Mrs. S.S. Chougale</div>
                     <div >
                     Library Clerk
                     </div>
                     <div>M.Lib & Inf. Sci.</div>
                     {/* row end */}
              </div>
              
              <div className="shadow-lg  grid grid-cols-3 divide-x  w-full h-fit p-2 mt-2 bg-white  text-center rounded-lg sm:w-full justify-between   min-h-[55px] ">  
                     {/* row end */}
                     <div className="">	Mr. S.D.Patil</div>
                     <div >
                     Library Clerk
                     </div>
                     <div>B.A.</div>
                     {/* row end */}
              </div>
              <div className="shadow-lg  grid grid-cols-3 divide-x  w-full h-fit p-2 mt-2 bg-white  text-center rounded-lg sm:w-full justify-between   min-h-[55px] ">  
                     {/* row end */}
                     <div className="">	Mr. V.S. Shinde </div>
                     <div >
                     Lib. Peon
                     </div>
                     <div>Certificate Course in Library Science</div>
                     {/* row end */}
              </div>
              <div className="shadow-lg  grid grid-cols-3 divide-x  w-full h-fit p-2 mt-2 bg-white  text-center rounded-lg sm:w-full justify-between   min-h-[55px] ">  
                     {/* row end */}
                     <div className="">	Mr. R.V. Kulkarni</div>
                     <div >
                     Lib. Peon
                     </div>
                     <div>-</div>
                     {/* row end */}
              </div>
         
          </div>
        </div>
        </section>
        <section className="mt-20 mx-auto  w-[1407px] sm:w-[95%] sm:mt-8 mb-8">
               {/* HEADING */}
      <div className="flex items-center w-full">
        <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
        <div className="ml-3 md:ml-2 w-fit  font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
        LIBRARY COLLECTION DATA
        </div>
      </div>
        <div className="flex flex-row sm:flex-col gap-x-12">
       
          <div className="flex flex-col items-center w-[800px] sm:w-auto mt-10 sm:mt-2">
                <div className=" shadow-lg items-center grid grid-cols-5 md:text-sm w-full mb-4 h-fit p-2 mt-6 bg-[#F8F7FC] font-semibold text-center rounded-lg sm:w-full justify-between  min-h-[55px] ">  
                    <div className="">Programme</div>
                    <div className="">Titles</div>
                    <div className="">Volumes</div> 
                    <div className="">National Journals</div> 
                    <div className="">International Journals</div> 
                </div>
                {libraryCollection.map((item,index)=>{
                  return(<div className=" shadow-lg items-center md:text-sm grid grid-cols-5  w-full h-fit p-1 mt-1 bg-white font-semibold text-center rounded-lg sm:w-full justify-between  min-h-[20px] ">  
                  <div className="">{item["Programme"]}</div>
                  <div className="">{item["Titles"]}</div>
                  <div className="">{item["Volumes"]}</div> 
                  <div className="">{item["National Journals"]}</div> 
                  <div className="">{item["International Journals"]}</div> 
              </div>)
                })}
                
               
             
              
           
          </div>
          <div className="flex flex-col items-center w-[500px] sm:w-auto mt-12 ">
           <img src="/images/About/library/central-library-04.jpg" className="rounded-lg" alt="" />
         
          </div>
        </div>
        </section>
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default CentralLibrary

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
