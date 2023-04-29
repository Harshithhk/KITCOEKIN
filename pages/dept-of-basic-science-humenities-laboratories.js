import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/departments/bsh/career/quickLinksCard"
import Footer from "../sections/home-page/Footer"

const BiotechnologyEngineeringLaboratories = () => {
    let Laboratories = [{
        "SrNo": 1,
        "NameOfTheLaboratory": "Microbiology",
        "Area": 67
    }, {
        "SrNo": 2,
        "NameOfTheLaboratory": "Biochemistry",
        "Area": 67
    }, {
        "SrNo": 3,
        "NameOfTheLaboratory": "Molecular Biology",
        "Area": 66
    }, {
        "SrNo": 4,
        "NameOfTheLaboratory": "Cell Biology",
        "Area": 66
    }, {
        "SrNo": 5,
        "NameOfTheLaboratory": "Bioprocesses",
        "Area": 67
    }, {
        "SrNo": 6,
        "NameOfTheLaboratory": "Research",
        "Area": 67
    }, {
        "SrNo": 7,
        "NameOfTheLaboratory": "Bio reaction Engineering",
        "Area": 67
    }, {
        "SrNo": 8,
        "NameOfTheLaboratory": "Bioinformatics",
        "Area": 66
    }
    ]

    const cards = [
        {
            title: "Physics Lab",
            excerpt: "The physics laboratory is a well-equipped facility that provides students with hands-on experience in experimental physics. It has state-of-the-art equipment for experiments in mechanics, optics, electricity, and magnetism. Students can conduct experiments to test theoretical concepts and gain practical skills.            ",
            date: "",
            author: "Dept Of Basic Sciences & Humanities",
            img: "images/department/bsh/physics-lab.jpg"
        }, {
            title: "Chemistry Lab",
            excerpt: "The chemistry laboratory is equipped with modern instruments and equipment to conduct experiments in analytical, physical, and organic chemistry. Students can perform experiments to gain practical skills in chemical synthesis, analysis, and characterization.",
            date: "",
            author: "Dept Of Basic Sciences & Humanities",
            img: "images/department/bsh/t-dept-of-bsh-kit-kolhapur-new-02.jpg"
        }, {
            title: "CAED Lab",
            excerpt: "The Computer-Aided Engineering Drawing (CAED) lab is a specialized facility that provides students with a hands-on experience in using software for engineering drawing and design. Students can learn to create and manipulate 2D and 3D models of engineering components using computer-aided design (CAD) software.            ",
            date: "",
            author: "Dept Of Basic Sciences & Humanities",
            img: "images/department/bsh/caed-lab-02.jpg"
        }, {
            title: "Digital Language Laboratory",
            excerpt: "The Digital Language Laboratory is a modern facility that provides students with an immersive learning experience in foreign languages. It is equipped with audio and video equipment that enables students to practice speaking, listening, and writing skills in foreign languages. The lab also provides access to language learning software and resources.            ",
            date: "",
            author: "Dept Of Basic Sciences & Humanities",
            img: "images/department/bsh/t-dept-of-bsh-kit-kolhapur-new-05.jpg"
        },
      
    ]

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
                        Basic Sciences & Humanities Laboratories
                    </h1>
                    <br></br>
                    <br></br>
                    <h6
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
                    >
                        <span className="hover:text-primary hover:cursor-pointer"> Home</span> <span className=" ">|</span> Laboratory
                    </h6>
                </section>
                {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}

                <section className="overflow-hidden max-w-auto mx-auto md:mx-0  bg-secondary">



                <div className="grid grid-cols-3  sm:px-0 px-2 sm:flex sm:flex-col pb-20 mt-6">

                <section className="col-start-1  col-end-3 sm:mr-0 sm:ml-0 sm:mt-6 sm:px-4 sm:pb-10  pb-20 mx-10  h-fit   ">
                            <div className="mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                                LIST OF LABORATORIES
                            </div>
                            {/* -------------- */}
                    





                            {cards.map((card) => {
                                return (<>
                                    <div  className="flex sm:flex-col flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">

                                        <div className="h-64 sm:w-auto w-1/2">
                                            <img className="inset-0 h-full w-full object-cover object-center" alt="" src={card.img} />
                                        </div>
                                        <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                                            <h3 className="font-semibold text-lg leading-tight truncate">{card.title}</h3>
                                            <p className="mt-2">
                                                {card.excerpt}
                                            </p>
                                            <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                                                {card.author} &bull; {card.date}
                                            </p>
                                        </div>
                                    </div>
                                </>)
                            })}

                        </section>


                        {/* -------------col2--------------- */}
                        <div className="flex flex-col justify-start sm:mx-1"><QuickLinksCard/>  </div>


                    </div>
                </section>
                <Footer />
            </div>
        </DefaultLayout>
    )
}

export default BiotechnologyEngineeringLaboratories
