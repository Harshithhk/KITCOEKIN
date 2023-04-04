import React from "react";
import Modal from "../Modal2";

const ForumCard = (props) =>{
    const [modalToggle, setModalToggle] = React.useState("");
    let ForumData = props.ForumData;

    

  let stringLimit = 200
  let bodyString = ForumData.body

  if(bodyString.length >= stringLimit){
 
      bodyString = bodyString.substring(0, stringLimit);    
  }

  if(props.readMore){
    bodyString = ForumData.body
  }


    return(
        <>
                <div className="container grid grid-cols-12 mx-auto ">
                    <div className="flex flex-col p-6 col-span-full row-span-full ">
                        <div className="flex justify-start">
                            {/* <span className="px-2 py-1 text-xs rounded-full text-white bg-primary">Label</span> */}
                        </div>
                        <h1 className="text-3xl font-semibold">{ForumData.title}</h1>
                        <p className="flex-1 pt-2">{bodyString}</p>
                        <a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-primary">
                            <span onClick={()=>{props.setReadMore(!props.readMore);props.setReadMoreIndex(props.index)}}>{props.readMore?"Read less":"Read more"}   </span>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${props.readMore?"rotate-180":""}`}>
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-400">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                                </svg>
                                <span className="self-center text-sm">by {ForumData.name}</span>
                            </div>
                            <span className="text-xs">{ForumData.time}</span>
                        </div>
                    </div>
                </div>
                <Modal ForumData = {ForumData} modalToggle = {modalToggle}  setModalToggle = {setModalToggle} />
        </>
    )
}

export default ForumCard