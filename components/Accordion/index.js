import React from "react";

const Accordion = (props) => {
    return(
        <>
         <div className={props.accordion ? "w-auto h-12 justify-between mt-6 rounded-t-md bg-primary text-2xl text-white flex items-center px-4 sm:h-fit  sm:text-base sm:py-1" :"flex justify-between items-center w-auto p-4 mt-6 bg-[#F8F7FC] sm:text-sm sm:leading-normal sm:p-2"}>
            {props.title}
            <div onClick={() => (props.setAccordion((item)=>!item), props.setRestAccordion.map((setItem)=>{setItem(false)}))} className={props.accordion ? "hover:cursor-pointer bg-primary hover:bg-orange-300 flex items-center justify-center w-6 h-6 mr-2 rounded-full  ": "hover:cursor-pointer hover:bg-slate-200 flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-slate-100 "} >
            <div className={props.accordion ? "h-[5px] w-[16px] bg-[#3D3859]" : "hidden"}></div>
            <img className={props.accordion ? "hidden":"h-4"} src="/images/Department/plus.png" alt="" />
            </div>  
          </div>
          <div  className={ props.accordion ? "w-auto p-4 py-8 bg-[#F8F7FC]   sm:leading-normal sm:text-sm sm:p-2" :"hidden w-auto p-4 py-8 bg-[#F8F7FC]   sm:leading-normal sm:text-sm sm:p-2"}>
            {props.discription}
          </div>
        </>
    )
}

export default Accordion;