import { useEffect, useState } from "react"
import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/departments/cse/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const EntcEngineeringFaculty = ({ staff }) => {
  const [UGstaff, setUGStaff] = useState([])
  const [PGstaff, setPGStaff] = useState([])
  const [NTstaff, setNTStaff] = useState([])
  useEffect(() => {
    let ugStaff = staff.filter((el) => el.type === "UG")
    setUGStaff(ugStaff)

    let pgStaff = staff.filter((el) => el.type === "PG")
    setPGStaff(pgStaff)

    let ntStaff = staff.filter((el) => el.type === "non_teaching")
    setNTStaff(ntStaff)

    return () => {}
  }, [])

  return (
    <DefaultLayout>
      <div className="w-full ">
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
            Faculty List
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
            <span className="">|</span> Staff
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}

        <section className="mx-auto overflow-hidden max-w-auto md:mx-0 bg-secondary">
          <div className="grid grid-cols-3 px-2 pb-20 mt-6 sm:px-0 sm:flex sm:flex-col">
            <section className="col-start-1 col-end-3 pb-20 mx-10 sm:mr-0 sm:ml-0 sm:mt-6 sm:px-4 sm:pb-10 h-fit ">
              <div className="mt-6 sm:mt-0 sm:ml-4 mb-6 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                TEACHING STAFF (P.G)
              </div>
              {/* -------------- */}
              {PGstaff.map((element, index) => (
                <div
                  key={index}
                  className="flex justify-center mt-2 ml-14 sm:ml-0 sm:mt-24 "
                >
                  <div className="max-w-3xl">
                    <div className="block p-6 m-4 bg-white rounded-lg shadow-lg sm:m-0">
                      <div className="flex flex-row sm:flex-col gap-x-2">
                        <div className="  -ml-20 sm:-ml-0 bg-[#24346D] shadow-lg flex items-center justify-center rounded-lg w-50 sm:w-fit sm:-mt-20 h-[170px]">
                          <div className="overflow-hidden relative bg-transparent  rounded-lg   h-[170px] w-[160px]">
                            <img
                              src={element.imgUrl}
                              className="object-cover  h-[170px] w-[160px] object-center rounded-lg"
                              alt={element.name}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center ml-6 sm:ml-0">
                          <p className="font-semibold text-xl mb-2 mt-6 text-[#24346D]">
                            {element.name}
                          </p>
                          <p className="mb-6 font-semibold text-gray-500 ">
                            {element.designation}
                          </p>
                          <p className="font-light text-gray-500 sm:mb-6 w-60 sm:w-auto">
                            {element.qualifications}
                          </p>
                        </div>
                        <div className="h-auto w-[2px] bg-primary"></div>
                        <div className="min-w-[270px]">
                          <p className="font-semibold text-[#24346D] mb-0">
                            EXPERIENCE: {element.experience}
                          </p>
                          <br />
                          <p className="mb-0 font-semibold text-primary">
                            Email : {element.email}
                          </p>
                          <p className="mb-0 font-semibold text-primary">
                            Mobile : {element.mobile}
                          </p>
                          <br />
                          <a href={element.imgUrl}>
                            <button
                              type="button"
                              className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out"
                            >
                              View Profile
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-10 sm:ml-4  text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                TEACHING STAFF (U.G)
              </div>
              {/* -------------- */}
              {UGstaff.map((element, index) => (
                <div
                  key={index}
                  className="flex justify-center mt-2 ml-14 sm:ml-0 sm:mt-24 "
                >
                  <div className="max-w-3xl">
                    <div className="block p-6 m-4 bg-white rounded-lg shadow-lg sm:m-0">
                      <div className="flex flex-row sm:flex-col gap-x-2">
                        <div className="  -ml-20 sm:-ml-0 bg-[#24346D] shadow-lg flex items-center justify-center rounded-lg w-50 sm:w-fit sm:-mt-20 h-[170px]">
                          <div className="overflow-hidden relative bg-transparent  rounded-lg   h-[170px] w-[160px]">
                            <img
                              src={element.imgUrl}
                              className="object-cover  h-[170px] w-[160px] object-center rounded-lg"
                              alt={element.name}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center ml-6 sm:ml-0">
                          <p className="font-semibold text-xl mb-2 mt-6 text-[#24346D]">
                            {element.name}
                          </p>
                          <p className="mb-6 font-semibold text-gray-500 ">
                            {element.designation}
                          </p>
                          <p className="font-light text-gray-500 sm:mb-6 w-60 sm:w-auto">
                            {element.qualifications}
                          </p>
                        </div>
                        <div className="h-auto w-[2px] bg-primary"></div>
                        <div className="min-w-[270px]">
                          <p className="font-semibold text-[#24346D] mb-0">
                            EXPERIENCE: {element.experience}
                          </p>
                          <br />
                          <p className="mb-0 font-semibold text-primary">
                            Email : {element.email}
                          </p>
                          <p className="mb-0 font-semibold text-primary">
                            Mobile : {element.mobile}
                          </p>
                          <br />
                          <a href={element.imgUrl}>
                            <button
                              type="button"
                              className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out"
                            >
                              View Profile
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-10 sm:ml-4  text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                NON TEACHING STAFF
              </div>
              {/* -------------- */}
              {NTstaff.map((element) => (
                <div className="flex justify-center mt-2 ml-14 sm:ml-0 sm:mt-24 ">
                  <div className="max-w-3xl">
                    <div className="block p-6 m-4 bg-white rounded-lg shadow-lg sm:m-0">
                      <div className="flex flex-row sm:flex-col gap-x-2">
                        <div className="  -ml-20 sm:-ml-0 bg-[#24346D] shadow-lg flex items-center justify-center rounded-lg w-50 sm:w-fit sm:-mt-20 h-[170px]">
                          <div className="overflow-hidden relative bg-transparent  rounded-lg   h-[170px] w-[160px]">
                            <img
                              src={element.imgUrl}
                              className="object-cover  h-[170px] w-[160px] object-center rounded-lg"
                              alt={element.name}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center ml-6 sm:ml-0">
                          <p className="font-semibold text-xl mb-2 mt-6 text-[#24346D]">
                            {element.name}
                          </p>
                          <p className="mb-6 font-semibold text-gray-500 ">
                            {element.designation}
                          </p>
                          <p className="font-light text-gray-500 sm:mb-6 w-60 sm:w-auto">
                            {element.qualifications}
                          </p>
                        </div>
                        <div className="h-auto w-[2px] bg-primary"></div>
                        <div className="min-w-[270px]">
                          <p className="font-semibold text-[#24346D] mb-0">
                            EXPERIENCE: {element.experience}
                          </p>
                          <br />
                          <p className="mb-0 font-semibold text-primary">
                            Email : {element.email}
                          </p>
                          <p className="mb-0 font-semibold text-primary">
                            Mobile : {element.mobile}
                          </p>
                          <br />
                          <a href={element.imgUrl}>
                            <button
                              type="button"
                              className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out"
                            >
                              View Profile
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* -------------col2--------------- */}
            <div className="flex flex-col justify-start sm:mx-1">
              <QuickLinksCard />{" "}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  let staff = []
  staff = await fetch("http://localhost:5000/api/teachingstaff")
  staff = await staff.json()
  console.log(staff)
  staff = staff.filter(
    (el) => el.department == "Electronics & Telecommunication"
  )

  return {
    props: {
      staff: staff,
    },
    revalidate: 10,
  }
}

export default EntcEngineeringFaculty
