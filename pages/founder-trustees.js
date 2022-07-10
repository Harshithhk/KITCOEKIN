import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

let founders = [
  {
    name: "Late.Shri Shivajirao Desai",
    designation: "Founder Chairman",
    img: "/images/FounderTrustees/shivajirao-desai.jpg",
  },
  {
    name: "Late.Shri.M.M.Hudli",
    designation: "Founder Vice Chairman",
    img: "/images/FounderTrustees/m-m-hadli.jpg",
  },
  {
    name: "Late.Shri.B.S.Kulkarni",
    designation: "Founder Secretary",
    img: "/images/FounderTrustees/b-s-kulkarni.jpg",
  },
  {
    name: "Late.Shri.Ram Menon",
    designation: "Trustee",
    img: "/images/FounderTrustees/ram-menon.jpg",
  },

  {
    name: "Late.Shri. L.B. Chougule",
    designation: "Trustee",
    img: "/images/FounderTrustees/l-b-chougule.jpg",
  },
  {
    name: "Late.Shri. D.S. Patil",
    designation: "Trustee",
    img: "/images/FounderTrustees/d-s-patil.jpg",
  },
  {
    name: "Late.Shri. Shri. M.R. Pungavkar",
    designation: "Trustee",
    img: "/images/FounderTrustees/m-r-pungavkar.jpg",
  },
  {
    name: "Late.Shri. C.D.Joshi",
    designation: "Trustee",
    img: "/images/FounderTrustees/c-d-joshi.jpg",
  },
  {
    name: "Late Prin. Shri. A.P. Rane",
    designation: "Trustee",
    img: "/images/FounderTrustees/a-p-rane.jpg",
  },
  {
    name: "Late.Shri. E. S. Beri",
    designation: "Trustee",
    img: "/images/FounderTrustees/r-s-beri.jpg",
  },
]

const FounderTrustees = () => {
  return (
    <DefaultLayout>
      <div className="w-full bg-[#24346D] pb-10">
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
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-[#F8F7FC] px-14 sm:px-4 sm:pb-10">
          <div className="z-10  absolute w-full top-0 left-0 h-full bg-center  bg-no-repeat bg-cover bg-[url('/images/FounderTrustees/KITBG.jpeg')]  opacity-10"></div>

          <h1 className="text-5xl w-fit mx-auto pt-16 sm:pt-8 text-[#24346D] font-bold sm:text-2xl">
            FOUNDER TRUSTEES
          </h1>
          <div className="mt-8 w-[80%] text-[#24346D] sm:mt-4 mx-auto text-center text-xl sm:text-sm ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            laudantium perspiciatis at dolore earum provident fugit aperiam
            repellat dolorem, recusandae esse, ratione expedita illum autem iste
            sed tempora quaerat eum?
          </div>

          <div className="flex flex-wrap  justify-center w-full mt-16 gap-x-16 gap-y-16 sm:mt-8 sm:gap-x-7 sm:gap-y-7">
            {founders.map((founder,index) => (
              <div  key={index} className="z-30 w-[170px] h-fit sm:w-[89px] rounded-lg overflow-hidden  ">
                <img
               
                  src={founder.img}
                  className="w-full h-[190px] sm:h-20"
                  alt={founder.img}
                />
                <div className="mx-auto text-lg font-semibold text-center sm:text-xs text-accent">
                  {founder.name}
                </div>
                <h2 className="mx-auto text-lg text-center w-fit text-accent-light sm:text-xs">
                  {founder.designation}
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

export default FounderTrustees
