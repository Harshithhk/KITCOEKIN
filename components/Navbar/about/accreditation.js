import React from "react"

const Accreditation = () => {
  const [subNav30, setSubNav30] = React.useState(false);
  const [subNav31, setSubNav31] = React.useState(false);
  return (
        <a
            href="#"
            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            onMouseEnter ={() => (setSubNav30(!subNav30))} onMouseLeave ={() => (setSubNav30(!subNav30))}
        >
        
            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            <div className="ml-4">
            <p className="text-base font-medium text-[#24346D]    ">
                Accreditation
            </p>
            <p className="mt-1 text-sm text-gray-500">
                
            </p>
            </div>
            <svg
                    className={
                        subNav30 === true
                        ? "transform -rotate-90 ml-[220px] h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "transform rotate-0 transition ease-out duration-200 ml-[220px] h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
            <div
                className={
                    subNav30
                    ? " block translate-y-0 transition ease-out duration-200 fixed z-10 ml-[370px] -mt-2  transform px-2 w-[301px] max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : " hidden translate-y-1 fixed z-10 ml-[350px] mt-3 transform px-2 w-fit max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
            >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-3 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <a
                    href="aicte-approval"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]  ">
                    AICTE Approval
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="documents/About/accreditation/NAAC-and-NBA.pdf"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    // onMouseEnter ={() => (setSubNav31(!subNav31))} onMouseLeave ={() => (setSubNav31(!subNav31))}
                >
                    
                
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D] ">
                    NBA & NAAC  
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                    {/* <svg
                    className={
                        subNav31 === true
                        ? "transform -rotate-90 ml-[73px] h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "transform rotate-0 transition ease-out duration-200 ml-[73px] h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
                </svg> */}
                <div
                className={
                    subNav31
                    ? " block translate-y-0 transition ease-out duration-200 fixed z-10 ml-[240px] -mt-2  transform px-2 w-[368px] max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : " hidden translate-y-1 fixed z-10 ml-[240px] mt-3 transform px-2 w-fit max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
            >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-3 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <a
                    href="#"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]   ">
                    Dept. of Civil Engg.
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="#"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D] ">
                    Dept. of Mechanical Engg.                                  </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="#"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D] ">
                    Dept. of Civil and Enviormental Engg.  
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="#"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D] ">
                    Dept. of ETC  
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                </div>
                </div>
        </div>
                </a>
                </div>
                </div>
        </div>
        </a>
  )
}

export default Accreditation
