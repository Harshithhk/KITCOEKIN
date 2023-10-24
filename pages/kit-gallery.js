import React from "react"
import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import BranchPlacement from "../sections/departments/branchPlacement"
import Career from "../sections/departments/career"
import CampusPlacement from "../sections/departments/campusplacement"
import TnPEsteemedRecruiters from "../sections/tnp/TnPEsteemedRecruters"
import Gallery from "../sections/kitGallery"
import Team from "../sections/team"
import { Tab } from "@headlessui/react"
import { useRouter } from "next/router"

export async function getStaticProps() {
  let images = []
  images = await fetch(
    process.env.SERVER_API+"/api/gallery"
  )
  images = await images.json()
  console.log(images)
  return {
    props: {
      images: images,
    },
    revalidate: 10,
  }
}

const KitGallery = (props) => {
  const [departmentMenu, setDepartmentMenu] = React.useState(false)
  const [menuSelected, setMenuSelected] = React.useState(false)
  let { query } = useRouter()

  const TypeTab0 = 'Electrical Engineering';
  const TypeTab1 = 'Electrical Engineering';
  const TypeTab2 = 'Electrical Engineering';
  const TypeTab3 = 'Electrical Engineering';
  const TypeTab4 = 'Electrical Engineering';
  const TypeTab5 = 'Electrical Engineering';
  const TypeTab6 = 'Electrical Engineering';
  const TypeTab7 = 'Electrical Engineering';
  const TypeTab8 = 'Electrical Engineering';
  const TypeTab9 = 'Electrical Engineering';
  const TypeTab10 = 'Electrical Engineering';
  const TypeTab11 = 'Electrical Engineering';
  const TypeTab12 = 'Electrical Engineering';
  const TypeTab13 = 'Electrical Engineering';
  const TypeTab14 = 'Electrical Engineering';
  const TypeTab15 = 'Electrical Engineering';
  const TypeTab16 = 'Electrical Engineering';


  // Use the filter() method to filter the array based on the type
  // const filteredImages = images.filter(image => image.type === targetType);

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
            KITCoEK Gallery
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
            <span className=" ">|</span> KIToEK Gallery
          </h6>
        </section>
        {/*---------------------------------------------------------------------pb-20  px-14 sm:px-4 sm:pb-10----------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative  z-30 w-[100%] pb-20 pt-10 sm:pt-20 -mb-10 mx-auto h-fit bg-secondary ">
          {/* <img
            className="absolute -top-28 w-[205px] h-[170px] sm:w-[110px] sm:-top-14 sm:h-[100px]"
            src="/images/TnP/indicator.png"
            alt=""
          /> */}
          <Tab.Group selectedIndex={query.Tab}>
            <div className=" flex flex-row sm:flex-col justify-center items-center absolute -top-11 w-[100%] h-20 sm:h-fit bg-transparent ">
              <Tab.List className="text-slate-400 flex  flex-row sm:grid-cols-2 sm:grid sm:justify-items-center sm:p-5 sm:gap-3  items-center justify-evenly rounded-xl shadow-2xl h-20 sm:h-fit w-3/4 bg-white">
                <Tab
                  className={({ selected }) =>
                    selected
                      ? " focus:outline-none flex hover:cursor-pointer text-[#24346D] font-semibold underline underline-offset-2 hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                      : "focus:outline-none  hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2 "
                  }
                >
                  {({ selected }) => {
                    selected ? setMenuSelected(false) : null
                    return "All"
                  }}
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? " focus:outline-none flex hover:cursor-pointer text-[#24346D] font-semibold underline underline-offset-2 hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                      : "focus:outline-none  hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2 "
                  }
                >
                  {({ selected }) => {
                    selected ? setMenuSelected(false) : null
                    return "About-KIT"
                  }}
                </Tab>
                <div className="flex  ">
                  <p
                    onClick={() => setDepartmentMenu(!departmentMenu)}
                    className={
                      menuSelected
                        ? "text-[#24346D] font-semibold underline underline-offset-2 flex hover:cursor-pointer hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                        : " flex hover:cursor-pointer hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                    }
                  >
                    Departments
                    <svg
                      className={
                        departmentMenu
                          ? "transform rotate-180 ml-2 h-5 mt-1 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                          : "transform rotate-0 transition mt-1 ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </p>
                  <div
                    onClick={() => {
                      setDepartmentMenu(!departmentMenu)
                    }}
                    className={
                      departmentMenu
                        ? "grid grid-rows-11 divide-y  justify-items-start gap-2 p-4 absolute top-16 sm:top-24 sm:left-6 h-fit w-fit bg-white border-slate-50 border-2 rounded-xl shadow-2xl"
                        : "hidden"
                    }
                  >
                    <Tab
                      className={({ selected }) =>
                        selected
                          ? " focus:outline-none flex hover:cursor-pointer text-[#24346D] font-semibold underline underline-offset-2 hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                          : "focus:outline-none  hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2 "
                      }
                    >
                      {({ selected }) => {
                        selected ? setMenuSelected(selected) : null
                        return " Biotechnology Engineering"
                      }}
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        selected
                          ? " focus:outline-none flex hover:cursor-pointer text-[#24346D] font-semibold underline underline-offset-2 hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                          : "focus:outline-none  hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2 "
                      }
                    >
                      {({ selected }) => {
                        selected ? setMenuSelected(true) : null
                        return "Civil Engineering "
                      }}
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        selected
                          ? " focus:outline-none flex hover:cursor-pointer text-[#24346D] font-semibold underline underline-offset-2 hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                          : "focus:outline-none  hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2 "
                      }
                    >
                      {({ selected }) => {
                        selected ? setMenuSelected(true) : null
                        return "Civil & Environmental Engineering "
                      }}
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        selected
                          ? " focus:outline-none flex hover:cursor-pointer text-[#24346D] font-semibold underline underline-offset-2 hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                          : "focus:outline-none  hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2 "
                      }
                    >
                      {({ selected }) => {
                        selected ? setMenuSelected(true) : null
                        return "Computer Science Engineering "
                      }}
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        selected
                          ? " focus:outline-none flex hover:cursor-pointer text-[#24346D] font-semibold underline underline-offset-2 hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                          : "focus:outline-none  hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2 "
                      }
                    >
                      {({ selected }) => {
                        selected ? setMenuSelected(true) : null
                        return "Computer Science Engineering - DS "
                      }}
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        selected
                          ? " focus:outline-none flex hover:cursor-pointer text-[#24346D] font-semibold underline underline-offset-2 hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                          : "focus:outline-none  hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2 "
                      }
                    >
                      {({ selected }) => {
                        selected ? setMenuSelected(true) : null
                        return "Computer Science Engineering - AI/ML "
                      }}
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        selected
                          ? " focus:outline-none flex hover:cursor-pointer text-[#24346D] font-semibold underline underline-offset-2 hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                          : "focus:outline-none  hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2 "
                      }
                    >
                      {({ selected }) => {
                        selected ? setMenuSelected(true) : null
                        return "Electrical Engineering "
                      }}
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        selected
                          ? " focus:outline-none flex hover:cursor-pointer text-[#24346D] font-semibold underline underline-offset-2 hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                          : "focus:outline-none  hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2 "
                      }
                    >
                      {({ selected }) => {
                        selected ? setMenuSelected(true) : null
                        return "Electronics Engineering "
                      }}
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        selected
                          ? " focus:outline-none flex hover:cursor-pointer text-[#24346D] font-semibold underline underline-offset-2 hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                          : "focus:outline-none  hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2 "
                      }
                    >
                      {({ selected }) => {
                        selected ? setMenuSelected(true) : null
                        return "Electronics & Telecomm Engineering "
                      }}
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        selected
                          ? " focus:outline-none flex hover:cursor-pointer text-[#24346D] font-semibold underline underline-offset-2 hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                          : "focus:outline-none  hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2 "
                      }
                    >
                      {({ selected }) => {
                        selected ? setMenuSelected(true) : null
                        return "Mechanical Engineering "
                      }}
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        selected
                          ? " focus:outline-none flex hover:cursor-pointer text-[#24346D] font-semibold underline underline-offset-2 hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                          : "focus:outline-none  hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2 "
                      }
                    >
                      {({ selected }) => {
                        selected ? setMenuSelected(true) : null
                        return "Basic Sciences & Humanities "
                      }}
                    </Tab>
                  </div>
                </div>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? " focus:outline-none flex hover:cursor-pointer text-[#24346D] font-semibold underline underline-offset-2 hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                      : "focus:outline-none  hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2 "
                  }
                >
                  {({ selected }) => {
                    selected ? setMenuSelected(false) : null
                    return "Cultural"
                  }}
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? " focus:outline-none flex hover:cursor-pointer text-[#24346D] font-semibold underline underline-offset-2 hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                      : "focus:outline-none  hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2 "
                  }
                >
                  {({ selected }) => {
                    selected ? setMenuSelected(false) : null
                    return "Library"
                  }}
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? " focus:outline-none flex hover:cursor-pointer text-[#24346D] font-semibold underline underline-offset-2 hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2"
                      : "focus:outline-none  hover:text-[#24346D] hover:font-semibold hover:underline hover:underline-offset-2 "
                  }
                >
                  {({ selected }) => {
                    selected ? setMenuSelected(false) : null
                    return "Hostel"
                  }}
                </Tab>
              </Tab.List>
            </div>
            {/*  */}
            <Tab.Panels>
              {/*  */}

              <Tab.Panel>
                <Gallery imageList = {props.images} Tab="0" />
              </Tab.Panel>
              <Tab.Panel>
                <Gallery imageList = {props.images} Tab="1" />
              </Tab.Panel>
              <Tab.Panel>
                <Gallery imageList = {props.images} Tab="2" />
              </Tab.Panel>
              <Tab.Panel>
                <Gallery imageList = {props.images} Tab="3" />
              </Tab.Panel>
              <Tab.Panel>
                <Gallery imageList = {props.images} Tab="4" />
              </Tab.Panel>
              <Tab.Panel>
                <Gallery imageList = {props.images} Tab="5" />
              </Tab.Panel>
              <Tab.Panel>
                <Gallery imageList = {props.images} Tab="6" />
              </Tab.Panel>
              <Tab.Panel>
                <Gallery imageList = {props.images} Tab="7" />
              </Tab.Panel>
              <Tab.Panel>
                <Gallery imageList = {props.images} Tab="8" />
              </Tab.Panel>
              <Tab.Panel>
                <Gallery imageList = {props.images} Tab="9" />
              </Tab.Panel>
              <Tab.Panel>
                <Gallery imageList = {props.images} Tab="10" />
              </Tab.Panel>
              <Tab.Panel>
                <Gallery imageList = {props.images} Tab="11" />
              </Tab.Panel>
              <Tab.Panel>
                <Gallery imageList = {props.images} Tab="12" />
              </Tab.Panel>
              <Tab.Panel>
                <Gallery imageList = {props.images} Tab="13" />
              </Tab.Panel>
              <Tab.Panel>
                <Gallery imageList = {props.images} Tab="14" />
              </Tab.Panel>
              <Tab.Panel>
                <Gallery imageList = {props.images} Tab="15" />
              </Tab.Panel>

              {/*  */}
            </Tab.Panels>
            {/*  */}
          </Tab.Group>
        </section>

        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default KitGallery
