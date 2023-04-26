import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

// let news = [
//   {
//     title: "Fy to Final-Year Btech 2021-2020 May",
//     fileName: "Fy-FinalYear.pdf",
//     date: "09/07/2022",
//   },
//   {
//     title: "Mtech FY Schedule",
//     fileName: "Mtech-FY.pdf",
//     date: "19/03/2022",
//   },
//   {
//     title: "Fy to Final-Year Btech 2021-2020 May",
//     fileName: "Fy-FinalYear.pdf",
//     date: "09/07/2022",
//   },
//   {
//     title: "Mtech FY Schedule",
//     fileName: "Mtech-FY.pdf",
//     date: "19/03/2022",
//   },
//   ,
//   {
//     title: "Fy to Final-Year Btech 2021-2020 May",
//     fileName: "Fy-FinalYear.pdf",
//     date: "09/07/2022",
//   },
//   {
//     title: "Mtech FY Schedule",
//     fileName: "Mtech-FY.pdf",
//     date: "19/03/2022",
//   },
//   {
//     title: "Fy to Final-Year Btech 2021-2020 May",
//     fileName: "Fy-FinalYear.pdf",
//     date: "09/07/2022",
//   },
//   {
//     title: "Mtech FY Schedule",
//     fileName: "Mtech-FY.pdf",
//     date: "19/03/2022",
//   },
// ]

const FounderTrustees = ({ news }) => {
  console.log(news)
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
            Exam Time Table
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
                Exam Cell
              </span>{" "}
            </a>
            <span className="">|</span> Exam Time Table
          </h6>
        </section>
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-[#F8F7FC] px-14 sm:px-4 sm:pb-10">
          {/* <div className="z-10  absolute w-full top-0 left-0 h-full bg-center  bg-no-repeat bg-cover bg-[url('/images/About/FounderTrustees/KITBG.jpeg')]  opacity-10"></div> */}
          {/* <div className="pt-28 sm:pt-20 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
            <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
            Exam Time Table
          </div> */}

          <div className="mt-8 w-[80%] text-[#24346D] sm:mt-4 mx-auto text-center text-xl sm:text-sm ">
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            laudantium perspiciatis at dolore earum provident fugit aperiam
            repellat dolorem, recusandae esse, ratione expedita illum autem iste
            sed tempora quaerat eum? */}
          </div>

          <div className="flex flex-col ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm w-[50px] font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="text-sm max-w-[600px]  text-left font-medium text-gray-900 px-6 py-4"
                        >
                          Notice
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                        >
                          File Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-left text-gray-900 "
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-8 py-4 text-sm font-medium text-left text-gray-900 "
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    {news.length > 0 &&
                      news.map((element, index) => (
                        <tr
                          key={element._id}
                          className={`hover:bg-slate-200 ${
                            index % 2 == 0 ? "bg-gray-100" : ""
                          } border-b`}
                        >
                          <td className="px-6 py-4 text-sm font-medium text-center text-gray-900 whitespace-nowrap">
                            {index}
                          </td>
                          <td className="text-sm  max-w-[600px] text-gray-900 font-light px-6 py-4">
                            {element.title}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-orange-500 whitespace-nowrap">
                            {element.fileName}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {element.date}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            <a href={element.fileUrl}>
                              <button className="px-3 py-2 text-white bg-slate-600">
                                Download
                              </button>
                            </a>
                          </td>
                        </tr>
                      ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  let news = []
  news = await fetch("http://localhost:5000/api/timetable/")
  news = await news.json()

  return {
    props: {
      news: news,
    },
    revalidate: 10,
  }
}

export default FounderTrustees
