import React from "react";

export default function Modal({children,title,body}) {
  const [showModal, setShowModal] = React.useState(false);
  const widthLarge = "max-w-6xl"

  return (
    <>
      <div onClick={() => setShowModal(true)} >
        {children}
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center  flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className={`relative w-auto my-6 mx-auto ${widthLarge} `}>
              {/*content*/}
              <div className="border-0 rounded-lg  max-h-[600px] sm:max-h-screen mt-16 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl text-[#3D3859] font-semibold">
                  {title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 -mt-2 text-black opacity-60  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-3xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className=" whitespace-pre-wrap relative p-6 sm:p-1 flex-auto overflow-y-scroll">
               
                    <p className="my-4 text-slate-500 text-justify sm:my-0 text-lg leading-relaxed">
                    {body}
                    </p>
                 
                  
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