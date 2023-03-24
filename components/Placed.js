import React from "react"

const Placed = ({ placedData }) => {
  return (
    <>
      <div className="relative z-10 h-full">
        <div>
          <p className="ml-8 italic font-semibold text-gray-600 serif sm:px-6 sm:py-6 2xl:px-16 2xl:py-10 sm:text-xl 2xl:text-2xl">
            Heartiest Congratulation
          </p>

          <p className="ml-8 italic font-normal text-gray-400 serif sm:px-6 sm:py-6 2xl:px-16 sm:text-xl 2xl:text-2xl">
            Name :
            <span
              data-aos="zoom-in"
              data-aos-delay="0"
              className="ml-8 italic font-semibold text-primary serif sm:text-xl 2xl:text-2xl"
            >
              {placedData.name}
            </span>
          </p>
          <p className="ml-8 italic font-normal text-gray-400 serif sm:px-6 sm:py-6 2xl:px-16 sm:text-xl 2xl:text-2xl">
            Package:
            <span
              data-aos="zoom-in"
              data-aos-delay="0"
              className="ml-8 italic font-semibold text-primary serif sm:text-xl 2xl:text-2xl"
            >
              <span className="font-bold"> {placedData.package} </span>
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center my-4">
        <img
          data-aos="zoom-in"
          data-aos-delay="0"
          src={placedData.image}
          className=""
          alt=""
        />
      </div>
    </>
  )
}

export default Placed
