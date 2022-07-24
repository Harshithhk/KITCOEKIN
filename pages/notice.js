import { useEffect } from "react"
import DefaultLayout from "../components/DefaultLayout"
import Admission2122 from "../sections/admissions/postgraduate/Admission2122"
import Footer from "../sections/home-page/Footer"

const AdmissionUndergraduate = () => {
  let notices = [
    {
      title: "Draft Time Table of Makeup Exam., July 2022",
      fileName: "TimeTable-2020.pdf",
      date: "2022-07-20",
    },
    {
      title: "Draft Time Table of Makeup Exam., July 2022",
      fileName: "TimeTable-2020.pdf",
      date: "2022-07-20",
    },
    {
      title: "Draft Time Table of Makeup Exam., July 2022",
      fileName: "TimeTable-2020.pdf",
      date: "2022-07-20",
    },
    {
      title: "Draft Time Table of Makeup Exam., July 2022",
      fileName: "TimeTable-2020.pdf",
      date: "2022-07-20",
    },
    {
      title: "Draft Time Table of Makeup Exam., July 2022",
      fileName: "TimeTable-2020.pdf",
      date: "2022-07-20",
    },
    {
      title: "Draft Time Table of Makeup Exam., July 2022",
      fileName: "TimeTable-2020.pdf",
      date: "2022-07-20",
    },
    {
      title: "Draft Time Table of Makeup Exam., July 2022",
      fileName: "TimeTable-2020.pdf",
      date: "2022-07-20",
    },
  ]

  //   let InstituteCode = [
  //     {
  //       CourseName: {
  //         p1: "M.Tech (Embedded System & Computing)",
  //       },
  //       GeneralChoiceCode: {
  //         Intake: "6",
  //         Code: "626737210",
  //       },
  //       TFWSChoiceCode: {
  //         Intake: "",
  //         Code: "",
  //       },
  //     },
  //     {
  //       CourseName: {
  //         p1: "M.Tech (Mechanical Engineering Design)",
  //         p2: "",
  //       },
  //       GeneralChoiceCode: {
  //         Intake: "6",
  //         Code: "626760410",
  //       },
  //       TFWSChoiceCode: {
  //         Intake: "",
  //         Code: "",
  //       },
  //     },
  //     {
  //       CourseName: {
  //         p1: "M.Tech (Biochemical Engineering & Biotechnology)",
  //         p2: "",
  //       },
  //       GeneralChoiceCode: {
  //         Intake: "6",
  //         Code: "626708110",
  //       },
  //       TFWSChoiceCode: {
  //         Intake: "",
  //         Code: "",
  //       },
  //     },
  //     {
  //       CourseName: {
  //         p1: "M.Tech (Environmental Engineering)",
  //         p2: "",
  //       },
  //       GeneralChoiceCode: {
  //         Intake: "6",
  //         Code: "626720110",
  //       },
  //       TFWSChoiceCode: {
  //         Intake: "",
  //         Code: "",
  //       },
  //     },
  //     {
  //       CourseName: {
  //         p1: "M. Tech (Civil & Structural Engineering)",
  //         p2: "",
  //       },
  //       GeneralChoiceCode: {
  //         Intake: "6",
  //         Code: "626794810",
  //       },
  //       TFWSChoiceCode: {
  //         Intake: "",
  //         Code: "",
  //       },
  //     },
  //     {
  //       CourseName: {
  //         p1: "M.Tech (Computer Science & Engineering (Data Science) )",
  //         p2: "",
  //       },
  //       GeneralChoiceCode: {
  //         Intake: "6",
  //         Code: "626724210",
  //       },
  //       TFWSChoiceCode: {
  //         Intake: "",
  //         Code: "",
  //       },
  //     },
  //   ]

  const getEvents = async () => {
    let res = await axios.get("https://kitcoek.herokuapp.com/api/timetable/")
    console.log(res)
    setNews(res.data)
  }

  //   useEffect(() => {
  //     getEvents()

  //     return () => {}
  //   }, [])

  return (
    <DefaultLayout>
      <div className="w-full bg-[#24346D]">
        <section className="flex flex-col h-[175px] items-center w-full relative">
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
            Notices
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
            <span className="">|</span> Notices
          </h6>
        </section>

        <section className="mt-16 mb-[-60px] overflow-hidden bg-[#F8F7FC] max-w-screen">
          {/* <div className="flex items-center w-full ml-16 sm:ml-4">
            <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
            <div className="ml-3 md:ml-2 w-fit  text-center   text-[#24346D] text-4xl font-bold leading-[54px] text-[35.97px]  md:text-[22px] ">
              INSTITUTE CODE : 6267
            </div>
          </div> */}
          <section className="relative z-30 w-[1500px] mt-2 sm:mt-6 md:w-full pb-20 mx-auto md:mx-0 h-fit px-14 sm:px-4 sm:pb-10  ">
            <div className="grid items-center w-full h-16 grid-cols-2 p-2 px-4 mt-6 mb-6 shadow-lg sm:hidden text-slate-500 sm:h-16 rounded-2xl">
              <div className="text-center ">Notice</div>
              <div className="">
                <div className="grid grid-cols-1 ">
                  <div className="grid items-center grid-rows-2 ">
                    {/* <div className="text-center">File Name</div> */}
                    <div className="grid grid-cols-2 ">
                      <div className="text-center">File Name</div>
                      <div className="text-center">Date</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {notices.map((item, index) => {
              return (
                <>
                  <div
                    className={`hover:shadow-xl hover:bg-slate-200 cursor-pointer grid items-center w-full h-16 grid-cols-2 p-2 px-4 mt-2 ${
                      index % 2 !== 0 ? "bg-white" : "bg-orange-50"
                    } shadow-lg sm:hidden text-slate-500 sm:h-16 rounded-2xl`}
                  >
                    <div className="text-center ">
                      {/* <p className="font-bold text-slate-900">{item.title}</p> */}
                      <p className="font-bold">{item.title}</p>
                    </div>
                    <div className=" text-slate-900">
                      <div className="grid grid-cols-1 ">
                        <div className="grid items-center grid-cols-2 text-center ">
                          <div className="font-bold text-center text-blue-500">
                            {" "}
                            {item.fileName}
                          </div>
                          <div className="text-center">{item.date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items-center w-full p-2 mt-2 overflow-x-auto text-left bg-white divide-y shadow-lg sm:grid 2xl:hidden grid-rows-7 h-fit sm:h-fit rounded-2xl">
                    <div className="grid grid-cols-2">
                      <div className="text-slate-400">Course Name</div>
                      <div className="divide-y">
                        <p className="text-slate-900">{item.title}</p>
                        <p className="text-slate-500">{item.title}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 text-center">
                      <div className=" text-slate-400">General Choice Code</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="text-blue-600 ">Intake</div>
                      <div className="">{item.fileName}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className=" text-slate-400">Code</div>
                      <div className="">{item.date}</div>
                    </div>
                  </div>
                </>
              )
            })}
          </section>
        </section>

        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default AdmissionUndergraduate

// ;<div class="flex flex-col">
//   <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
//     <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
//       <div class="overflow-hidden">
//         <table class="min-w-full">
//           <thead class="bg-white border-b">
//             <tr>
//               <th
//                 scope="col"
//                 class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
//               >
//                 #
//               </th>
//               <th
//                 scope="col"
//                 class="text-sm max-w-[600px] font-medium text-gray-900 px-6 py-4 text-center"
//               >
//                 News
//               </th>
//               <th
//                 scope="col"
//                 class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
//               >
//                 File Name
//               </th>
//               <th
//                 scope="col"
//                 class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
//               >
//                 Date
//               </th>
//               <th
//                 scope="col"
//                 class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
//               >
//                 Action
//               </th>
//             </tr>
//           </thead>
//           {news.length > 0 &&
//             news.map((element, index) => (
//               <tr
//                 key={element._id}
//                 class={`${index % 2 == 0 ? "bg-gray-100" : ""} border-b`}
//               >
//                 <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                   {index}
//                 </td>
//                 <td class="text-sm max-w-[600px] text-gray-900 font-light px-6 py-4">
//                   {element.title}
//                 </td>
//                 <td class="text-sm text-orange-500 font-light px-6 py-4 whitespace-nowrap">
//                   {element.fileName}
//                 </td>
//                 <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                   {element.date}
//                 </td>
//                 <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//                   <button
//                     onClick={() => actionDelete(element._id)}
//                     className="px-3 py-2 text-white bg-slate-600"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//         </table>
//       </div>
//     </div>
//   </div>
// </div>
