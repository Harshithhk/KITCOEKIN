import React from 'react';
import { useEffect, useState } from 'react';

function Hero3(props) {
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

const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      document.addEventListener('mousemove', onMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', onMouseMove);
      };
    }, []);
    return (
        
      <section className='overflow-clip' >
        <div className='relative h-[600px]  '>
      <style>{`
       .hexagon{background:url(images/hexagon.svg);background-repeat:no-repeat;background-attachment:fixed;background-position:50%;background-size:400vh;height:100%;z-index:2}

       .hexBackground,.hexagon{position:absolute;width:100%}
       
       .hexBackground{height:100%;filter:blur(100px)}
       
       .hexBackground2{top:50%;left:50%;border-radius:50%;transform:translate(-50%,-50%);background:linear-gradient(90deg,#335bf4,#F07C00);z-index:0}
       .hexBackground{border-radius:50%;background:linear-gradient(90deg,#335bf4,#F07C00);z-index:0}

       .hexBackground2{position:absolute;height:300px;width:300px;filter:blur(20px)}
       @keyframes fadeInThenOut {
        0% {
          opacity: 0;
          transform: scale(0);
        }
        40% {
          opacity: 1;
          transform: scale(1);
        }
        100% {
          opacity: 0;
           transform: scale(1);
        }
      }
      
      .animate-fade-in-out {
        animation: fadeInThenOut 3s ease-in-out;
        opacity: 0;
      }
       `}</style>
       <div class="hexagon ">
          

       </div>
       <div class="hexBackground animate-fade-in-out" ></div>
       <div className='hexBackground2'
       style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
       ></div> 
      </div>
      <div className=' w-screen h-[260px]  mx-auto   z-1 bg-white pb-[10px] -mb-8 relative flex items-end justify-center'>
      {heros.map((hero, index) => (
                   <div key={index}  className={`mhds:hidden relative z-20 p-2 h-fit  w-[88%]      ${index === slideIndex ? 'active' : 'hidden'}`}>
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
                           className=" rounded-bl-[100px] shadow-lg shadow-basic  " alt="" />
                   </div>
                   ))}
      </div>
      </section>
    );
}

export default Hero3;