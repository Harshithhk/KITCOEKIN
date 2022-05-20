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
          <h1 className="w-[75%] mt-14 sm:text-xl  text-4xl font-bold text-center text-white z-20">
            KOLHAPUR INSTITURE OF TECHNOLOGY&apos;S
          </h1>
          <h1 className="w-[75%] text-4xl sm:text-xl font-bold text-center text-white z-20">
            COLLEGE OF ENGINEERING (AUTONOMOUS), KOLHAPUR
          </h1>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative z-30 w-full pb-20 h-fit px-14 sm:px-4 sm:pb-10 ">
          <div className="z-10  absolute w-full top-0 left-0 h-full bg-center  bg-no-repeat bg-cover bg-[url('/images/FounderTrustees/KITBG.jpeg')]  opacity-5"></div>

          <h1 className="text-5xl w-fit mx-auto pt-16 sm:pt-8 text-[#24346D] font-bold sm:text-2xl">
            MILESTONES
          </h1>
          <div className="mt-8 w-[80%] text-[#24346D] sm:mt-4 mx-auto text-center text-xl sm:text-sm ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            laudantium perspiciatis at dolore earum provident fugit aperiam
            repellat dolorem, recusandae esse, ratione expedita illum autem iste
            sed tempora quaerat eum?
          </div>

          <div className="mx-auto mt-16 sm:mt-8 w-[875px] sm:w-full">
            <h1 className="mx-auto text-5xl font-bold w-fit text-primary sm:text-2xl">
              WE STARTED AT
            </h1>
            <div className="relative mt-4 w-fit">
              <h1 className="text-7xl text-[#24346D] opacity-25 font-bold">
                1983
              </h1>
              <h1 className="text-3xl font-bold text-accent">Established</h1>
              <img
                src="/images/Milestones/arrow1.svg"
                className="absolute top-8 left-full"
                alt=""
              />
            </div>
            <div className="relative mt-4 ml-40 w-fit">
              <h1 className="text-7xl text-[#24346D] opacity-25 font-bold">
                2005
              </h1>
              <h1 className="text-3xl font-bold text-accent">
                1st NBA Accrediation (Elx,Civil,Env,Prod)
              </h1>
              <img
                src="/images/Milestones/arrow-down-left.svg"
                className="absolute top-full left-4"
                alt=""
              />
            </div>
            <div className="relative ml-0 mt-14 w-fit">
              <h1 className="text-7xl text-[#24346D] opacity-25 font-bold">
                2008
              </h1>
              <h1 className="text-3xl font-bold text-accent">
                1st NBA Accrediation (Elx,Civil,Env,Prod,Mech,CSE,IT,Bio)
              </h1>
              <img
                src="/images/Milestones/arrow-down-right.svg"
                className="absolute top-full left-14"
                alt=""
              />
            </div>
            <div className="relative ml-40 mt-14 w-fit">
              <h1 className="text-7xl text-[#24346D] opacity-25 font-bold">
                2009
              </h1>
              <h1 className="text-3xl font-bold text-accent">
                SUK Lead College
              </h1>
              <img
                src="/images/Milestones/arrow-down-left.svg"
                className="absolute top-full left-4"
                alt=""
              />
            </div>
            <div className="relative ml-0 mt-14 w-fit">
              <h1 className="text-7xl text-[#24346D] opacity-25 font-bold">
                2008
              </h1>
              <h1 className="text-3xl font-bold text-accent">
                1st NBA Accrediation (Elx,Civil,Env,Prod,Mech,CSE,IT,Bio)
              </h1>
              <img
                src="/images/Milestones/arrow-down-right.svg"
                className="absolute top-full left-14"
                alt=""
              />
            </div>
            <div className="relative ml-40 mt-14 w-fit">
              <h1 className="text-7xl text-[#24346D] opacity-25 font-bold">
                2009
              </h1>
              <h1 className="text-3xl font-bold text-accent">
                SUK Lead College
              </h1>
              <img
                src="/images/Milestones/arrow-down-left.svg"
                className="absolute top-full left-4"
                alt=""
              />
            </div>
            <div className="relative ml-0 mt-14 w-fit">
              <h1 className="text-7xl text-[#24346D] opacity-25 font-bold">
                2015
              </h1>
              <h1 className="text-3xl font-bold text-accent">
                NAAC 'A' Grade Accrediation
              </h1>
              <img
                src="/images/Milestones/arrow-down-right.svg"
                className="absolute top-full left-14"
                alt=""
              />
            </div>
            <div className="relative ml-40 mt-14 w-fit">
              <h1 className="text-7xl text-[#24346D] opacity-25 font-bold">
                2016
              </h1>
              <h1 className="text-3xl font-bold text-accent">
                SUK Permanent Affiliation SUK Lead College
              </h1>
              <img
                src="/images/Milestones/arrow-down-left.svg"
                className="absolute top-full left-4"
                alt=""
              />
            </div>
            <div className="relative ml-0 mt-14 w-fit">
              <h1 className="text-7xl text-[#24346D] opacity-25 font-bold">
                2017
              </h1>
              <h1 className="text-3xl font-bold text-accent">
                Autonomous Status Recognition Under 2 (f) and 12 (B){" "}
              </h1>
              <img
                src="/images/Milestones/arrow-down-right.svg"
                className="absolute top-full left-14"
                alt=""
              />
            </div>
            <div className="relative ml-40 mt-14 w-fit">
              <h1 className="text-7xl text-[#24346D] opacity-25 font-bold">
                2018
              </h1>
              <h1 className="text-3xl font-bold text-accent">
                NAAC 'A' Grade Accredoatopm (Elx,Civil,CSE & Prod)
              </h1>
            </div>
            <img
              src="/images/Milestones/down.svg"
              className="mx-auto mt-3"
              alt=""
            />
            <h1 className="mx-auto mt-4 text-5xl font-bold w-fit text-primary sm:text-2xl">
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
