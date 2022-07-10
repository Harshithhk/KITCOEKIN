import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const NIRF_IPR = () => {
  return (
    <DefaultLayout>
      <div className="w-full ">
        <section className="flex flex-col h-[250px] items-center w-full relative">
          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-24 h-24 absolute top-0 left-[25%] z-10 sm:w-16 sm:h-16 sm:top-[5%]"
            alt=""
          />

          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-32 h-32 absolute top-[10%] left-[5%] z-10 sm:w-24 sm:h-24 sm:top-[35%]"
            alt=""
          />

          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-40 h-40 absolute top-[10%] left-[60%] z-10 sm:w-20 sm:h-20 sm:top-[17%]"
            alt=""
          />
          <img
            src="/images/AboutUs/bgcircle.png"
            className="w-28 h-28 absolute top-[12.5%] left-[85%] z-10 sm:hidden"
            alt=""
          />
          <div className="absolute w-full h-[250px] top-0 left-0 bg-[#24346D] z-0"></div>
          <h1
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] mt-14 sm:text-xl  text-4xl font-bold text-center text-white z-20"
          >
            NIRF IPR
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-xl font-bold text-center text-white z-20"
          >
            Home | NIRF IPR
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="overflow-x-scroll max-w-screen">
          <section className="relative z-30 w-[1500px] pb-20 mx-auto h-fit px-14 sm:px-4 sm:pb-10  ">
            <div className="flex items-center w-full mt-6">
              <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
              <div className="ml-3 md:ml-2 w-fit italic font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
                AY:2020-21
              </div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-6 font-semibold text-center rounded-lg shadow-lg ">
              <div className=" w-[5%] text-left pl-2">Sr.No.</div>
              <div className=" w-[20%] text-left pl-2">Title</div>
              <div className=" w-[63%] text-left pl-2">Name of Faculty</div>
              <div className=" w-[10%] text-left pl-2">Download</div>
            </div>

            <div className="flex items-center w-full h-16 p-2 mt-6 text-center shadow-lg rounded-2xl bg-blue-50">
              <div className=" w-[5%] text-left pl-2">1</div>
              <div className=" w-[20%] text-left pl-2">Dr. Uma Gurav</div>
              <div className=" w-[63%] text-left pl-2">
                A BLOCKCHAIN TECHNOLOGY-BASED METHOD FOR STOCK MARKET ANALYSIS
                AND TRANSACTIONS
              </div>
              <div className=" w-[10%] text-left pl-2">Downolad</div>
            </div>

            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-slate-100">
              <div className=" w-[5%] text-left pl-2">2</div>
              <div className=" w-[20%] text-left pl-2">
                Mr. Pradeep Sadasniv Khot
              </div>
              <div className=" w-[63%] text-left pl-2">
                AN INTELLIGENT STENOGRAPHER DESIGNSD FOR JUDICIARY SYSTEM
              </div>
              <div className=" w-[10%] text-left pl-2">Downolad</div>
            </div>

            <div className="flex items-center w-full mt-6">
              <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
              <div className="ml-3 md:ml-2 w-fit italic font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
                AY:2019-220
              </div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-6 font-semibold text-center rounded-lg shadow-lg ">
              <div className=" w-[5%] text-left pl-2">Sr.No.</div>
              <div className=" w-[20%] text-left pl-2">Title</div>
              <div className=" w-[63%] text-left pl-2">Name of Faculty</div>
              <div className=" w-[10%] text-left pl-2">Download</div>
            </div>

            <div className="flex items-center w-full mt-6">
              <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
              <div className="ml-3 md:ml-2 w-fit italic font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]">
                AY:2018-19
              </div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-6 font-semibold text-center rounded-lg shadow-lg ">
              <div className=" w-[5%] text-left pl-2">Sr.No.</div>
              <div className=" w-[20%] text-left pl-2">Title</div>
              <div className=" w-[63%] text-left pl-2">Name of Faculty</div>
              <div className=" w-[10%] text-left pl-2">Download</div>
            </div>

            <div className="flex items-center w-full h-16 p-2 mt-6 text-center shadow-lg rounded-2xl bg-blue-50">
              <div className=" w-[5%] text-left pl-2">1</div>
              <div className=" w-[20%] text-left pl-2">Dr. Vidula Swami</div>
              <div className=" w-[63%] text-left pl-2">
                Identification of Ideal Structure for Water Conservation in
                Rural Areas using SWAT Model
              </div>
              <div className=" w-[10%] text-left pl-2">Downolad</div>
            </div>
          </section>
        </section>

        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default NIRF_IPR
