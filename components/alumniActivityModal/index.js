import React from "react";
import normalizeUrl from 'normalize-url';

export default function Modal(props) {
  const widthLarge = "max-w-6xl"

  return (
    <>
      {props.showModal ? (
        <>
          <div
            className=" justify-center items-center  flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className={`relative  w-1/2 sm:w-full  my-6 mx-auto ${widthLarge} `}>
              {/*content*/}
              <div className="border-0 rounded-lg  max-h-[600px] sm:max-h-screen sm:-mt-0 mt-16 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                  <div className="w-4/6">
                  <h3 className="text-2xl sm:text-base text-[#3D3859] font-semibold">
                  {props.modalDetails.title}    
                  </h3>
                  </div>
            <div className="w-2/6 flex items-center   justify-center">
                  <h4 className="text-sm sm:text-[10px]  sm:mr-10 inline-block fixed underline font-semibold text-[#3D3859] mr-6">
                  Date : {props.modalDetails.date}
                  {/* <br/>Timing : {props.modalDetails.fromTime}-{props.modalDetails.toTime} */}
                  </h4>
                  <button
                    className=" p-1 ml-auto bg-transparent border-0   text-black opacity-60  text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => props.setShowModal(false)}
                  >
                    <span className="bg-transparent text-black     text-3xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                  </div>
                </div>
                {/*body*/}
                <div className=" whitespace-pre-wrap relative p-6 sm:p-2 flex-auto overflow-y-scroll">
                   
                
                    <p className="my-4 text-slate-500 text-justify sm:my-0 text-lg sm:text-sm  leading-relaxed">
                    {props.modalDetails.body}
                    </p>
                   
                   
                    {props.modalDetails.images?<img src={props.modalDetails.images} className="h-fit w-fit" alt="" />:null}
               <br/>
                    {props.modalDetails.link?<a href={normalizeUrl(props.modalDetails.link, { forceHttps: true })} target="_blank" rel="noreferrer"  className="my-4 sm:text-sm text-primary text-justify sm:my-0 text-lg leading-relaxed">
                      click me : {props.modalDetails.link}
                    </a>:null} 
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  {/* <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button> */}
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
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