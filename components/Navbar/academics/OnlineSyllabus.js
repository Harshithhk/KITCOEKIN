import React from "react"

const OnlineSyllabus = () => {
  const [subNav, setSubNav] = React.useState(false);

  return(
    <>
      <a
                        href="#"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        onMouseEnter ={() => (setSubNav(!subNav))} onMouseLeave ={() => (setSubNav(!subNav))}

                      >
                       
      
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 h-6 w-6 text-[#F07C00]">
  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
</svg>

                        <div className="ml-4">
                          <p className="text-base font-medium text-[#24346D]    ">
                          Online Syllabus
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                          </p>
                        </div>
                        <svg
                    className={
                        subNav === true
                        ? "transform -rotate-90 ml-[210px] h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                        : "transform rotate-0 transition ease-out duration-200 ml-[210px] h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
                    ? " block translate-y-0 transition ease-out duration-200 fixed z-10 ml-[250px] -mt-2  transform px-2 w-[301px] max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : " hidden translate-y-1 fixed z-10 ml-[250px] mt-3 transform px-2 w-fit max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-3 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a
                        href="online-syllabus"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                    

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 h-6 w-6 text-[#F07C00]">
                          <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                        </svg>
                        <div className="ml-4">
                        <p className="text-base font-medium text-[#24346D]  ">
                        Online Syllabus
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                        </p>
                        </div>
                    </a>
                    <a
                        href="online-syllabus-old"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                    

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 h-6 w-6 text-[#F07C00]">
                          <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                        </svg>
                        <div className="ml-4">
                        <p className="text-base font-medium text-[#24346D]  ">
                        2022-23 Scheme
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                        </p>
                        </div>
                    </a>
                    <a
                        href="old_2017_online-syllabus"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                    
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 h-6 w-6 text-[#F07C00]">
                          <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                        </svg>
                        <div className="ml-4">
                        <p className="text-base font-medium text-[#24346D]  ">
                        2017-old Scheme
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
    </>
  )
}

export default OnlineSyllabus
