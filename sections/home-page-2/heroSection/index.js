import React from 'react';

function HeroSection(props) {
    const [slideIndex, setSlideIndex] = React.useState(3);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : heros.length - 1);
    } else {
      setSlideIndex(slideIndex < heros.length - 1 ? slideIndex + 1 : 0);
    }
  };

  const heros = [
    "/images/HomePage/Hero/kit-college-of-engineering-kolhapur-71.jpg",
    "/images/HomePage/Hero/kit-college-of-engineering-kolhapur-72.jpg",
    "/images/HomePage/Hero/kit-college-of-engineering-kolhapur-73.jpg",
    "/images/HomePage/Hero/kit-college-of-engineering-kolhapur-74.jpg",
    "/images/HomePage/Hero/kit-college-of-engineering-kolhapur-75.jpg"
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % heros.length);
    }, 5000);

    return () => clearInterval(interval);
}, []);
    return (
        <section>
             <div className='flex items-start  justify-start relative bg-gradient-to-t from-slate-200  to-white rounded-bl-[150px]'>
              
                                              <div className=" group relative flex  justify-center  w-[500px] h-[500px]  rounded-xl p-4 overflow-hidden">
                                                <div
                                                    className={`absolute top-0 left-0 w-full h-full  opacity-[8%] flex  items-center p-7 `}>
                                                    <img
                                                      // data-aos="fade-up"
                                                      // data-aos-delay="0"
                                                      src="images/logoHead.png"
                                                      className="h-[80%] md:h-[65%] grayscale  animate-wiggle2"
                                                      alt="LOGO"
                                                    />
                                                </div>
                                                    
                                                <a href='apply-admission' className="flex flex-col items-center justify-center  ">
                                                    <img
                                                      // data-aos="fade-up"
                                                      // data-aos-delay="0"
                                                      src="/images/logoHead.png"
                                                      className=" h-[80px] w-[100px] "
                                                      alt="LOGO"
                                                    />
                                                    <div className="text-5xl font-serif font-bold mt-4 text-basic  flex items-center justify-center">
                                                      KITCoEK
                                                    </div>
                                                    <span
                                                      data-aos="zoom-in"
                                                      data-aos-delay="0"
                                                      className=" hover:cursor-pointer inline-flex justify-between items-center py-1 px-1 pr-4 mb-7  text-sm text-orange-500 bg-white mt-4 rounded-full  hover:bg-slate-50 hover:gap-1 ">
                                                      <span className="text-xs bg-orange-500  rounded-full text-white font-semibold px-4 py-1.5 mr-3 ">Academic Year 2023</span>
                                                      <span className="text-sm font-medium">For Admission</span>
                                                      <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                                      </svg>
                                                    </span>                                                   
                                                </a>
                                              </div>

                                              <div className='mhds:hidden absolute top-0 right-20  items-center justify-center flex flex-col'>
                                                <div className='bg-basic w-[100px] h-[250px]'></div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[150px] h-[950px]   text-basic -mt-[250px] ">
                                                  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                                                </svg>
                                              </div>
                
             {heros.map((hero, index) => (
                        <div key={index}  className={`mhds:hidden relative z-20 p-2 h-fit  w-[65%] mt-16    ${index === slideIndex ? 'active' : 'hidden'}`}>
                            <div className='h-full  justify-between flex items-center w-[100%] -ml-2  absolute' >
                              <div onClick={() => handleClick('left')} className='h-10 w-10 rounded-full bg-slate-500 opacity-60 flex items-center justify-center hover:cursor-pointer hover:bg-slate-400'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 -rotate-90 text-white">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                                </svg>
                              </div>
                              <div onClick={() => handleClick('right')} className='h-10 w-10 rounded-full bg-slate-500 opacity-60 flex items-center justify-center hover:cursor-pointer hover:bg-slate-400'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 -rotate-90 text-white">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                                </svg>
                              </div>


                            </div>
                            <img 
                                // data-aos="zoom-in"
                                // data-aos-delay="20" 
                                src={hero} 
                                className=" rounded-3xl shadow-lg shadow-basic  " alt="" />
                        </div>
                        ))}
             </div>
        </section>
    );
}

export default HeroSection;