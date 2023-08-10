import Link from "next/link"
import React from "react"

const BoardOfDirectors = () => (
  <Link href="board-of-directors" passHref >
    <span
    
    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:cursor-pointer"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-[#F07C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
   </svg>
   
    <div className="ml-4">
      <p className="text-base font-medium text-[#24346D]    ">
        Board Of Directors
      </p>
      <p className="mt-1 text-sm text-gray-500">
      {/* assssssss ssssssss ssssssssss sssssssssss assssss ssssss */}
      </p>
    </div>
  </span>
  </Link>
  )


export default BoardOfDirectors
