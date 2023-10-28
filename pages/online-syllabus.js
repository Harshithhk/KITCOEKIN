import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import { Tab } from '@headlessui/react'
import SyllabusTabs from "../sections/academics/onlineSyllabus/SyllabusTabs"
import SyllabusTab from "../sections/academics/onlineSyllabus/SyllabusTab"


export async function getStaticProps() {
  
  let syllabus = []
  syllabus = await fetch(
    process.env.SERVER_API+"/api/syllabus"
  )
  syllabus = await syllabus.json()

  return {
    props: {
      syllabus: syllabus,
    },
    revalidate: 10,
  }
}

const OnlineSyllabus = (props) => {
  return (
    <DefaultLayout>
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
            ONLINE SYLLABUS
          </h1>
          <br/>
          <br/>
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
            <span className=" ">|</span> Onine Syllabus
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}

        <SyllabusTab syllabus = {props.syllabus} />
        
        <Footer />
    </DefaultLayout>
  )
}

export default OnlineSyllabus
