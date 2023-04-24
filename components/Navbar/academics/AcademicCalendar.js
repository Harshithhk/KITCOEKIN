import React from "react"

const AcademicCalendar = () =>{
  const [subNav, setSubNav] = React.useState(false);
  const [subNav1, setSubNav1] = React.useState(false);

  return(<>
    <a
                        href="#"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        onMouseEnter ={() => (setSubNav(!subNav))} onMouseLeave ={() => (setSubNav(!subNav))}

                      >
                       
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-[#F07C00]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-[#24346D]    ">
                          Academic Calendar
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                          </p>
                        </div>
                        <svg
                    className={
                        subNav === true
                        ? "transform -rotate-90 ml-[185px] h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "transform rotate-0 transition ease-out duration-200 ml-[185px] h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
                {/* second nav box */}
                <div
                className={
                    subNav
                    ? " block translate-y-0 transition ease-out duration-200 fixed z-10 -ml-[340px] -mt-2  transform px-2 w-[350px] max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : " hidden translate-y-1 fixed z-10 ml-[250px] mt-3 transform px-2 w-fit max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
            >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-3 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <a
                    href="documents/admission/phdProgram/kit-phd-admission-form.pdf"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    onMouseEnter ={() => (setSubNav1(!subNav1))} onMouseLeave ={() => (setSubNav1(!subNav1))}

                >
                

                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]  ">
                    Academic Calendar 2022-2023
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                    {/* -----------------1-------- */}
                    <svg
                            className={
                                subNav1 === true
                                ? "transform -rotate-90 ml-[20px] h-6 w-6 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                                : "transform rotate-0 ml-[20px] h-6 w-6  transition ease-out duration-200 5 text-gray-400 group-hover:text-gray-500"
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
                            subNav1
                            ? " block translate-y-0 transition ease-out duration-200 fixed z-10 -ml-[360px] -mt-2  transform px-2 w-[368px] max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                            : " hidden translate-y-1 fixed z-10 ml-[240px] mt-3 transform px-2 w-fit max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        }
                    >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-3 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                    href="documents/academics/academic-calender/Academic22_23/13-01-2023 Updated Academic Calender 2022-23 Sem-II (TY B.Tech, B. Tech.).pdf"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]  ">
                    SEM-II -TY B.Tech, B. Tech.
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="documents/academics/academic-calender/Academic22_23/Academic Calender 2022-23 Sem-II (FY B.Tech,FY M.Tech).pdf"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]  ">
                    SEM-II -FY B.Tech, M.Tech
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="documents/academics/academic-calender/Academic22_23/13.01.2023 Updated Academic Calender 2022-23 Sem-II (SY B.Tech, DSE).pdf"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]  ">
                    SEM-II -SY B.Tech, DSE
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="documents/academics/academic-calender/Academic22_23/Academic%20Calender%202022-23%20Sem-I%20(FY%20B.Tech,%20%20FY%20MTech).pdf"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]  ">
                    SEM-I -FY B.Tech, FY M.Tech.
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="documents/academics/academic-calender/Academic22_23/Academic Calender AY_2022-23 Sem-I (SY B.Tech, DSE).pdf"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]  ">
                    SEM-I -SY,DSY B.Tech
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                    </p>
                    </div>
                </a>
                <a
                    href="documents/academics/academic-calender/Academic22_23/12-08-2022 Final Academic Calender 2022-23 Sem-I (TY B.Tech, B. Tech.).pdf"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]  ">
                    SEM-I -TY, Final Year B.Tech
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
  </>)
}

export default AcademicCalendar
