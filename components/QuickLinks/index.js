import React from "react";
import { isUserSignedIn } from "../../utils/auth";
import { useRouter } from "next/router"

const QuickLinks = ({ children }) => {
    return(
        <div  className="w-full quickLink grid grid-flow-row divide-y bg-white shadow-lg font-semibold rounded-lg p-6   sm:w-full mt-10 sm:mt-6 ">
            {children}
        </div>
    )
}


const Plates = ({ children,logo,setSubLink=(item)=>{!item},subLink,href,setModalToggle,modalPath,setAuthText,authText,focusLink}) => {
  
    const router = useRouter()

    // onClick={() => setSubLink(!subLink)} 
    
    async function getSignInStatus(propAuth) {
      let result = false;
      
      if(!propAuth){
        while (!result) {
          // Make an API call or perform some asynchronous operation to get the result
          result =  isUserSignedIn(); 
          
          // Alternatively, you can use a condition to check for a specific result
          // For example: if (result === desiredResult) { break; }
          
          // Optional: Add a delay between each iteration to avoid excessive CPU usage
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }else{
        localStorage.removeItem('token');
        router.route != "/alumni" ? router.push("/alumni") : null
        result = false
      }
      
      // Do something with the final result
      return result
    }
     
    return(
           <a href={href}>
           <div onClick={() => {
            setSubLink(!subLink); 
            modalPath != undefined ? setModalToggle(modalPath):null;
            authText != undefined && authText == false  ?    getSignInStatus(authText).then((result)=>{setAuthText(result);router.reload(window.location.pathname)}).catch((err)=>{console.log("failed",err)}):null;
            authText != undefined && authText == true ?    getSignInStatus(authText).then((result)=>{setAuthText(result)}).catch((err)=>{console.log("failed",err)}):null
            }}  className={` ${authText != undefined && authText == true ? " text-red-500 ": "text-slate-400"} quickLink-plates hover:bg-slate-50 hover:cursor-pointer  flex flex-row  justify-between px-4 py-2`}>
              {typeof(children)=== "object"?children[0]:children}
              {focusLink && focusLink != undefined && 
                   <div
                   className=" animate-pulse ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-primary text-white rounded-full"
                 >
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="feather feather-arrow-right mr-2 "
                   >
                     <line x1="5" y1="12" x2="19" y2="12"></line>
                     <polyline points="12 5 19 12 12 19"></polyline>
                   </svg>
                   New
                 </div> || ""
              }
                {logo ==="dropDown" ?
                <>
                    <svg
                 className={
                   subLink === true
                     ? " z-11 transform rotate-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                     : "transform -rotate-90 transition  ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                 }
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20"
                 fill="currentColor"
                 aria-hidden="true"
               >
                 <path
                   fillRule="evenodd"
                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                   clipRule="evenodd"
                 />
                    </svg>     
               </>
                : logo ==="document"?
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-7 w-7 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>:
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
                }
              
            </div>
            {typeof(children)=== "object"?children[1]:""}
           </a> 
    
    )
}

const SubQuickLinks = ({ children,subLink,setSubLink=(item)=>{!item} }) => {
    return(
        <div 
            className={subLink?" relative  quickLink-subQuickLink grid grid-flow-row divide-y bg-white shadow-lg font-semibold rounded-lg p-2  sm:-ml-0  w-full mt-2 ":"hidden"}>
            {children}
        </div>
    )
}

const SubPlates = ({children,href,logo}) => {
    return (
      <a href={href}>
        <div className="quickLink-subPlates hover:bg-slate-50 hover:cursor-pointer text-slate-400 flex flex-row  justify-between px-4 py-2 sm:p-2">
              {children}
               {logo === "document" ? 
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-7 w-7 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
               :
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
               
               }
                
              
            </div>
            </a>
    )
}




QuickLinks.Plates = Plates;
QuickLinks.SubPlates = SubPlates;
QuickLinks.SubQuickLinks = SubQuickLinks;


export default QuickLinks