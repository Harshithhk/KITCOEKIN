import React from "react"
import Modal from "../../components/Modal"

const Testimonials = () => {
  return (
    <div className="h-full mr-11 sm:mr-2 sm:ml-2 w-[420px] sm:w-64 bg-white p-4 sm:p-3 rounded-[30px] ">
    <div className="h-16 sm:h-8 flex w-full justify-between ">
      <div className="flex">
        {/* <img
          src="/images/AboutUs/Avatar.png"
          className="w-16 sm:h-[36px] sm:w-[36px] h-full"
          alt="Avatar.png"
        /> */}
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="w-16 sm:h-[36px] text-primary sm:w-[36px] h-full">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
</svg>


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
   
    <div className="mt-2 sm:mt-4 relative text-justify sm:text-sm text-xl text-accent">
      Academic Year : 2019-2020<br></br>
      Department: Production Development And Engineering
      <br></br>
      <Modal title="Aniket Patil's Testimonial " body={          <iframe   className="w-[600px] h-[350px] sm:w-fit " src="https://www.youtube.com/embed/vvKUbUdEh1Q" title="OUR STUDENT OUR PRIDE | KIT'S College of Engineering (Autonomous)| Aniket Patil" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        } >
      <button className="absolute sm:relative sm:py-1= sm:my-2 right-0  rounded-full inline-flex px-3 py-2 m-1  shadow-lg bg-orange-500 text-white">
                <span className="flex-shrink-0 inline-flex item-center mr-2 sm:mr-1 justify-center leading-none bg-orange-300 rounded-full ">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" viewBox="0 0 20 20"
              fill="currentColor">
              <path fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd" />
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
