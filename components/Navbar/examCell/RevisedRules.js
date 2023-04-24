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
                       
      
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 h-6 w-6 text-[#F07C00]">
  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
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
