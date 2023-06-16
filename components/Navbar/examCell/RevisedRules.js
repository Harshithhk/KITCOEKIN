import React from "react"

const RevisedRules  = () => {
  const [subNav, setSubNav] = React.useState(false);

  return(
    <>
      <a
                        href="documents/examCell/Revised Rules from2021-22.pdf"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        // onMouseEnter ={() => (setSubNav(!subNav))} onMouseLeave ={() => (setSubNav(!subNav))}

                      >
                       
      
                       <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>

                        <div className="ml-4">
                          <p className="text-base font-medium text-[#24346D]    ">
                          Revised Rules and Regulations 
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
                          </p>
                        </div>
                      
               
                      </a>
    </>
  )
}

export default RevisedRules 
