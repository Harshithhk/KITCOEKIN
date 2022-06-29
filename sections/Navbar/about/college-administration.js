import React from "react"

const CollegeAdministration = () => {

  const [subNav10, setSubNav10] = React.useState(false);
  return (
                <a
                    href="#"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    onMouseEnter ={() => (setSubNav10(!subNav10))} onMouseLeave ={() => (setSubNav10(!subNav10))}
                >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    <div className="ml-4" >
                    <p className="text-base font-medium text-[#24346D]    " >
                        College Administration
                        
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        
                    </p>
                    </div>
                    <svg
                            className={
                                subNav10 === true
                                ? "transform -rotate-90 ml-[150px] h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                                : "transform rotate-0 transition ease-out duration-200 ml-[150px] h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
                            subNav10
                            ? " block translate-y-0 transition ease-out duration-200 fixed z-10 ml-[370px] -mt-2  transform px-2 w-fit max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                            : " hidden translate-y-1 fixed z-10 ml-[350px] mt-3 transform px-2 w-fit max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        }
                    >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-3 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                <a
                                    href="college-administration"
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                    </svg>
                                
                                    <div className="ml-4">
                                        <p className="text-base font-medium text-[#24346D]  w-[180px]  ">
                                        College Administration
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href="orgnization-structure"
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg"  className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                    </svg>
                                        <div className="ml-4">
                                        <p className="text-base font-medium text-[#24346D] ">
                                            Organization Structure  
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

export default CollegeAdministration
