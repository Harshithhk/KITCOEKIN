const Navbar = () => {
  return (
    <nav className="h-[100px] md:h-[88px] sm:h-12 bg-[#F9FBFB]  ">
      <div className="flex items-center justify-center h-full 2xl:hidden w-fit">
        <img
          src="/images/Navbar/Logo.svg"
          className=" h-5/6"
          alt=""
          srcSet=""
        />
      </div>
      <section className="flex h-full md:hidden">
        <div className="h-full w-72 ">
          <img
            src="/images/Navbar/Logo.svg"
            className="h-full m-auto"
            alt=""
            srcSet=""
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between flex-grow h-1/2">
            <img
              src="/images/Navbar/Navbar-Arrows.svg"
              className="h-full "
              alt=""
              srcSet=""
            />
            <div className="flex">
              <div className="w-64 my-3 border-x flex justify-center items-center font-bold text-[#333333]  text-lg">
                <img
                  src="/images/Navbar/Contact.svg"
                  className="h-8 mr-4"
                  alt=""
                />
                CONTACT
              </div>
              <div className="w-64 my-3 border-x flex justify-center items-center font-bold text-[#333333] text-lg">
                <img
                  src="/images/Navbar/Apply.svg"
                  className="h-8 mr-4"
                  alt=""
                />
                APPLY
              </div>
            </div>
          </div>
          <div className="h-1/2 flex-grow bg-[#fcfcfc] flex">
            <div className="w-[calc(100%/6)] my-3 border-r  flex justify-center items-center font-bold text-[#333333] text-lg">
              ABOUT
            </div>
            <div className="w-[calc(100%/6)] my-3 border-x  flex justify-center items-center font-bold text-[#333333] text-lg">
              ADMISSIONS
            </div>
            <div className="w-[calc(100%/6)] my-3 border-x  flex justify-center items-center font-bold text-[#333333] text-lg">
              DEPARTMENTS
            </div>
            <div className="w-[calc(100%/6)] my-3 border-x  flex justify-center items-center font-bold text-[#333333] text-lg">
              T&P CELL
            </div>
            <div className="w-[calc(100%/6)] my-3 border-x  flex justify-center items-center font-bold text-[#333333] text-lg">
              OTHER
            </div>
            <div className="h-full flex j6stify-center items-center bg-[#f5be84] w-[calc(100%/6)]">
              <div className=" flex w-full justify-center items-center font-bold text-[#333333] text-lg">
                <img
                  src="/images/Navbar/Lens.svg"
                  className="h-8 mr-2"
                  alt=""
                  srcSet=""
                />
                SEARCH
              </div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default Navbar
