import React from "react";
import Modal from "../Modal2";
import normalizeUrl from 'normalize-url';


const AchievementsCard = (props) =>{
    const [modalToggle, setModalToggle] = React.useState("");
    let AchievementData = props.AchievementData;

    

  let stringLimit = 200
  let alumniByte = AchievementData.body

  if(alumniByte.length >= stringLimit){
 
      alumniByte = alumniByte.substring(0, stringLimit);    
  }

  if(props.readMore){
    alumniByte = AchievementData.body
  }


    return(
        <>
                <div className="grid grid-cols-4 sm:grid-cols-1">
                        <div className="px-7 pt-7">
                        {AchievementData.images.length > 5?
                        <img className="w-full h-auto rounded" src={AchievementData.images.length>5?AchievementData.images:"images/awatar.png"} alt="Large avatar" />
                        :
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-28 h-28 text-[#24346D]">
                                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                            </svg>
                                        }
                        </div>
                    <div className="container col-span-3  grid grid-cols-12 mx-auto ">
                    <div className="flex flex-col p-6 col-span-full row-span-full ">
                        <div className="flex justify-start">
                            {/* <span className="px-2 py-1 text-xs rounded-full text-white bg-primary">Label</span> */}
                        </div>
                        <h1 className="text-3xl font-semibold">{AchievementData.title}</h1>
                        <p className="flex-1 pt-2">{alumniByte}</p>
                        <a rel="noopener noreferrer" href={normalizeUrl(AchievementData.link, { forceHttps: true })} target="_blank" className={`text-primary ${AchievementData.link? "visible":"invisible"} hover:text-orange-700 py-4 font-serif`}>Click Me: <span className="underline ">{AchievementData.link}</span></a>
                        {/* <img src={AchievementData.achievementPhotoUrl} className={`${props.readMore && AchievementData.achievementPhotoUrl.length > 5?"block py-7":"hidden"}`} alt="Achievement" /> */}
                        <div className="hover:cursor-pointer inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-primary">
                            <span onClick={()=>{props.setReadMore(!props.readMore);props.setReadMoreIndex(props.index)}}>{props.readMore?"Read less":"Read more"}   </span>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${props.readMore?"rotate-180":""}`}>
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-400">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                                </svg>
                                <span className="self-center text-sm"> {AchievementData.alumniName}</span>
                            </div>
                            <span className="text-xs">{AchievementData.date}</span>
                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default AchievementsCard