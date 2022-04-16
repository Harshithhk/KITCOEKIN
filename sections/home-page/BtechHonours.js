import Image from "next/image"
const BtechHonours = () => {
  return (
    <section className="mt-[100px]">
      <div className="flex justify-around">
        <div>
          <div className="flex font-Poppins text-[#3D3859] tracking-[0.005em] italic text-[35.97px] font-[800] w-[428.44px] h-[53.96px]">
            NEW B.TECH HONOURS
          </div>
          <img className=" pt-20 bg-center bg-cover w-[749.69px] h-[450.52px] bg-[url('/images/HomePage/s1.png')]"></img>
        </div>

        <div className="space-y-3 text-center text-white">
          <div className=" w-[427.33px] h-[132.15px] bg-[#3D3859] border-2 ">
            <img
              className=" mt-[30px] ml-[36px] float-left  w-[150px] h-[90px]"
              src="/images/HomePage/Bulb.png"
            ></img>
            <div className="flex flex-col w-[169.81px] h-[77.1px]">
              <div className="">1790</div>
              <p className="normal font-[Montserrat] w-[190px] m-auto h-[108px] text-[22x] tracking-[0.005em] leading-[27px] text-center font-[800]">
                Projected first year 2021 fall enrollment
              </p>
            </div>
          </div>

          <div className=" w-[427.33px] h-[120.89px] bg-[#7D7D7D] border-2 text-center">
            <img
              className="float-left pt-5 pl-5"
              src="/images/HomePage/3.84.png"
            ></img>
            <div className="flex flex-col w-[169.81px] h-[77.1px] ">
              <div className="">3.84</div>
              <p className="normal font-[Montserrat] w-[190px] m-auto h-[108px] text-[22x] tracking-[0.005em] leading-[27px] text-center font-[800]">
                Average GPA for admitted fall first years
              </p>
            </div>
          </div>

          <div className=" w-[427.33px] h-[120.89px] bg-[#8D8D8D] border-2 ">
            <img
              className="float-left pt-5 pl-5 "
              src="/images/HomePage/86.png"
            ></img>
            <div className="flex flex-col w-[169.81px] h-[77.1px]">
              <div className="">86%</div>
              <p className="normal font-[Montserrat] w-[190px] m-auto h-[108px] text-[22x] tracking-[0.005em] leading-[27px] text-center font-[800]">
                First year students gets financial Aid
              </p>
            </div>
          </div>

          <div className=" w-[427.33px] h-[120.89px] bg-[#8D8D8D] border-2 ">
            <img
              className="float-left pt-5 pl-5"
              src="/images/HomePage/400.png"
            ></img>
            <div className="flex flex-col w-[169.81px] h-[77.1px]">
              <div className="">400</div>
              <p className="normal font-[Montserrat] w-[190px] m-auto h-[108px] text-[22x] tracking-[0.005em] leading-[27px] text-center font-[800]">
                projected transfer fall 2021 enrollment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BtechHonours
