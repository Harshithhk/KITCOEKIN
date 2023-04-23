import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import EsteemedRecruiters from "../sections/home-page/EsteemedRecruiters"
import Career from "../sections/departments/career"

const BoardOfDirectors = () => {
  let founders = [
    {
      name: "Shri. Sunil Kulkarni",
      designation: "Chairman",
      img: "/images/About/BoardOfDirectors/sunil-kulkarni.jpg",
    },
    {
      name: "Shri. Sajid Hudli",
      designation: "Vice Chairman",
      img: "/images/About/BoardOfDirectors/sajid-hudli.jpg ",
    },
    {
      name: "Shri. Dipak Chougule",
      designation: "Secretary",
      img: "/images/About/BoardOfDirectors/dipak-chougule.jpg",
    },
    {
      name: "Shri. Bharat Patil",
      designation: "Trustee",
      img: "/images/About/BoardOfDirectors/bharat-patil.jpg",
    },

    {
      name: "Shri. Sachin Menon",
      designation: "Trustee",
      img: "/images/About/BoardOfDirectors/sachin-menon.jpg",
    },
    {
      name: "Shri. Dilip Joshi",
      designation: "Trustee",
      img: "/images/About/BoardOfDirectors/d-c-joshi.jpg",
    },
    {
      name: "Mrs. Shilpaja P. Kangutkar-Pungaonkar",
      designation: "Trustee",
      img: "/images/About/BoardOfDirectors/shilpaja-kangutkar-pungaonkar.jpg",
    },
    {
      name: "Col. Pratapsinh Raorane (Rtd.)",
      designation: "Trustee",
      img: "/images/About/BoardOfDirectors/pratapsinh-raorane.jpg",
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
            Board of Directors
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
            <span className="">|</span> Board of Directors
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-white px-14 sm:px-4 sm:pb-10">
          {/* <img
            data-aos="zoom-in"
            data-aos-delay="0"
            className="absolute -top-28 w-[205px] h-[170px] sm:w-[110px] sm:-top-14 sm:h-[100px]"
            src="/images/TnP/indicator.png"
            alt=""
          /> */}

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

            <div className="md:mx-auto w-[300px] h-[370px] bg-transparent   mt-28 mr-6 rounded-xl text-white text-2xl md:text-xl  items-center justify-between flex flex-col md:mt-14">
              <div className="absolute bg-[#24346D]  w-[300px] sm:w-[305px] h-36 mt-36"></div>
              <div className="relative overflow-hidden bg-transparent sm:-mx-1 sm:-mt-1 ">
                <img
                  data-aos="zoom-in"
                  data-aos-delay="0"
                  src="/images/About/BoardOfDirectors/sunil-kulkarni.png "
                  className=""
                  alt="mamtakalas.png"
                />
              </div>
              <div className="mt-2 mb-2 flex flex-col py-2 items-center  text-[#24346D]">
                <div className="bg-primary w-16 h-[3px]   rounded-xl"></div>
                Shri. Sunil Kulkarni
              </div>
            </div>
          </div>
        </section>
        <section className="relative  z-30 w-full mx-auto pt-20 sm:pt-14 mt-20 sm:mt-14 pb-20 h-fit bg-[#F8F7FC] px-14 sm:px-4 sm:pb-10">
          <div className="flex items-center w-full sm:ml-2">
            <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
            <div className="ml-3 md:ml-2 w-fit  text-center sm:text-xl   text-[#24346D] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
              OUR VALUABLE TEAM MEMBERS
            </div>
          </div>

          <div className="flex flex-wrap justify-center w-full mt-16 gap-x-16 gap-y-16 sm:mt-14 sm:gap-x-7 sm:gap-y-7">
            {founders.map((image, index) => (
              <div
                key={index}
                className="z-30 shadow-md w-[190px] h-fit sm:w-[120px] flex flex-col items-center justify-center rounded-lg overflow-hidden "
              >
                <img
                  src={image.img}
                  className="w-full overflow-hidden border-2 border-b-0 rounded-lg border-primary h-fit sm:h-fit"
                  alt={image.img}
                />
                <div className="py-2 mx-auto text-lg font-semibold text-center sm:text-xs text-accent">
                  {image.name}
                </div>
                <div className="bg-primary w-10 h-[2px] rounded-xl"></div>
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

export default BoardOfDirectors
