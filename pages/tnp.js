import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import EsteemedRecruiters from "../sections/home-page/EsteemedRecruiters"
import Career from "../sections/departments/career"
import CampusPlacement from "../sections/departments/campusplacement"

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
            className="absolute -top-28 w-[205px] h-[170px] sm:w-[110px] sm:-top-14 sm:h-[100px]"
            src="/images/TnP/indicator.png"
            alt=""
          />

          <div className="flex justify-between sm:flex-col">
            <div>
              <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                TPO&apos;S MESSAGE
              </div>
              <div className="mt-10 sm:mt-4 w-[800px] text-xl text-accent sm:w-full sm:text-base">
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
            <div className="w-[300px] sm:h-[320px] h-[360px] bg-[#24346D] mt-28 mr-6 rounded-xl p-3 text-white text-2xl sm:text-lg items-center flex flex-col sm:mt-8 sm:w-[250px] sm:mx-auto">
              <div className="overflow-hidden bg-white rounded-xl">
                <img src="/images/TnP/amitsarkar.png" alt="amitsarkar.png" />
              </div>
              <div className="mt-2">DR. Amit Sarkar</div>
            </div>
          </div>
        </section>
        <CampusPlacement />
        <BranchPlacement />
        <EsteemedRecruiters />
        <section className="w-full py-8 bg-white">
          <Career />
        </section>
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default TnP
