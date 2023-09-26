import React, { useEffect, useState } from "react"
import Placed from "../Placed"

const TextSlider = () => {
  const placedData = [
    {
      name: "Swapnil Jadhav",
      package: "90 LPA - AY 2021-22",
      image: "/images/recruiters/adani.jpg",
    },
    {
      name: "Swapnil Jadhav 1 ",
      package: "90 LPA - AY 2021-22",
      image: "/images/recruiters/adani.jpg",
    },
    {
      name: "Swapnil Jadhav 2",
      package: "90 LPA - AY 2021-22",
      image: "/images/recruiters/adani.jpg",
    },
  ]
  const [active, setActive] = useState(0)

  useEffect(() => {
    console.log(active)

    return () => {}
  }, [active])

  return (
    <section className="antialiased text-gray-600 bg-gray-200 sans-serif">
      <div
        className="  flex mx-auto overflow-hidden shadow-sm sm:my-10 2xl:my-24 sm:flex-col 2xl:flex-row"
       
      >
        <div className="relative flex flex-col justify-center w-full sm:py-8 2xl:py-24 bg-primary 2xl:w-1/2 sm:w-full item-center">
          <div className="absolute top-0 z-10 grid w-16 h-16 left-8 grid-rows-10 2xl:w-40 2xl:h-40 2xl:ml-20 2xl:mt-24 divide-dotted">
            <div className="grid grid-cols-10">
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
            </div>
            <div className="grid grid-cols-10">
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
            </div>
            <div className="grid grid-cols-10">
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
            </div>
            <div className="grid grid-cols-10">
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
            </div>
            <div className="grid grid-cols-10">
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
            </div>
            <div className="grid grid-cols-10">
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
            </div>
            <div className="grid grid-cols-10">
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
            </div>
            <div className="grid grid-cols-10">
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
            </div>
            <div className="grid grid-cols-10">
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
            </div>
            <div className="grid grid-cols-10">
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
              <div className="w-1 h-1 bg-slate-50 opacity-40"></div>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="relative z-20 mb-0 font-semibold leading-tight tracking-tight text-indigo-100 sm:text-2xl 2xl:text-5xl sm:py-2 sm:px-6 2xl:py-6 2xl:px-1 2xl:w-64 2xl:mx-auto"
          >
            <span className="2xl:block">Where Our</span>
            <span className="md-block">Students Are Being</span>
            <span className="block"> Placed!</span>
          </div>

          <div className="absolute bottom-0 right-0 hidden mb-4 mr-4 2xl:block">
            <button
              onClick={() => active !== 0 && setActive(active - 1)}
              className="w-12 h-10 font-bold text-gray-500 bg-gray-100 border-r rounded-l-full focus:outline-none hover:text-indigo-500"
            >
              &#8592;
            </button>
            <button
              onClick={() =>
                active !== placedData.length - 1 && setActive(active + 1)
              }
              className="w-12 h-10 font-bold text-gray-500 bg-gray-100 rounded-r-full focus:outline-none hover:text-indigo-500"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="bg-white 2xl:w-1/2 sm:w-full">
          <div className="relative flex flex-col h-full">
            <div className="absolute top-0 left-0 mt-3 ml-4 2xl:mt-5 2xl:ml-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-indigo-200 fill-current 2xl:w-16 2xl:h-16"
                viewBox="0 0 24 24"
              >
                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
              </svg>
            </div>
            {active == 0 && <Placed placedData={placedData[0]} />}
            {active == 1 && <Placed placedData={placedData[1]} />}
            {active == 2 && <Placed placedData={placedData[2]} />}

            <div className="flex justify-center px-6 pt-2 pb-6 2xl:py-6">
              <div className="text-center">
                <h2 className="text-sm font-bold leading-tight text-gray-700 2xl:text-base">
                  6267
                </h2>
                <small className="text-xs text-gray-500 truncate 2xl:text-sm">
                  {" "}
                  Institute Code
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextSlider
