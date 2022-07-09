import React from "react"

const ManditoryDisclosure = () => {
    
  const [subNav40, setSubNav40] = React.useState(false);
  return (
        <a
            href="#"
            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            onMouseEnter ={() => (setSubNav40(!subNav40))} onMouseLeave ={() => (setSubNav40(!subNav40))}
        >
        
            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
            </svg>
            <div className="ml-4">
            <p className="text-base font-medium text-[#24346D]    ">
                Manditory Disclosure
            </p>
            <p className="mt-1 text-sm text-gray-500">
            
            </p>
            </div>
            <svg
                    className={
                        subNav40 === true
                        ? "transform -rotate-90 ml-[162px] h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "transform rotate-0 transition ease-out duration-200 ml-[162px] h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
                    subNav40
                    ? " block translate-y-0 transition ease-out duration-200 fixed z-10 ml-[370px] -mt-2  transform px-2 w-[350px] max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : " hidden translate-y-1 fixed z-10 ml-[350px] mt-3 transform px-2 w-fit max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
            >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-3 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <a
                    href="manditory-disclosure-20-21"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]  ">
                    Mandatory Disclosures AY:2020-21
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D] ">
                    Mandatory Disclosures AY:2019-20 
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

export default ManditoryDisclosure
