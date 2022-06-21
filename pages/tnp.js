import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import EsteemedRecruiters from "../sections/home-page/EsteemedRecruiters"
import Career from "../sections/departments/career"

const TnP = () => {
  return (
    <DefaultLayout>
      <div className="w-full bg-[#24346D]">
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
            KOLHAPUR INSTITURE OF TECHNOLOGY&apos;S
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] text-4xl sm:text-xl font-bold text-center text-white z-20"
          >
            COLLEGE OF ENGINEERING (AUTONOMOUS), KOLHAPUR
          </h1>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-white px-14 sm:px-4 sm:pb-10">
          <img
            className="absolute -top-28 w-[205px] h-[170px]"
            src="/images/TnP/indicator.png"
            alt=""
          />

          <div className="flex justify-between">
            <div>
              <div className="pt-28 text-[#24346D] text-4xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md bg-primary"></div>
                TPO&apos;S MESSAGE
              </div>
              <div className="mt-10 w-[800px] text-xl text-accent">
                This era of globalization has opened enormous opportunities for
                young and talented budding engineers in all the walks of life.
                As a result, the expectations from the young engineers are that
                they should mould themselves seamlessly in to the global
                corporate culture. The T&P department provides ample
                opportunities for placements and entrepreneurship by organizing
                seminars, workshops and training programs for enhancing the
                personality traits and facilitates the transition of our
                students from academics to corporate life.
              </div>
            </div>
            <div className="w-[300px] h-[360px] bg-[#24346D] mt-28 mr-6 rounded-xl p-3 text-white text-2xl items-center flex flex-col">
              <div className="overflow-hidden bg-white rounded-xl">
                <img src="/images/TnP/amitsarkar.png" alt="amitsarkar.png" />
              </div>
              <div className="mt-2">DR. Amit Sarkar</div>
            </div>
          </div>
        </section>
        <BranchPlacement />
        <Career />
        <EsteemedRecruiters />
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default TnP
