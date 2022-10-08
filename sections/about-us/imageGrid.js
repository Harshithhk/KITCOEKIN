import Reat from "react"

const ImageGrid = () => {
  return (
    <section className="overflow-hidden text-gray-700 ">
      {/*  */}
      <div className="container px-2 sm:hidden 2xl:block">
        {/*  */}

      <div className="flex flex-wrap w-full   sm:w-fit">
        <div className="w-3/5 sm:w-full sm:p-0 h-[401px]   p-3 ">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-3xl shadow-lg"
            src="images/AboutUs/about3.jpg" />
        </div>
        <div className="w-2/5 p-3  ">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-3xl shadow-lg"
            src="images/AboutUs/about2.jpg" />
        </div>
      </div>
            {/* ------------------------------------------------------------ */}
      <div className="flex flex-wrap w-5/6 sm:w-fit">
        <div className="w-1/2 sm:w-full h-[294px] sm:p-0  p-3 ">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-3xl shadow-lg "
            src="images/AboutUs/about4.jpg" />
        </div>
        <div className="w-1/2 sm:w-full h-[294px] sm:p-0  p-3 ">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-3xl shadow-lg"
            src="images/AboutUs/about1.jpg" />
        </div>
      </div>
            {/* ------------------------------------------------------------ */}

      <div className=" w-1/6 sm:w-fit ">
        <div className=" rounded-3xl w-full  h-full   p-3">
            <div className=" h-full bg-[#3D3859] rounded-3xl flex whitespace-pre-wrap items-center justify-center">
              <a href="kit-gallery?Tab=1" className="hover:underline text-white">
                <p className="text-white italic text-3xl font-bold hover:underline">See more</p>
                <p className="text-white italic text-3xl font-bold hover:underline">what's in</p>
                <p className="text-white italic text-3xl font-bold hover:underline flex items-center justify-between">here
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </p>
              </a>
            </div>
        </div>
      </div>

            {/* ------------------------------------------------------------ */}


      <div className="container sm:block 2xl:hidden">
        {/*  */}

      <div className="flex flex-wrap p-1 w-full   ">
        <div className=" ">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-3xl shadow-lg"
            src="images/AboutUs/about2.jpg" />
        </div>
    
      </div>
            {/* ------------------------------------------------------------ */}
      <div className="flex flex-wrap ">
        <div className=" p-1  w-4/6  ">
          <img alt="gallery" className="block object-cover object-center w-full  rounded-3xl shadow-lg "
            src="images/AboutUs/about4.jpg" />
        </div>
        {/* <div className=" p-1   w-2/6 ">
            <div className="  bg-[#3D3859] rounded-3xl h-full flex items-center shadow-lg  ">
                <div className="text-white text-sm  font-bold italic p-5 text-justify   "><p className="underline p-1" >See more</p><p className="underline p-1" > what's in</p> <p className="p-1">here &#x27A5;</p></div>
            </div>
          
        </div> */}
        <div className="w-2/6 p-1 ">
        <div className=" rounded-3xl   h-full ">
            <div className=" h-full bg-[#3D3859] rounded-3xl  flex whitespace-pre-wrap items-center justify-center">
              <a href="kit-gallery" className="hover:underline text-white">
                <p className="text-white italic text-sm font-bold hover:underline">See more</p>
                <p className="text-white italic text-sm font-bold hover:underline">what's in</p>
                <p className="text-white italic text-sm font-bold hover:underline flex items-center justify-between">here
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </p>
              </a>
            </div>
        </div>
      </div>
      </div>
          
    </div>
  </div>
</section>
    );
};


export default ImageGrid
