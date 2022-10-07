import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

let founders = [
  {
    name: "Late.Shri Shivajirao Desai",
    designation: "Founder Chairman",
    img: "/images/About/FounderTrustees/shivajirao-desai.jpg",
  },
  {
    name: "Late.Shri.M.M.Hudli",
    designation: "Founder Vice Chairman",
    img: "/images/About/FounderTrustees/m-m-hadli.jpg",
  },
  {
    name: "Late.Shri.B.S.Kulkarni",
    designation: "Founder Secretary",
    img: "/images/About/FounderTrustees/b-s-kulkarni.jpg",
  },
  {
    name: "Late.Shri.Ram Menon",
    designation: "Trustee",
    img: "/images/About/FounderTrustees/ram-menon.jpg",
  },

  {
    name: "Late.Shri. L.B. Chougule",
    designation: "Trustee",
    img: "/images/About/FounderTrustees/l-b-chougule.jpg",
  },
  {
    name: "Late.Shri. D.S. Patil",
    designation: "Trustee",
    img: "/images/About/FounderTrustees/d-s-patil.jpg",
  },
  {
    name: "Late.Shri. Shri. M.R. Pungavkar",
    designation: "Trustee",
    img: "/images/About/FounderTrustees/m-r-pungavkar.jpg",
  },
  {
    name: "Late.Shri. C.D.Joshi",
    designation: "Trustee",
    img: "/images/About/FounderTrustees/c-d-joshi.jpg",
  },
  {
    name: "Late Prin. Shri. A.P. Rane",
    designation: "Trustee",
    img: "/images/About/FounderTrustees/a-p-rane.jpg",
  },
  {
    name: "Late.Shri. E. S. Beri",
    designation: "Trustee",
    img: "/images/About/FounderTrustees/r-s-beri.jpg",
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
            className="w-[75%] mt-14 sm:text-2xl  text-4xl font-bold text-center text-white z-20"
          >
            Founder Trustees
          </h1>
          <br></br>
          <br></br>
          <h6
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
          >
            <span className="hover:text-primary hover:cursor-pointer">
              {" "}
              Home
            </span>{" "}
            <span className="">|</span> Founder Trustees
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-[#F8F7FC] px-14 sm:px-4 sm:pb-10">
          <div className="z-10  absolute w-full top-0 left-0 h-full bg-center  bg-no-repeat bg-cover bg-[url('/images/About/FounderTrustees/KITBG.jpeg')]  opacity-10"></div>
          <div className="pt-16 sm:pt-16 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
            <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
            FOUNDER TRUSTEES
          </div>

          <div className="mt-8 w-[80%] text-[#24346D] sm:mt-4 mx-auto text-center text-xl sm:text-sm ">
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            laudantium perspiciatis at dolore earum provident fugit aperiam
            repellat dolorem, recusandae esse, ratione expedita illum autem iste
            sed tempora quaerat eum? */}
          </div>

          <div className="flex flex-wrap justify-center w-full mt-16 gap-x-16 gap-y-16 sm:mt-14 sm:gap-x-7 sm:gap-y-7">
            {founders.map((image, index) => (
              <div
                key={index}
                className="z-30 w-[170px] h-fit sm:w-[120px] rounded-lg overflow-hidden "
              >
                <img
                  src={image.img}
                  className="w-full h-fit sm:h-fit"
                  alt={image.img}
                />
                <div className="py-2 mx-auto text-lg font-semibold text-center sm:text-xs text-accent">
                  {image.name}
                </div>
                <div className="bg-primary w-10 h-[2px] sm:ml-10 ml-16 rounded-xl"></div>
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

export default FounderTrustees
