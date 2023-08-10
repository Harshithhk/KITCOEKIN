import Link from "next/link"
import React from "react"

const GoverningCouncil = () => (
    <Link passHref href="governing-council" >
                <span
                    
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:cursor-pointer"
                >
                    
                    <svg
                    className="flex-shrink-0 h-6 w-6 text-[#F07C00]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                    </svg>
                    <div className="ml-4">
                    <p className="text-base font-medium text-[#24346D]    ">
                        Governing Council
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        
                    </p>
                    </div>
                </span>
                </Link>
  )


export default GoverningCouncil
