import React from "react"

const branchPlacement = () => {
  let placement = [
    {
      Branch: "Biotechnology Engineering",
      Y2023: 21,
      Y2122: 20,
  Y2021: 34,
   },
    {
      Branch: "Civil Engineering",
      Y2023: 72,
      Y2122: 22,
  Y2021: 12,
   },
    {
      Branch: "Computer Science & Engineering",
      Y2023: 262,
       Y2122: 211,
Y2021: 72,
    },
    {
      Branch: "Electronics & Telecommunication",
      Y2023: 151,
      Y2122: 96,
  Y2021: 52,
   },
    // {
    //   Branch: "Electronics Engineering",
    //   Y2023: 26,
    //   Y2021: 50,
    //   Y2122: 63,
    // },
    {
      Branch: "Environmental Engineering",
      Y2023: 26,
      Y2122: 21,
  Y2021: 26,
   },
  //   {
  //     Branch: "Information Technology",
  //     Y2023: 198,
  //     Y2122: 67,
  // Y2021: '-',
  //  },
    {
      Branch: "Mechanical Engineering",
      Y2023: 198,
      Y2122: 127,
 Y2021: 83,
    },
    {
      Branch: "Electrical Engineering",
      Y2023: 72,
       Y2122: "67",
       Y2021: "-",

    },
  ]

  return (
    <section className="max-w-full mt-8 sm:pt-16 bg-secondary">
      <div className="flex items-center w-full ml-16 sm:ml-4">
        <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
        <div className="ml-3 md:ml-2 w-fit  text-center   text-[#24346D] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
          BRANCH WISE PLACEMENT
        </div>
      </div>
      <section className="relative z-30 w-full pb-20 mx-auto mt-2 sm:mt-6 md:w-full md:mx-0 h-fit px-14 sm:px-4 sm:pb-10 ">
        <div className="grid items-center w-full h-16 grid-cols-4 p-2 mt-6 mb-6 shadow-lg sm:hidden text-slate-500 justify-items-center sm:h-16 rounded-2xl">
          <div className="">Branch</div>
          <div className="">2020-2021</div>
          <div className="">2021-2022</div>
          <div className="">2022-2023</div>

        </div>

        {placement.map((item, index) => {
          return (
            <>
              <div className="grid items-center w-full grid-cols-4 p-2 mt-2 overflow-x-auto bg-white shadow-lg sm:hidden justify-items-center sm:gap-x-2 h-fit sm:h-fit rounded-2xl">
                <div className="">{item.Branch}</div>
                <div className="">{item.Y2021}</div>
                <div className="">{item.Y2122}</div>
                <div className="">{item.Y2023}</div>

              </div>
              <div className="items-center w-full grid-rows-4 p-2 mt-2 overflow-x-auto text-left bg-white divide-y shadow-lg  sm:grid 3xl:hidden 2xl:hidden h-fit sm:h-fit rounded-2xl">
                <div className="grid grid-cols-2">
                  <div className="text-slate-400">Branch</div>
                  <div className="">{item.SrNo}</div>
                </div>
               
                <div className="grid grid-cols-2">
                  <div className=" text-slate-400">2020-2021</div>
                  <div className="">{item.Y2021}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className=" text-slate-400">2021-2022</div>
                  <div className="">{item.Y2122}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className=" text-slate-400">2022-2023</div>
                  <div className="">{item.Y2023}</div>
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
