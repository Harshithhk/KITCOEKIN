import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import EsteemedRecruiters from "../sections/home-page/EsteemedRecruiters"
import Career from "../sections/departments/career"

const BoardOfDirectors = () => {
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
                CHAIRMAN&apos;S MESSAGE
              </div>
              <div className="mt-10 text-justify sm:mt-4 w-[800px] text-xl text-accent sm:w-full sm:text-base">
                KIT, over the years, has created a brand image at the State and
                National level for giving our country, engineers, who are well
                prepared to face the future challenges, Our institute has
                constantly made efforts to give more focus in enhancing teaching
                and learning systems.We do understand that a lot needs to be
                done in bringing creativity and critical thinking in our
                curriculum, which will further inculcate skills to enable our
                students’ demonstrate higher levels of expertise. It will be our
                endeavours to add more qualified PhDs into our faculty base,
                which will strengthen research at all levels. I greatly
                appreciate the involvement of both the students and faculty in
                organizing State and National level workshops, which greatly
                help our institute to understand the current trends in the
                market.
                <br></br>
                <br></br>
                <p>I wish everyone the very best for the year ahead.</p>
              </div>
            </div>
            <div className="w-[300px] sm:h-[320px] h-[360px] bg-[#24346D] mt-28 mr-6 rounded-xl p-3 text-white text-2xl sm:text-lg items-center flex flex-col sm:mt-8 sm:w-[250px] sm:mx-auto">
              <div className="overflow-hidden bg-white rounded-xl">
                <img
                  src="/images/BoardOfDirectors/sunil-kulkarni1.jpg"
                  alt="sunil-kulkarni1.jpg"
                />
              </div>
              <div className="mt-2">Shri. Sunil Kulkarni</div>
            </div>
          </div>
        </section>
        <BranchPlacement />
        <EsteemedRecruiters />
        <section className="w-full py-8 bg-white">
          <Career />
        </section>
      </div>
      <Footer />
    </DefaultLayout>
  )
}

export default BoardOfDirectors
