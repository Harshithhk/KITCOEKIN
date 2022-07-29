import Image from "next/image"
import { useRouter } from "next/router"

const StatisticsNew = () => {

  const router = useRouter()
  return (
    <div className={` md:p-[16px] relative mt-72  ${router.route == "/" ? "bg-secondary" : "bg-white" }  pb-32 sm:pb-24 sm:-mb-20  -mb-10`}>
      {/* <div className="flex items-center">
        <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
        <div className="ml-3 md:ml-2 w-fit  font-[800] text-center   text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
          STATISTICS
        </div>
      </div> */}
      <div className="w-full flex items-center justify-center  gap-4 sm:gap-0 ">


      <div className="h-[450px] sm:h-[300px] w-1/2 sm:w-5/6 bg-[#3D3859] relative rounded-3xl -mt-40 -rotate-6 shadow-2xl">
          <div  className="absolute  sm:-ml-0 h-[400px] sm:h-[300px] w-11/12 shadow-2xl bg-white rounded-3xl rotate-6 flex items-center justify-center gap-4 sm:gap-0 " >
              {/* <div className=" grid grid-cols-2 w-full h-full justify-items-center items-center">
                  <div className="grid grid-cols-1">
                    <div ><p className="font-bold text-5xl text-primary">15,000</p></div>
                    <div>asd</div>
                  </div>
                  <div className="grid grid-cols-1">
                    <div>asd</div>
                    <div>asd</div>
                  </div>
              </div> */}

          <div className="w-fit h-fit  sm:mt-12  -ml-36 sm:-ml-0 ">
              <div className="grid grid-flow-row grid-cols-2  gap-8 sm:gap-4  ">
                        <div className="flex  flex-col items-center sm:-mt-16 gap-4 sm:gap-0 ">
                          <p className="font-bold text-5xl sm:text-xl text-primary">15,000<span className="">+</span></p>
                          <p className=" text-md sm:text-xs text-slate-400 font-bold ">Engineers Passed</p>
                        </div>
                        <div className="flex  flex-col items-center  gap-4 sm:-ml-8 sm:gap-0 ">
                          <p className="font-bold text-5xl sm:text-xl text-primary">5,000<span className="">+</span></p>
                          <p className=" text-md sm:text-xs text-slate-400 font-bold ">Campus Placed Students</p>
                        </div>
                        <div className="flex  flex-col items-center  gap-4  sm:gap-0 ">
                          <p className="font-bold text-5xl sm:text-xl text-primary">190<span className="">+</span></p>
                          <p className=" text-md sm:text-xs text-slate-400 font-bold ">Faculties</p>
                        </div>
                        <div className="flex  flex-col items-center  gap-4 sm:mt-10 sm:-ml-8 sm:gap-0 ">
                          <p className="font-bold text-5xl sm:text-xl text-primary">36<span className="">+</span></p>
                          <p className=" text-md sm:text-xs text-slate-400 font-bold ">Years of Experience</p>
                        </div>
              </div>
          </div>
              

          </div>
      </div>
      </div>
    </div>
  )
}
export default StatisticsNew
