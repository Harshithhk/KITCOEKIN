import Image from "next/image"

const Footer = () => {
  return (
    <footer>
      <div className=" flex flex-col justify-between h-[299.77px] bg-cover bg-[url('/images/HomePage/FooterBG.png')] mt-24  ">
        <img
          className=" bg-[white] mx-auto h-[155.88px]"
          src="\images\Navbar\Logo.svg"
          alt="footerbg.png"
        />
        <div className="  mb-2 text-right text-[#F07C00] underline leading-[37px] font-poppins font-bold text-[32.23px] pr-[20px]">
          Resources
        </div>
      </div>

      <div className="flex justify-between h-[270px] bg-[#443B3C]">
        <div className="pl-[37px] pt-[30px] flex-1 font-poppins font-[700] text-white text-[26.230px]">
          <div>
            <img className="inline m-[5px]" src="/images/HomePage/Gmail.png" />
            <span>info@kitcoek.in</span>
          </div>
          <div>
            <img
              className="inline m-[5px]"
              src="/images/HomePage/phoneNo.png"
            />
            <span> 7769001199</span>
          </div>
          <div>
            <img
              className="inline m-[5px]"
              src="/images/HomePage/location.png"
            />
            <span> Kolhapur, Maharashtra.</span>
          </div>
        </div>

        {/* CENTER DIV */}
        <div className="flex-1">
          <img
            className="m-auto translate-y-[240%]"
            src="/images/HomePage/socialMedia.png"
          />
        </div>

        <div className=" flex-1 text-right text-white leading-[37px] font-poppins font-[600] text-[24.7314px] pr-[20px] md:pr-0">
          <a>A-Z index </a>
          <br />
          <a>Campus Map</a>
          <br />
          <a>CU Safety</a>
          <br />
          <a>Directory</a>
          <br />
          <a>Webcams</a>
          <br />
          <a className="font-[900] underline" href="">
            Apply to KIT
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
