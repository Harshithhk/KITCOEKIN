import React from "react"
import Modal from "../../components/Modal"

const Testimonials = () => {
  return (
    <div className="h-full mr-11 sm:mr-2 sm:ml-2 w-[420px] sm:w-64 bg-white p-4 sm:p-3 rounded-[30px] sm:opacity-50">
    <div className="h-16 sm:h-8 flex w-full justify-between ">
      <div className="flex">
        <img
          src="/images/AboutUs/Avatar.png"
          className="w-16 sm:h-[36px] sm:w-[36px] h-full"
          alt="Avatar.png"
        />
        <div className="ml-2 sm:ml-1 ">
          <h1 className="text-3xl text-accent font-bold sm:text-base">
            Aniket Patil
          </h1>
          <div className="text-base text-[#6A6A6A] sm:text-xs sm:-translate-y-1">
            Stringbio (Trainee Engineer)
          </div>
        </div>
      </div>
      <img
        src="/images/AboutUs/Quotes.svg"
        className="h-16 w-16 sm:h-8 sm:w-8 -translate-y-1"
        alt=""
      />
    </div>
   
    <div className="mt-2 relative text-justify sm:text-sm text-xl text-accent">
      Academic Year : 2019-2020<br></br>
      Department: Production Development And Engineering
      <br></br>
      <Modal title="Aniket Patil's Testimonial " body={          <iframe width="600"  className=" h-[350px] " src="https://www.youtube.com/embed/vvKUbUdEh1Q" title="OUR STUDENT OUR PRIDE | KIT'S College of Engineering (Autonomous)| Aniket Patil" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        } >
      <button class="absolute right-0 rounded-full inline-flex px-3 py-2 m-1 shadow-lg bg-orange-500 text-white">
                <span class="flex-shrink-0 inline-flex item-center mr-2 justify-center leading-none bg-orange-300 rounded-full ">

            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 md:h-8 md:w-8 text-white" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clip-rule="evenodd" />
            </svg>
          </span>
          Play Testimonial
      </button>
      </Modal>
    </div>
  </div>
  )
}

export default Testimonials
