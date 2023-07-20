import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import Career from "../sections/tnp/career/index"
import CampusPlacement from "../sections/departments/campusplacement"
import TnPEsteemedRecruiters from "../sections/tnp/TnPEsteemedRecruters"
import CoolSlider from "../components/CoolSlider"
import TextSlider from "../components/TextSlider"
import PlacementTeam from "../sections/tnp/PlacementTeam"
import DepartmentMou from "../sections/tnp/DepartmentMou"

const TnP = () => {

  return (

    <DefaultLayout>
      <div className="w-full bg-[#24346D] overflow-x-clip">
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
            className="w-[75%] mt-14 sm:text-2xl  text-4xl font-bold text-center text-white z-20"
          >
            TRAINING & PLACEMENT
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <a href="/">
              <span className="hover:text-primary hover:cursor-pointer">
                {" "}
                Home
              </span>{" "}
            </a>
            <span className="">|</span> Training & Placement
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-secondary px-14 sm:px-4 sm:pb-10">
          {/* <img
            className="absolute -top-28 w-[205px] h-[170px] sm:w-[110px] sm:-top-14 sm:h-[100px]"
            src="/images/TnP/indicator.png"
            alt=""
          /> */}

          <div className="flex justify-between sm:flex-col items-center">
            <div>
              <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                TPO&apos;S MESSAGE
              </div>
              <div className="mt-10 text-justify sm:mt-4 w-[800px] text-xl text-accent sm:w-full sm:text-base">
              Kolhapur Institute of Technology, (Autonomous), Kolhapur has always been a step ahead when it comes to placements. Our students are prepared for the opportunities that await them in the professional arena. The Placement Cell operates round the year to facilitate contacts between companies and graduates. The Placement details of our students are an indicative factor that the college is having very fruitful and meaningful relations with the industries. We have been successful in maintaining our high placement statistics over the years and the fact that our students have achieved record breaking placements itself is a testimony to our quality.
              <br/>
              <br/>
              Aptitude testing has become an inherent part of all recruitment processes and hence aptitude skills are imperative for the career and so are soft skills. Soft skills are different from other skills in terms of it being the only set of skills which can never truly be crammed into anybody. No one can teach you how to behave, but a basic knowledge of social etiquette and professional Nothing beats the feeling of leaving your campus with one or more offer letter(s) in hand and we at placement cell make sure each of our student gets to experience that happiness.
              <br/>
              <br/><hr></hr> 
            <span className=" font-bold"> Education Details Verification of Passout Students:<br/><br/>Contact Details :</span><br/><br/>
Mr. Vishwas Patil<br/>
Contact No. 7588065014<br/>
emailID- kitcoek.registrar@gmail.com
              </div>
            </div>
            <div className="md:mx-auto w-[300px]  h-[370px] bg-transparent  mr-6 rounded-xl text-white text-2xl md:text-xl   flex flex-col md:mt-14">
              <div className="overflow-hidden relative xl:w-[250px] bg-transparent sm:-mx-1 sm:-mt-1 ">
                <img src="/images/TnP/amit-sarkar-training-placement-head.jpg " className=" " alt="mamtakalas.png" />
              </div>
              <div className="mt-2 mb-2 flex flex-col py-2 items-center  text-[#24346D]">
                  <div className="bg-primary w-16 h-[3px]   rounded-xl"></div>
                  Dr Amit R Sarkar

              </div> 
            </div>
          </div>
   
        </section>
        <section className="relative rounded-3xl -mt-10 pt-10 z-30 w-[95%] mx-auto pb-20 h-fit bg-secondary px-14 sm:px-4 sm:pb-10">
          <Career />
        </section>

        <section className="mt-16 pt-10 z-30 w-[100%] mx-auto pb-20 h-fit bg-secondary px-14 sm:px-4 sm:pb-10">
          {/* <TextSlider /> */}
        </section>
      
        {/* <CampusPlacement /> */}
        <TnPEsteemedRecruiters />
        <BranchPlacement />
        <PlacementTeam />
        <DepartmentMou />
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default TnP
