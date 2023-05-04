import Reat from "react"

const ImageGrid = () => {
    return (
  <section className="overflow-hidden text-gray-700 ">
    {/*  */}
  <div className="container  px-2 sm:hidden 2xl:block">
    {/*  */}
    <div className="flex flex-wrap sm:flex-col -m-1 ">
        {/*  */}
      <div className="flex flex-wrap w-full   sm:w-fit">
        <div className="w-3/5 sm:w-full sm:p-0 h-[401px]   p-3 ">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-3xl shadow-lg"
            src="images/Department/electronics/dept-of-electronics-engg-kit-kolhapur-02.jpg" />
        </div>
        <div className="w-2/5 p-3  ">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-3xl shadow-lg"
            src="images/Department/electronics/dept-of-electronics-engg-kit-kolhapur-03.jpg" />
        </div>
      </div>
            {/* ------------------------------------------------------------ */}
      <div className="flex flex-wrap w-5/6 sm:w-fit">
        <div className="w-1/2 sm:w-full h-[294px] sm:p-0  p-3 ">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-3xl shadow-lg "
            src="images/Department/electronics/dept-of-electronics-engg-kit-kolhapur-01.jpg" />
        </div>
        <div className="w-1/2 sm:w-full h-[294px] sm:p-0  p-3 ">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-3xl shadow-lg"
            src="images/Department/electronics/dept-of-electronics-engg-kit-kolhapur-04.jpg" />
        </div>
      </div>
            {/* ------------------------------------------------------------ */}

      <div className="flex flex-wrap w-1/6 sm:w-fit ">
        <div className="w-full sm:w-full  sm:p-0  h-[294px]   p-3 ">
            <div className=" h-full bg-[#3D3859] rounded-3xl flex items-center ">
                <div className="text-white text-4xl font-bold italic p-5 text-justify   "><p className="underline p-1" >See more</p><p className="underline p-1" > what's in</p> <p className="p-1">here &#x27A5;</p></div>
            </div>
          
        </div>
      </div>
            {/* ------------------------------------------------------------ */}

    </div>
  </div>

  <div className="container   sm:block 3xl:hidden 2xl:hidden">
    {/*  */}
    <div className="flex flex-wrap   -m-1 ">
        {/*  */}
      <div className="flex flex-wrap p-1 w-full   ">
        <div className=" ">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-3xl shadow-lg"
            src="images/Department/electronics/dept-of-electronics-engg-kit-kolhapur-02.jpg" />
        </div>
    
      </div>
            {/* ------------------------------------------------------------ */}
      <div className="flex flex-wrap ">
        <div className=" p-1  w-4/6  ">
          <img alt="gallery" className="block object-cover object-center w-full  rounded-3xl shadow-lg "
            src="images/Department/electronics/dept-of-electronics-engg-kit-kolhapur-03.jpg" />
        </div>
        <div className=" p-1   w-2/6 ">
            <div className="  bg-[#3D3859] rounded-3xl h-full flex items-center shadow-lg  ">
                <div className="text-white text-sm  font-bold italic p-5 text-justify   "><p className="underline p-1" >See more</p><p className="underline p-1" > what's in</p> <p className="p-1">here &#x27A5;</p></div>
            </div>
          
        </div>
      </div>
          
    </div>
  </div>
</section>
    );
};

export default ImageGrid