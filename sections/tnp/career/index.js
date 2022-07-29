import React from "react"
import Accordion from "../../../components/Accordion"
import QuickLinksCard from "./quickLinksCard"


const Career = () => {

 

  const [tab1, setTab1] = React.useState(true)
  const [tab2, setTab2] = React.useState(false)
  const [tab3, setTab3] = React.useState(false)
  const [tab4, setTab4] = React.useState(false)

  let title1 = "----Title----"
  let discription1 = "----Body-----" 
  
  return (
    <section className=" px-2   w-full pb-10 sm:w-full  sm:mt-8 flex  md:flex-col items-center">
      {/* HEADING */}
      <div className="flex flex-row gap-x-20  sm:px-0 px-2 sm:flex sm:flex-col">
        
       <div className=" w-5/6 rounded-xl  max-w-5xl    sm:w-full sm:ml-0 ml-10 ">
          {/* <div className=" h-[65px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div> */}
          <div className="ml-3 md:ml-2 w-fit  font-[800]   text-[#3D3859] leading-[54px] text-4xl  md:text-[22px] sm:leading-normal">
          CAMPUS <span className="text-primary "> PLACEMENT </span> IN LAST 3 YEARS
          </div>
          <div className="mt-12  sm:w-full bg-transparent leading-[50px]  sm:mt-4">
           
           
           <div className="grid grid-cols-1 bg-white rounded-xl items-center  shadow-lg justify-center p-4 divide-y">

            <div className="grid grid-cols-3 text-center text-slate-400 p-2">
              <div  onClick={()=>{setTab1(tab1 = true,setTab2(tab2=false),setTab3(tab3=false))}} className={tab1?"transition-all cursor-pointer sm:text-sm text-[#24346D] font-semibold  underline underline-offset-[16px] sm:underline-offset-8 ":"transition-all cursor-pointer sm:text-sm hover:text-[#24346D] hover:font-semibold  hover:underline hover:underline-offset-[16px] "}>2019-2020</div>
              <div  onClick={()=>{setTab2(tab2 = true,setTab1(tab1=false),setTab3(tab3=false))}}  className={tab2?"transition-all cursor-pointer sm:text-sm text-[#24346D] font-semibold  underline underline-offset-[16px] sm:underline-offset-8  ":"transition-all cursor-pointer sm:text-sm hover:text-[#24346D] hover:font-semibold  hover:underline hover:underline-offset-[16px] "}>2020-2021</div>
              <div  onClick={()=>{setTab3(tab3 = true,setTab2(tab2=false),setTab1(tab1=false))}}  className={tab3?"transition-all cursor-pointer sm:text-sm text-[#24346D] font-semibold  underline underline-offset-[16px] sm:underline-offset-8  ":"transition-all cursor-pointer sm:text-sm hover:text-[#24346D] hover:font-semibold  hover:underline hover:underline-offset-[16px] "}>2021-2022</div>
            </div>

            <div className={tab1?"grid grid-rows-3 divide-y":"hidden"}>
              <div className="py-2 px-16 sm:px-0">
                <p className="mb-1 text-4xl font-bold text-primary">253</p>
                <p className="text-base font-normal text-accent">Total Job Offers Received</p>
              </div>
              <div className="py-2 px-16 sm:px-0">
                <p className="mb-1 text-4xl font-bold text-primary">47</p>
                <p className="text-base font-normal text-accent">No of Companies</p>
              </div>
              <div className="py-2 px-16 sm:px-0">
                <p className="mb-1 text-4xl font-bold text-primary">3.43 LPA</p>
                <p className="text-base font-normal text-accent">Average Pay Package (Rs.)</p>
              </div>
              <div className="py-2 px-16 sm:px-0">
                <p className="mb-1 text-4xl font-bold text-primary">7.5 LPA</p>
                <p className="text-base font-normal text-accent">Highest Pay Package (Rs.)</p>
              </div>
            </div>
            <div className={tab2?"grid grid-rows-3 divide-y":"hidden"}>
              <div className="py-2 px-16 sm:px-0">
                <p className="mb-1 text-4xl font-bold text-primary">413</p>
                <p className="text-base font-normal text-accent">Total Job Offers Received</p>
              </div>
              <div className="py-2 px-16 sm:px-0">
                <p className="mb-1 text-4xl font-bold text-primary">92</p>
                <p className="text-base font-normal text-accent">No of Companies</p>
              </div>
              <div className="py-2 px-16 sm:px-0">
                <p className="mb-1 text-4xl font-bold text-primary">3.84 LPA</p>
                <p className="text-base font-normal text-accent">Average Pay Package (Rs.)</p>
              </div>
              <div className="py-2 px-16 sm:px-0">
                <p className="mb-1 text-4xl font-bold text-primary">28.67 LPA</p>
                <p className="text-base font-normal text-accent">Highest Pay Package (Rs.)</p>
              </div>
            </div>
            <div className={tab3?"grid grid-rows-3 divide-y":"hidden"}>
              <div className="py-2 px-16 sm:px-0">
                <p className="mb-1 text-4xl font-bold text-primary">576</p>
                <p className="text-base font-normal text-accent">Total Job Offers Received</p>
              </div>
              <div className="py-2 px-16 sm:px-0">
                <p className="mb-1 text-4xl font-bold text-primary">55</p>
                <p className="text-base font-normal text-accent">No of Companies</p>
              </div>
              <div className="py-2 px-16 sm:px-0">
                <p className="mb-1 text-4xl font-bold text-primary">5.85 LPA</p>
                <p className="text-base font-normal text-accent">Average Pay Package (Rs.)</p>
              </div>
              <div className="py-2 px-16 sm:px-0">
                <p className="mb-1 text-4xl font-bold text-primary">41.00 LPA</p>
                <p className="text-base font-normal text-accent">Highest Pay Package (Rs.)</p>
              </div>
            </div>
           </div>
           <p className="text-xs mt-6">*Data for 2020-2021 Updated upto 29th October 2021</p>
          </div>
        </div>


{/* ---------------------------- */}
      <div className=" w-2/4 sm:w-full flex flex-col justify-center"> <QuickLinksCard /></div>
       

      </div>
      
    </section>
  )
}

export default Career
