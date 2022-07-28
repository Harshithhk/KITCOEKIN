import React from "react"

const branchPlacement = () => {
  let placement = [{
    "Branch": "Biotechnology Engineering",
    "Y1920": 16,
    "Y2021": 34,
    "Y2122": 3
},{
    "Branch": "Civil Engineering",
    "Y1920": 10,
    "Y2021": 12,
    "Y2122": 10
},{
    "Branch": "Computer Science & Engineering",
    "Y1920": 69,
    "Y2021": 72,
    "Y2122": 207
},{
    "Branch": "Electronics & Telecommunication",
    "Y1920": 24,
    "Y2021": 52,
    "Y2122": 89
},{
    "Branch": "Electronics Engineering",
    "Y1920": 26,
    "Y2021": 50,
    "Y2122": 63
},{
    "Branch": "Environmental Engineering",
    "Y1920": 6,
    "Y2021": 26,
    "Y2122": 13
},{
    "Branch": "Information Technology",
    "Y1920": 53,
    "Y2021": 73,
    "Y2122": "-"
},{
    "Branch": "Mechanical Engineering",
    "Y1920": 39,
    "Y2021": 83,
    "Y2122": 118
},{
    "Branch": "Production Engineering",
    "Y1920": 10,
    "Y2021": 30,
    "Y2122": "-"
}
]
  return (
    <section className="sm:pt-16 mt-8  bg-secondary max-w-full">
      <div className="flex items-center w-full ml-16 sm:ml-4">
        <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
        <div className="ml-3 md:ml-2 w-fit  text-center   text-[#24346D] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
          BRANCH WISE PLACEMENT
        </div>
      </div>
      <section className="relative z-30 w-full mt-2 sm:mt-6 md:w-full pb-20 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10  ">
          <div className="sm:hidden grid grid-cols-4 items-center text-slate-500 justify-items-center mt-6  w-full h-16 sm:h-16 p-2 mb-6 shadow-lg rounded-2xl">
              
              <div className=" ">Branch</div>
              <div className=" ">2019-2020</div>
              <div className=" ">2020-2021</div>
              <div className=" ">2021-2022</div>
          </div> 

            {placement.map((item, index) => {
               return (
                <>
                <div className="sm:hidden grid grid-cols-4 items-center justify-items-center sm:gap-x-2 w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                   
                    <div className="">{item.Branch}</div>
                    <div className="">{item.Y1920}</div>
                    <div className="">{item.Y2021}</div>
                    <div className="">{item.Y2122}</div>      
                </div>
                <div className=" sm:grid 2xl:hidden divide-y grid-rows-4 items-center text-left  w-full h-fit overflow-x-auto sm:h-fit p-2 mt-2 shadow-lg rounded-2xl bg-white">
                 
                  <div className="grid grid-cols-2">
                    <div className="text-slate-400">Branch</div>   
                    <div className="">{item.SrNo}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                  <div className=" text-slate-400">2019-2020</div>
                    <div className="">{item.Y1920}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                  <div className=" text-slate-400">2020-2021</div>  
                    <div className="">{item.Y2021}</div>      
                  </div>
                  <div className="grid grid-cols-2">
                  <div className=" text-slate-400">2021-2022</div> 
                    <div className="">{item.Y2122}</div>      
                  </div>
                  
                </div>
                </>
              )
            })}
          </section>
    </section>
  )
}

export default branchPlacement
