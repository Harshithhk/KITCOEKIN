import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const Milestones = () => {
  return (
    <DefaultLayout>
      <div className="w-full">
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
            Milestones
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
            <span className="">|</span> Milestones
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative z-30 w-full pb-20 h-fit px-14 sm:px-4 sm:pb-10 ">
          <div className="z-10  absolute w-full top-0 left-0 h-full bg-center  bg-no-repeat bg-cover bg-[url('/images/FounderTrustees/KITBG.jpeg')]  opacity-5"></div>
          {/* <div className="flex items-center w-full mt-16 sm:ml-2 sm:mt-10">
            <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
            <div className="ml-3 md:ml-2 w-fit  text-center sm:text-2xl   text-[#24346D] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
            MILESTONES
            </div>
          </div> */}
          <div className="mt-8 w-fit text-[#24346D] sm:mt-4 mx-auto text-left sm:text-center text-xl sm:text-sm ">
            ( 35 Years of Journey Towards Academic Excellence )
          </div>

          <div className="mx-auto mt-8 sm:mt-8 w-[875px] sm:w-full">
            <h1 className="mx-auto text-5xl font-bold w-fit text-primary sm:text-2xl">
              WE STARTED AT
            </h1>
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="1000"
              className="relative mt-4 w-fit"
            >
              <h1 className="text-7xl md:text-5xl text-[#24346D] opacity-25 font-bold">
                1983
              </h1>
              <h1 className="text-3xl font-bold text-accent md:text-xl">
                Established
              </h1>
              {/* <img
                src="/images/Milestones/arrow1.svg"
                className="absolute top-8 left-full md:hidden"
                alt=""
              /> */}
              <img
                data-aos="zoom-in"
                data-aos-delay="0"
                data-aos-duration="1000"
                src="/images/Milestones/arrow-down-right.svg"
                className="absolute top-full left-14"
                alt=""
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="1000"
              className="relative mt-4 ml-40 w-fit"
            >
              <h1 className="text-7xl md:text-5xl text-[#24346D] opacity-25 font-bold">
                2005
              </h1>
              <h1 className="text-3xl font-bold text-accent md:text-xl">
                1st NBA Accrediation (Elx,Civil,Env,Prod)
              </h1>
              <img
                src="/images/Milestones/arrow-down-left.svg"
                className="absolute top-full left-4"
                alt=""
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="1000"
              className="relative ml-0 mt-14 w-fit"
            >
              <h1 className="text-7xl md:text-5xl text-[#24346D] opacity-25 font-bold">
                2008
              </h1>
              <h1 className="text-3xl font-bold text-accent md:text-xl">
                1st NBA Accrediation (Elx,Civil,Env,Prod,Mech,CSE,IT,Bio)
              </h1>
              <img
                src="/images/Milestones/arrow-down-right.svg"
                className="absolute top-full left-14"
                alt=""
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="1000"
              className="relative ml-40 mt-14 w-fit"
            >
              <h1 className="text-7xl md:text-5xl text-[#24346D] opacity-25 font-bold">
                2009
              </h1>
              <h1 className="text-3xl font-bold text-accent md:text-xl">
                SUK Lead College
              </h1>
              <img
                src="/images/Milestones/arrow-down-left.svg"
                className="absolute top-full left-4"
                alt=""
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="1000"
              className="relative ml-0 mt-14 w-fit"
            >
              <h1 className="text-7xl md:text-5xl text-[#24346D] opacity-25 font-bold">
                2008
              </h1>
              <h1 className="text-3xl font-bold text-accent md:text-xl">
                1st NBA Accrediation (Elx,Civil,Env,Prod,Mech,CSE,IT,Bio)
              </h1>
              <img
                src="/images/Milestones/arrow-down-right.svg"
                className="absolute top-full left-14"
                alt=""
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="1000"
              className="relative ml-40 mt-14 w-fit"
            >
              <h1 className="text-7xl md:text-5xl text-[#24346D] opacity-25 font-bold">
                2009
              </h1>
              <h1 className="text-3xl font-bold text-accent md:text-xl">
                SUK Lead College
              </h1>
              <img
                src="/images/Milestones/arrow-down-left.svg"
                className="absolute top-full left-4"
                alt=""
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="1000"
              className="relative ml-0 mt-14 w-fit"
            >
              <h1 className="text-7xl md:text-5xl text-[#24346D] opacity-25 font-bold">
                2015
              </h1>
              <h1 className="text-3xl font-bold text-accent md:text-xl">
                NAAC &lsquo;A&lsquo; Grade Accrediation
              </h1>
              <img
                src="/images/Milestones/arrow-down-right.svg"
                className="absolute top-full left-14"
                alt=""
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="1000"
              className="relative ml-40 mt-14 w-fit"
            >
              <h1 className="text-7xl md:text-5xl text-[#24346D] opacity-25 font-bold">
                2016
              </h1>
              <h1 className="text-3xl font-bold text-accent md:text-xl">
                SUK Permanent Affiliation SUK Lead College
              </h1>
              <img
                src="/images/Milestones/arrow-down-left.svg"
                className="absolute top-full left-4"
                alt=""
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="1000"
              className="relative ml-0 mt-14 w-fit"
            >
              <h1 className="text-7xl md:text-5xl text-[#24346D] opacity-25 font-bold">
                2017
              </h1>
              <h1 className="text-3xl font-bold text-accent md:text-xl">
                Autonomous Status Recognition Under 2 (f) and 12 (B){" "}
              </h1>
              <img
                src="/images/Milestones/arrow-down-right.svg"
                className="absolute top-full left-14"
                alt=""
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="1000"
              className="relative ml-40 mt-14 w-fit"
            >
              <h1 className="text-7xl md:text-5xl text-[#24346D] opacity-25 font-bold">
                2018
              </h1>
              <h1 className="text-3xl font-bold text-accent md:text-xl">
                NAAC &lsquo;A&lsquo; Grade Accredoatopm (Elx,Civil,CSE & Prod)
              </h1>
            </div>
            <img
              src="/images/Milestones/down.svg"
              className="mx-auto mt-3"
              alt=""
            />
            <h1
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="1500"
              className="mx-auto mt-4 text-5xl font-bold w-fit text-primary sm:text-2xl"
            >
              AND WE GO BEYOND
            </h1>
          </div>
        </section>

        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default Milestones
