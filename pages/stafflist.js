import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"

const Milestones = () => {
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
        <section className="overflow-x-scroll max-w-screen">
          <section className="relative z-30 w-[1500px] pb-20 mx-auto h-fit px-14 sm:px-4 sm:pb-10  ">
            {/* <div className="z-10  absolute w-full top-0 left-0 h-full bg-center  bg-no-repeat bg-cover bg-[url('/images/FounderTrustees/KITBG.jpeg')]  opacity-5"></div> */}

            <div className="flex items-center w-full h-16 p-2 mt-6 font-semibold text-center rounded-lg shadow-lg ">
              <div className=" w-[5%] text-left pl-2">Sr.No.</div>
              <div className=" w-[20%] text-left pl-2">Name of the Faculty</div>
              <div className=" w-[10%] text-left pl-2">Course</div>
              <div className=" w-[10%] text-left pl-2">Designation</div>
              <div className=" w-[10%] text-left pl-2">Date of Joining</div>
              <div className=" w-[25%] text-left pl-2">Qualification</div>
              <div className=" w-[13.5%] text-left pl-2">
                Nature of Apointment
              </div>
              <div className=" w-[6.5%] text-left pl-2">Experience</div>
            </div>

            <div className="flex items-center w-full h-16 p-2 mt-6 text-center shadow-lg rounded-2xl bg-blue-50">
              <div className=" w-[5%] text-left pl-2">1</div>
              <div className=" w-[20%] text-left pl-2">
                Mr Renke Amar Laxman
              </div>
              <div className=" w-[10%] text-left pl-2">Director</div>
              <div className=" w-[10%] text-left pl-2">Director</div>
              <div className=" w-[10%] text-left pl-2">02/02/2014 </div>
              <div className=" w-[25%] text-left pl-2">
                BE (Electrical) , ME (Electronics) Ph.D BE (Electrical) , ME
                (Electronics) Ph.D
              </div>
              <div className=" w-[15%] text-left pl-2">Regular</div>
              <div className=" w-[5%] text-left pl-2">34</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-slate-100">
              <div className=" w-[5%] text-left pl-2">2</div>
              <div className=" w-[20%] text-left pl-2">
                Mr Renke Amar Laxman
              </div>
              <div className=" w-[10%] text-left pl-2">Director</div>
              <div className=" w-[10%] text-left pl-2">Director</div>
              <div className=" w-[10%] text-left pl-2">02/02/2014 </div>
              <div className=" w-[25%] text-left pl-2">
                BE (Electrical) , ME (Electronics) Ph.D
              </div>
              <div className=" w-[15%] text-left pl-2">Regular</div>
              <div className=" w-[5%] text-left pl-2">34</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-blue-50">
              <div className=" w-[5%] text-left pl-2">3</div>
              <div className=" w-[20%] text-left pl-2">
                Mr Renke Amar Laxman
              </div>
              <div className=" w-[10%] text-left pl-2">Director</div>
              <div className=" w-[10%] text-left pl-2">Director</div>
              <div className=" w-[10%] text-left pl-2">02/02/2014 </div>
              <div className=" w-[25%] text-left pl-2">
                BE (Electrical) , ME (Electronics) Ph.D
              </div>
              <div className=" w-[15%] text-left pl-2">Regular</div>
              <div className=" w-[5%] text-left pl-2">34</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-slate-100">
              <div className=" w-[5%] text-left pl-2">4</div>
              <div className=" w-[20%] text-left pl-2">
                Mr Renke Amar Laxman
              </div>
              <div className=" w-[10%] text-left pl-2">Director</div>
              <div className=" w-[10%] text-left pl-2">Director</div>
              <div className=" w-[10%] text-left pl-2">02/02/2014 </div>
              <div className=" w-[25%] text-left pl-2">
                BE (Electrical) , ME (Electronics) Ph.D
              </div>
              <div className=" w-[15%] text-left pl-2">Regular</div>
              <div className=" w-[5%] text-left pl-2">34</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-blue-50">
              <div className=" w-[5%] text-left pl-2">5</div>
              <div className=" w-[20%] text-left pl-2">
                Mr Renke Amar Laxman
              </div>
              <div className=" w-[10%] text-left pl-2">Director</div>
              <div className=" w-[10%] text-left pl-2">Director</div>
              <div className=" w-[10%] text-left pl-2">02/02/2014 </div>
              <div className=" w-[25%] text-left pl-2">
                BE (Electrical) , ME (Electronics) Ph.D
              </div>
              <div className=" w-[15%] text-left pl-2">Regular</div>
              <div className=" w-[5%] text-left pl-2">34</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-slate-100">
              <div className=" w-[5%] text-left pl-2">6</div>
              <div className=" w-[20%] text-left pl-2">
                Mr Renke Amar Laxman
              </div>
              <div className=" w-[10%] text-left pl-2">Director</div>
              <div className=" w-[10%] text-left pl-2">Director</div>
              <div className=" w-[10%] text-left pl-2">02/02/2014 </div>
              <div className=" w-[25%] text-left pl-2">
                BE (Electrical) , ME (Electronics) Ph.D
              </div>
              <div className=" w-[15%] text-left pl-2">Regular</div>
              <div className=" w-[5%] text-left pl-2">34</div>
            </div>
            <div className="flex items-center w-full h-16 p-2 mt-2 text-center shadow-lg rounded-2xl bg-blue-50">
              <div className=" w-[5%] text-left pl-2">7</div>
              <div className=" w-[20%] text-left pl-2">
                MR RENKE AMAR LAXMAN
              </div>
              <div className=" w-[10%] text-left pl-2">Director</div>
              <div className=" w-[10%] text-left pl-2">Director</div>
              <div className=" w-[10%] text-left pl-2">02/02/2014 </div>
              <div className=" w-[25%] text-left pl-2">
                BE (Electrical) , ME (Electronics) Ph.D
              </div>
              <div className=" w-[15%] text-left pl-2">Regular</div>
              <div className=" w-[5%] text-left pl-2">34</div>
            </div>
          </section>
        </section>

        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default Milestones
