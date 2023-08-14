import React from "react"

const NIRF = () => {
const [subNav20, setSubNav20] = React.useState(false);
  return (
        <a
            href="#"
            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            onMouseEnter ={() => (setSubNav20(!subNav20))} onMouseLeave ={() => (setSubNav20(!subNav20))}
        >
        
            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <div className="ml-4">
            <p className="text-base font-medium text-[#24346D]    ">
                NIRF
            </p>
            <p className="mt-1 text-sm text-gray-500">
                
            </p>
            </div>
            <svg
                    className={
                        subNav20 === true
                        ? "transform -rotate-90 ml-[282px] h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "transform rotate-0 transition ease-out duration-200 ml-[282px] h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
                    subNav20
                    ? " block translate-y-0 transition ease-out duration-200 fixed z-10 ml-[370px] -mt-2  transform px-2 w-[410px] max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : " hidden translate-y-1 fixed z-10 ml-[350px] mt-3 transform px-2 w-fit max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
            >
            <div className="rounded-lg shadow-lg ring-1 -mt-20 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-3 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <a
                    href="documents/About/nirf/KIT_2023-0117- NIRF 2023 Engineering.pdf"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    target="_blank" rel="noreferrer"
                >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]">
                    KIT NIRF-2023 DCS ENGG
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="documents/About/nirf/KIT_2023-0119- Overall.pdf"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    target="_blank" rel="noreferrer"
                >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]">
                    KIT NIRF-2023 DCS OVERALL
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="documents/About/nirf/KIT_NIRF_Only_Engg_2022.pdf"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    target="_blank" rel="noreferrer"
                >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]">
                    KIT NIRF-2022 DCS ENGG
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="documents/About/nirf/KIT_NIRF_For_Overall_2022.pdf"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    target="_blank" rel="noreferrer"
                >
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D] ">
                    KIT NIRF-2022 DCS OVERALL  
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="/NIRF_IPR"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                    
                
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D] ">
                    Intellectual Property Right (IPR)  
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="documents/About/nirf/national-institutional-ranking-framework-02.pdf"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    target="_blank" rel="noreferrer"
                >
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D] ">
                    National Institutional Ranking Framework1  
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="documents/About/nirf/national-institutional-ranking-framework-01.pdf"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    target="_blank" rel="noreferrer"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D] ">
                    National Institutional Ranking Framework2  
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
  )
}

export default NIRF
