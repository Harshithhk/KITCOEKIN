import Image from "next/image"

const Footer = () => {
  return (
    <footer>
      <section className="relative  h-[299.77px] sm:h-44 sm:bg-contain bg-bottom bg-no-repeat bg-cover bg-[url('/images/HomePage/FooterBG.png')] mt-10 ">
        <div className="absolute w-64 h-32 -translate-x-1/2 sm:h-20 sm:w-fit left-1/2 top-6">
          <img
            data-aos="fade-up"
            data-aos-delay="0"
            src="/images/Navbar/Logo.svg"
            className="h-full "
            alt="LOGO"
          />
        </div>
      </section>
      <section className="flex h-[320px] bg-[#443b3c] pt-6 ">
        <div className="flex-1 mt-auto mb-6 ml-2 cursor-pointer">
          <div className="flex items-center ml-8 md:ml-0 h-11">
            <img
              src="/images/HomePage/Gmail.png"
              className="h-full"
              alt="email"
            />
            <div className="ml-3 text-xl leading-none text-white underline md:text-lg ">
              info@kitcoek.in
            </div>
          </div>
          <div className="flex items-center mt-4 ml-8 md:ml-0 h-11">
            <img
              src="/images/HomePage/phoneNo.png"
              className="h-[39px]"
              alt="email"
            />
            <div className="ml-3 text-xl leading-none text-white md:text-lg ">
              +91-7769001199
            </div>
          </div>
          <div className="flex items-center mt-4 ml-8 md:ml-0 h-11">
            <img
              src="/images/HomePage/location.png"
              className="h-[50px]"
              alt="email"
            />
            <div className="ml-3 text-xl leading-none text-white md:text-lg ">
              Kolhapur, Maharashtra
            </div>
          </div>
        </div>
        <div className="justify-center flex-1 mt-auto mb-4 cursor-pointer md:hidden">
          <div className="flex justify-center  h-[79px]">
            <img
              src="/images/HomePage/socialMedia.png"
              className="h-full "
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-end flex-1 ">
          <div className="mr-8 text-2xl font-semibold text-right text-white -translate-y-10 cursor-pointer md:mr-2 md:-translate-y-2">
            <div className="sm:text-2xl text-3xl font-bold text-[#F07C00] mt-3">
              Resources
            </div>
            <div className="mt-3 sm:text-lg">A-Z index</div>
            <div className="mt-3 sm:text-lg">Campus Map</div>
            <div className="mt-3 sm:text-lg">CU Safety</div>
            <div className="mt-3 sm:text-lg">Directory</div>
            <div className="mt-3 sm:text-lg">Webcams</div>
            <div className="mt-3 font-extrabold sm:text-xl">Apply to KIT</div>
          </div>
        </div>
      </section>
    </footer>
  )
}
export default Footer
