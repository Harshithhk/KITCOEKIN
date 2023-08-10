import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
function VideoSection(props) {
    return (
        <div className='relative mt-16 mb-16 sm:hidden'>
            
<section className="bg-white ">
  <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 z-10 relative">
    <Link href="/alumni" passHref >
      <span
      data-aos="zoom-in"
      data-aos-delay="0"
      className=" hover:cursor-pointer inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-orange-500 bg-orange-100 rounded-full  hover:bg-orange-200 ">
      <span className="text-xs bg-orange-500 rounded-full text-white px-4 py-1.5 mr-3">New</span>
      <span className="text-sm font-medium">Join Alumni Association Now! See what's new</span>
      <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
      </svg>
      </span>
    </Link>
    <h1
    data-aos="zoom-in"
    data-aos-delay="0"
    className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#3D3859] md:text-5xl lg:text-6xl ">Experience <span className='text-[#F07C00]'>KITCoEK </span> : Transforming Education, Transforming Lives</h1>
    <span className='flex items-center justify-center'>
    <p
    data-aos="zoom-in"
    data-aos-delay="0"
    className="mb-8 text-lg font-normal w-[90%] mt-2 text-[#3D3859] lg:text-xl sm:px-16 lg:px-48 ">Our institution is a catalyst for change, shaping the future by nurturing the potential within each student. Through cutting-edge programs, state-of-the-art facilities, and a vibrant community, we create an environment where students can thrive and achieve their fullest potential.</p>

    </span>
   <style>
    {`
    video::-webkit-media-controls-panel {
      filter: invert(100%) sepia(100%) hue-rotate(206deg) saturate(200%);
    }
 
  
    `}
   </style>
    <div
    data-aos="zoom-in"
    data-aos-delay="0"
    className="embed-responsive embed-responsive-21by9 mt-16 mb-8 relative w-full overflow-hidden flex justify-center items-center">
          <video  className=" embed-responsive-item bottom-0 left-0 right-0 top-0 h-[400px] w-[80%]" controls poster="/videos/thumbnailkit.png">
            <source src="videos/videokitcoek.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    </div>
  </div>
  <div className="bg-gradient-to-b from-white-50 to-transparent  w-full h-full absolute top-0 left-0 z-0"></div>
</section>
        </div>
    );
}

export default VideoSection;