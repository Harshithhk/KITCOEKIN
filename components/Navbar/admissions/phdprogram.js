import React from "react"

const Phdprogram = () => {
  const [subNav30, setSubNav30] = React.useState(false);
  const [subNav31, setSubNav31] = React.useState(false);
  return (
        <a
            href="#"
            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            onMouseEnter ={() => (setSubNav30(!subNav30))} onMouseLeave ={() => (setSubNav30(!subNav30))}
        >
        
            
            <svg xmlns="http://www.w3.org/2000/svg"  className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path d="M12 14l9-5-9-5-9 5 9 5z" />
  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
</svg>
            <div className="ml-4 ">
            <p className="text-base font-medium text-[#24346D]    ">
              Ph.D. Program 
            </p>
            <p className="mt-1 text-sm text-gray-500">
                
            </p>
            </div>
            <svg
                    className={
                        subNav30 === true
                        ? "transform -rotate-90 ml-[90px] h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "transform rotate-0 transition ease-out duration-200 ml-[90px] h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
                    ? " block translate-y-0 transition ease-out duration-200 fixed z-10 ml-[250px] -mt-2  transform px-2 w-[301px] max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : " hidden translate-y-1 fixed z-10 ml-[250px] mt-3 transform px-2 w-fit max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
            >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-3 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <a
                    href="documents/admission/phdProgram/kit-phd-admission-form.pdf"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                

                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]  ">
                    Admission Form
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="documents/admission/phdProgram/phd-student-guidlines.pdf"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]  ">
                    Rules & Regulations
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="#"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    onMouseEnter ={() => (setSubNav31(!subNav31))} onMouseLeave ={() => (setSubNav31(!subNav31))}
                >
                    

                
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D] ">
                    Ph.D. Research centers  
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                    <svg
                    className={
                        subNav31 === true
                        ? "transform -rotate-90 ml-[20px] h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "transform rotate-0 ml-[20px]  transition ease-out duration-200 h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
                    subNav31
                    ? " block translate-y-0 transition ease-out duration-200 fixed z-10 ml-[240px] -mt-2  transform px-2 w-[368px] max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : " hidden translate-y-1 fixed z-10 ml-[240px] mt-3 transform px-2 w-fit max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
            >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-3 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <a
                    href="phd-center-electronics"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                 <svg xmlns="http://www.w3.org/2000/svg"  className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                    
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]   ">
                    Electronic Engineering
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                       
                    </p>
                    </div>
                </a>
                {/* <a
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
                      
                    </p>
                    </div>
                </a> */}
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

export default Phdprogram
