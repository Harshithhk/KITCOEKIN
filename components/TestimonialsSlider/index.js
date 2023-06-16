import React from 'react';
import { useState } from 'react';
import Modal from '../Modal';
const TestimonialSlider = (props) => {
  const testimonials = [
    {
      id: 1,
      name:    'Murlidhar',
      company: 'wipro technology ',
      quote: '1)Department: Computer Science And Engineering,  2)Academic Year : 2007  ',
    },
    {
      id: 2,
      name: 'Jane Smith',
      company: 'XYZ Corp.',
      quote: 'Integer ut enim vel augue eleifend .',
    },
    
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : props.testimonials.length - 1);
    } else {
      setSlideIndex(slideIndex < props.testimonials.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className=" px-32 sm:px-1  py-16 mt-20 text-[#24346D]">
      <div className="mx-auto px-4 sm:px-6 2xl:px-8">
        <div className="2xl:text-left">
          <h2 className="text-base font-semibold tracking-wide text-[#24346D] uppercase">Testimonials</h2>
          <p className=" sm:hidden w-fit font-[800] text-center  text-[#24346D] leading-[54px] text-[35.97px]  md:text-[22px]">
            What our students are saying
          </p>
          <p className="hidden sm:block mt-2 text-4xl sm:text-3xl sm:font-bold leading-8 text-[#24346D]  font-extrabold  tracking-tight">
            What our students are saying
          </p>
        </div>

        <div className="mt-10 sm:mt-6 relative">
          <div className="flex justify-between items-center ">
            <button onClick={() => handleClick('left')} className="absolute left-0 top-1/2 sm:top-40  h-fit transform -translate-y-1/2 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 rounded-full opacity-10 2xl:opacity-80 hover:bg-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={() => handleClick('right')} className="absolute right-0 top-1/2 sm:top-40 h-fit transform -translate-y-1/2 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 rounded-full opacity-10 2xl:opacity-80 hover:bg-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg> </button>
          </div>
          <div className="mt-10">
        {props.testimonials.map((testimonial, index) => (
          <div key={index} className={`testimonial flex flex-col items-center justify-center ${index === slideIndex ? 'active' : 'hidden'}`}>
            <div className="text-base sm:text-base 2xl:text-lg font-medium  sm:flex-col flex items-center justify-center gap-3 ">
              {/* {testimonial.quote} */}
              <span className=''>
              <span className='font-bold'>Department : </span>{testimonial.department} <br/>
              <span className='font-bold'>Academic Year : </span> {testimonial.year}
              </span>

              <Modal title={`${testimonial.name}'s Testimonial `} body={testimonial.videoIframe} >
                <button className=" sm:relative sm:py-1= sm:my-2 right-0  rounded-full inline-flex px-3 py-2 m-1  shadow-lg bg-orange-500 text-white">
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
            
            <div className="mt-8  gap-3 flex flex-row justify-center items-center sm:w-56 ">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 rounded-full">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-4 ">
                <div className="text-base font-medium  text-[#24346D]">{testimonial.name}</div>
                <div className=" text-sm font-medium text-[#24346D]">{testimonial.position}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>);
};

export default TestimonialSlider;