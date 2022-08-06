import Image from "next/image"
import { useRouter } from "next/router"

const StatisticsNew = () => {
  const router = useRouter()
  return (
    <div
      className={` md:p-[16px] relative mt-60  pb-24 sm:pb-24 sm:-mb-20  -mb-10`}
    >
      {/* <div className="flex items-center">
        <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
        <div className="ml-3 md:ml-2 w-fit  font-[800] text-center   text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
          STATISTICS
        </div>
      </div> */}
      <div className="flex items-center justify-center w-full gap-4 sm:gap-0 ">
        <div className="h-[450px] sm:h-[300px] w-1/2 sm:w-5/6 bg-[#3D3859] relative rounded-3xl -mt-40 -rotate-6 shadow-2xl">
          <div className="absolute  sm:-ml-0 h-[400px] sm:h-[300px] w-11/12 shadow-2xl bg-white rounded-3xl rotate-6 flex items-center justify-center gap-4 sm:gap-0 ">
            {/* <div className="grid items-center w-full h-full grid-cols-2 justify-items-center">
                  <div className="grid grid-cols-1">
                    <div ><p className="text-5xl font-bold text-primary">15,000</p></div>
                    <div>asd</div>
                  </div>
                  <div className="grid grid-cols-1">
                    <div>asd</div>
                    <div>asd</div>
                  </div>
              </div> */}

            <div className="mx-auto w-fit h-fit sm:mt-12 ">
              <div className="grid grid-flow-row grid-cols-2 gap-8 sm:gap-4 ">
                <div className="flex flex-col items-center gap-4 sm:-mt-16 sm:gap-0 ">
                  <p className="text-5xl font-bold sm:text-xl text-primary">
                    15,000<span className="">+</span>
                  </p>
                  <p className="font-bold text-md sm:text-xs text-slate-400">
                    Engineers Passed
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4 sm:-ml-8 sm:gap-0 ">
                  <p className="text-5xl font-bold sm:text-xl text-primary">
                    5,000<span className="">+</span>
                  </p>
                  <p className="font-bold text-md sm:text-xs text-slate-400">
                    Campus Placed Students
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4 sm:gap-0 ">
                  <p className="text-5xl font-bold sm:text-xl text-primary">
                    190<span className="">+</span>
                  </p>
                  <p className="font-bold text-md sm:text-xs text-slate-400">
                    Faculties
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4 sm:mt-10 sm:-ml-8 sm:gap-0 ">
                  <p className="text-5xl font-bold sm:text-xl text-primary">
                    36<span className="">+</span>
                  </p>
                  <p className="font-bold text-md sm:text-xs text-slate-400">
                    Years of Experience
                  </p>
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
