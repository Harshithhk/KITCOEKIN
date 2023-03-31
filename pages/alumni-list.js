import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/alumni/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"
import {useState, useEffect} from "react";

const CseEngineeringMous = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        const getAlumni = async () => {
            const apiRoute = `${process.env.NEXT_PUBLIC_API_ROOT}/alumni/`;
            const alumniResponse = await fetch(apiRoute);
            const alumniJson  = await alumniResponse.json();
            setData(alumniJson)
        }
        getAlumni();
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
                        Alumni List
                    </h1>
                    <br></br>
                    <br></br>
                    <h6
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
                    >
                    <a href="alumni">
            <span className="hover:text-primary hover:cursor-pointer">
              {" "}
              
              Alumni Home
            </span>{" "}</a> <span className=" ">|</span> Alumni List

                    </h6>
                </section>
                {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
                <div className="flex flex-col ">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full py-2 ">
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
                          className="text-sm w-[50px] font-medium text-gray-900 px-6 py-4 text-center"
                        />
                        <th
                          scope="col"
                          className="text-sm max-w-[600px]  text-left font-medium text-gray-900 px-6 py-4"
                        >
                          PRN Number
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-left text-gray-900"
                        >
                          Alumni Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-left text-gray-900 "
                        >
                          Department
                        </th>
                        <th
                          scope="col"
                          className="px-8 py-4 text-sm font-medium text-left text-gray-900 "
                        >
                          City
                        </th>
                      </tr>
                    </thead>
                    {data.length > 0 &&
                      data.map((element, index) => (
                        <tr
                          key={element._id}
                          className={`hover:bg-slate-200 ${
                            index % 2 == 0 ? "bg-gray-100" : ""
                          } border-b`}
                        >
                          <td className="px-6 py-4 text-sm font-medium text-center text-gray-900 whitespace-nowrap">
                            {index+ 1}
                          </td>
                          <td className="text-sm h-[100px] min-w-[100px] font-medium text-center text-gray-900">
                           {element.image ? <img src={element.image} alt={element.firstName} className="h-[80px] w-[80px] object-cover rounded-full"/> : null}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-orange-500 whitespace-nowrap">
                            {element.prn}
                          </td>
                          <td className="text-sm  max-w-[600px] text-gray-900 font-light px-6 py-4">
                            {element.firstName}{element.lastName ? ` ${element.lastName}` : ""}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-orange-500 whitespace-nowrap">
                            {element.department || "NA"}
                          </td>
                          <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                            {element.city}
                          </td>
                         
                        </tr>
                      ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
                <Footer />
            </div>
        </DefaultLayout>
    )
}

export default CseEngineeringMous
