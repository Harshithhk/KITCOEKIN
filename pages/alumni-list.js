import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/alumni/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"
import React from "react"

export async function getStaticProps() {
    let AlumniList = []
    AlumniList = await fetch(
        `${process.env.SERVER_API}/api/alumni/`
    )
    
    AlumniList = await AlumniList.json()
  
    return {
      props: {
        AlumniList: AlumniList,
        
      },
      revalidate: 10,
    }
  }

const CseEngineeringMous = (props) => {
    const [modalToggle, setModalToggle] = React.useState("");
    const [showMore, setShowMore] = React.useState(null);

 

    let AlumniList = props.AlumniList
    

    return (
        <DefaultLayout modalToggle = {modalToggle} setModalToggle = {setModalToggle}>
            <div className="w-full ">
                <section className="flex flex-col h-[250px] items-center w-full relative">
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
                    <div className="absolute w-full h-[250px] top-0 left-0 bg-[#24346D] z-0"></div>
                    <h1
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        className="w-[75%] mt-14 sm:text-xl  text-4xl font-bold text-center text-white z-20"
                    >
                         Alumni List
                    </h1>
                    <br></br>
                    <br></br>
                    <h6
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
                    >
                    <a href="alumni">
            <span className="hover:text-primary hover:cursor-pointer">
              {" "}
              
              Alumni Home
            </span>{" "}</a> <span className=" ">|</span> Alumni List

                    </h6>
                </section>
                {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}

                <section className="overflow-hidden max-w-auto mx-auto md:mx-0  bg-secondary">



                <div className="grid grid-cols-3  sm:px-0 px-2 sm:flex sm:flex-col pb-20 mt-6">

                <section className="col-start-1  col-end-3 sm:mr-0 sm:ml-0 sm:mt-6 sm:px-4 sm:pb-10  pb-20 mx-10  h-fit   ">
                            <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                               ALUMNI LIST
                            </div>
                            {/* -------------- */}
                   <div className="rounded-xl divide-y-2 bg-white p-4 sm:p-2">
                            {AlumniList.map((item,index)=>{
                                return(<>
                                {showMore == index?
    <div className=" ">
  <div className="bg-white grid grid-cols-4 sm:grid-cols-1 gap-1 pl-7  p-4">
    <div className="flex space-x-2 sm:col-span-4 mb-2">
                <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 rounded-full text-[#24346D]">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
</svg>

                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {item.first_name} {item.middle_name} {item.last_name}
                        </p>
                        <p className="text-sm text-gray-500  truncate dark:text-gray-400">
                        {item.email}
                        </p>
                    </div>
    </div>
    <div className="text-gray-500 text-sm mb-2 sm:col-span-4">Date of Birth:<span className="text-[#24346D] text-base"> {item.date_of_birth}</span> </div>
    <div className="text-gray-500 text-sm mb-2 sm:col-span-4">phone: <span className="text-[#24346D] text-base"> {item.phone}</span></div>
    <div className="text-gray-500 text-sm mb-2 sm:col-span-4">Pass Out Year: <span className="text-[#24346D] text-base"> {item.pass_out_year}</span></div>
    <div className="text-gray-500 text-sm mb-2 sm:col-span-4">Branch: <span className="text-[#24346D] text-base"> {item.branch}</span></div>
    <div className="text-gray-500 text-sm mb-2 sm:col-span-4">Company:<span className="text-[#24346D] text-base"> {item.company}</span> </div>
    <div className="text-gray-500 text-sm mb-2 sm:col-span-4">Designation: <span className="text-[#24346D] text-base">  {item.designation}</span></div>
    <div className="text-gray-500 text-sm mb-2 sm:col-span-4"></div>
    
    <div className="text-gray-500 text-sm mb-2 sm:col-span-4 col-span-4">Permanent Address: <span className="text-[#24346D] text-base"></span>{item.permanent_address.permanent_street}, {item.permanent_address.permanent_district}, {item.permanent_address.permanent_country}, {item.permanent_address.designation}</div>
    

    <div className="text-gray-500 text-sm mb-2 sm:col-span-4 col-span-3">Current Address: <span className="text-[#24346D] text-base"></span>{item.current_address.display_name}</div>

    <div onClick={()=>{setShowMore(null)}} className="text-primary hover:text-orange-800 hover:cursor-pointer text-sm mb-2 ">Show Less</div>
    

  </div>
</div> 
:
<div className="    px-4 pt-2">
    <div className="w-full relative flex sm:flex-col text-sm pb-2 text-left sm:items-start items-center justify-evenly  text-gray-500  dark:text-gray-400">
                <div className="flex space-x-2 sm:p-2 ">
                    <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 rounded-full text-[#24346D]">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
</svg>                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {item.name.first_name} {item.name.middle_name} {item.name.last_name}
                        </p>
                        <p className="text-sm text-gray-500  truncate dark:text-gray-400">
                        {item.email}
                        </p>
                    </div>
                </div>
                
                <div className="px-4 py-4 sm:py-[0.6px]  max-w-[250px]">
                    <span className="hidden sm:inline"> Date Of Birth: </span>{item.date_of_birth}
                </div>
                <div className="px-4 py-4 sm:py-[0.6px]  max-w-[250px]">
                <span className="hidden sm:inline"> Phone: </span>{item.phone}
                </div>
                <div className="px-4 py-4 sm:py-[0.6px]  max-w-[250px]">
                <span className="hidden sm:inline"> Batch Year: </span> {item.pass_out_year}
                </div>
                <div className="px-4 py-4 sm:py-[0.6px] sm:max-w-full max-w-[250px] ">
                <span className="hidden sm:inline"> Branch: </span>{item.branch} 
                </div>
                <div onClick={()=>{setShowMore(index)}} className="text-primary float-right text-right  right-0 hover:text-orange-800 hover:cursor-pointer px-4 py-4 sm:py-[0.6px]  max-w-[250px]">
                    Show More
                </div>
               
    </div>
   
</div>
}
                                </>)
                            })}
 </div>



                  
                        </section>


                        {/* -------------col2--------------- */}
                        <div className="flex flex-col justify-start sm:mx-1"><QuickLinksCard setModalToggle = {setModalToggle}/>  </div>


                    </div>
                </section>
                <Footer />
            </div>
        </DefaultLayout>
    )
}
export default CseEngineeringMous
