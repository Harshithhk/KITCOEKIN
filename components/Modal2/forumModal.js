import React from "react";
import ForumComments from "../../sections/alumni/forum/forumComments";

export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(false);
  const widthLarge = "max-w-6xl"

  return (
    <>
      
    {props.modalToggle ? (
        <>
          <div
            className="justify-center items-center  flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className={`relative w-auto my-6 mx-auto ${widthLarge} `}>
              {/*content*/}
              <div className="border-0 rounded-lg  max-h-[600px] sm:max-h-screen mt-16 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl sm:text-xl text-[#3D3859] font-semibold">
                  {props.ForumData.title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 -mt-2 text-black opacity-60  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => props.setModalToggle(" ")}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-3xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className=" whitespace-pre-wrap relative p-6 sm:p-1 flex-auto overflow-y-scroll">
               
                    <p className="my-4 text-slate-500 text-justify sm:my-0 text-lg leading-relaxed">
                    {props.ForumData.body}
                    </p>
                    <ForumComments />
                  
                </div>
                {/*footer*/}
                <div className=" p-6 border-t border-solid border-slate-200 rounded-b">
                <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-400">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                                </svg>
                                <span className="self-center text-sm">by {props.ForumData.name}</span>
                            </div>
                            <span className="text-xs">{props.ForumData.time}</span>
                        </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}