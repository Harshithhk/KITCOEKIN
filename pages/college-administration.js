import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import EsteemedRecruiters from "../sections/home-page/EsteemedRecruiters"
import Career from "../sections/departments/career"

const CollegeAdministration = () => {
  let founders = [
    {
      name: "Dr. V. V. Karjinni",
      designation: "Executive Director",
      img: "/images/About/CollegeAdministration/v-v-karjinni.jpg",
    },
    {
      name: "Dr. M. M. Mujumdar",
      designation: "I/C Director and Registar",
      img: "/images/About/CollegeAdministration/m-m-mujumdar.jpg ",
    },
    {
      name: "Mr. Ajit S. Patil",
      designation: "Dean - Academics",
      img: "/images/About/CollegeAdministration/m-m-mujumdar.jpg",
    },
    {
      name: "Dr. Prashant P. Powar",
      designation: "Dean - Quality Assurance",
      img: "/images/About/CollegeAdministration/prashant-p-pawar.jpg",
    },

    {
      name: "Dr. Shivling M. Pise",
      designation: "Dean Research & Development",
      img: "/images/About/CollegeAdministration/shivling-pise.jpg",
    },
    {
      name: "Dr. Sachin. S. Shinde",
      designation:
        "Dean – International Relations, Incubation Innovation & linkages",
      img: "/images/About/CollegeAdministration/sachin-shinde.jpg",
    },
    {
      name: "Dr. Yuvraj Patil",
      designation: "Dean – Examination & Evaluation",
      img: "/images/About/CollegeAdministration/yuvraj-patil.jpg",
    },
    {
      name: "Dr. Akshay R. Thorvat",
      designation: "Dean – Student Activity",
      img: "/images/About/CollegeAdministration/akshay-thorvat.jpg",
    },
    {
      name: "Dr Amit R Sarkar",
      designation: "Dean – Alumni & Corporate Relations",
      img: "/images/About/CollegeAdministration/1amit-sarkar-training-placement-head.jpg",
    },
    {
      name: "Prof. T. B. Patil",
      designation: "Dean ICT",
      img: "/images/About/CollegeAdministration/1tanaji-b-patil.jpg",
    },
    {
      name: "Prof. S. R. Chougule",
      designation: "Dean PG & Research",
      img: "/images/About/CollegeAdministration/s-r-chougule.jpg",
    },
  ]

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
            College Administration
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
            <span className="">|</span> College Administration
          </h6>
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
                <div
                  data-aos="zoom-in"
                  data-aos-delay="0"
                  className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "
                ></div>
                EXECUTIVE DIRECTOR&apos;S MESSAGE
              </div>
              <div className="mt-10 text-justify sm:mt-4 w-[800px] text-xl text-accent sm:w-full sm:text-base">
                Education, wealth and strength are necessary for everyone. But
                the value of each of them depends on the way you use it.
                Education without character, politics without principles and
                commerce without morality are not only useless, but positively
                dangerous. Education is the ornament for human beings. It is the
                secret wealth. It is to be valued not as means of earning one’s
                livelihood, but as the essential requisite for a happy, peaceful
                and progressive life. Engineering offers a highly rewarding and
                lucrative career – one in which you can apply intuitive,
                imaginative and creative ideas to find appropriate solutions to
                the challenges facing our society. I wish you success in sharing
                knowledge, ideas and solving important societal needs and
                issues. However, the ‘Success in life’ will certainly depend
                upon creating high ethical and moral values besides imparting
                and inculcating up-to date knowledge and skills. On behalf of
                KIT’s College of Engineering, I wish you all the best in your
                personal and professional career.
                <br></br>
                <br></br>
                <p>I wish everyone the very best for the year ahead.</p>
              </div>
            </div>

            <div className="md:mx-auto w-[300px] h-[370px] bg-transparent   mt-28 mr-6 rounded-xl text-white text-2xl md:text-xl  items-center justify-between flex flex-col md:mt-14">
              <div className="absolute bg-[#24346D] w-[300px] sm:w-[305px] h-36 mt-36"></div>
              <div className="relative overflow-hidden bg-transparent sm:-mx-1 sm:-mt-1 ">
                <img
                  data-aos="zoom-in"
                  data-aos-delay="0"
                  src="/images/About/CollegeAdministration/v-v-karjinni.png "
                  className=""
                  alt="mamtakalas.png"
                />
              </div>
              <div className="mt-2 flex flex-col py-2 items-center text-[#24346D]">
                <div className="bg-primary w-16 h-[3px]   rounded-xl"></div>
                Dr. V. V. Karjinni
              </div>
            </div>
          </div>
        </section>
        <section className="relative  z-30 w-full mx-auto pt-20 sm:pt-14 mt-20 sm:mt-14 pb-20 h-fit bg-[#F8F7FC] px-14 sm:px-4 sm:pb-10">
          <div className="flex items-center w-full sm:ml-2">
            <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
            <div className="ml-3 md:ml-2 w-fit  text-center sm:text-xl   text-[#24346D] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
              COLLEGE ADMINISTRATION
            </div>
          </div>

          <div className="flex flex-wrap justify-center w-full mt-16 gap-x-16 gap-y-16 sm:mt-14 sm:gap-x-7 sm:gap-y-7">
            {founders.map((image, index) => (
              <div
                key={index}
                className="z-30  w-[190px] h-fit sm:w-[120px] rounded-lg overflow-hidden "
              >
                <img
                  src={image.img}
                  className="w-full overflow-hidden border-[1px] border-b-0 rounded-lg border-accent h-fit sm:h-fit"
                  alt={image.img}
                />
                <div className="py-2 mx-auto text-lg font-semibold text-center sm:text-xs text-accent">
                  {image.name}
                </div>
                <div className="bg-primary w-10 h-[2px] sm:ml-10 ml-20 rounded-xl"></div>
                <h2 className="mx-auto text-base text-center py-2 w-fit text-accent-light sm:text-[11px]">
                  {image.designation}
                </h2>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </DefaultLayout>
  )
}

export default CollegeAdministration
