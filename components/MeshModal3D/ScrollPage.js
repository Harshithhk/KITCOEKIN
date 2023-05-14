import { forwardRef } from "react";
import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";

export const DivSpinner = () => <div> Loading.. </div> ;

export const DivContainer = forwardRef( ({children} , ref) => (
    <>
    <div ref={ref} className= "fixed top-0 left-0 outline-none " > </div>

    <section className= "flex items-center h-[100vh] relative text-lg uppercase pl-[10%] pr-[10%] pt-[100px] font-neue text-[#ffeded] ">
        <Hero />
    </section>

    <section className= "bg-white w-full  rounded-xl  h-fit pb-20  -mt-32  sm:mt-0 ">
        <div className="px-12 sm:px-2">
        <div className="pt-20 sm:pt-6 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                        <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                        New Vision

            </div>
            <div className="flex justify-between sm:flex-col p-2">
                    <div className="flex sm:flex-col flex-row items-center justify-center gap-5">
            <div className="w-full  text-center md:text-left">
                <p className="text-lg sm:text-base  leading-relaxed text-justify">
                The AR/VR lab at the Kolhapur Institute of Technology College of Engineering in Kolhapur is a cutting-edge facility designed to provide students with hands-on experience in the fields of Augmented Reality (AR) and Virtual Reality (VR). The lab is equipped with state-of-the-art hardware and software, including headsets, controllers, sensors, and computers, that enable students to create immersive and interactive environments for various applications.

The lab is designed to support students in exploring the latest developments in AR/VR technology and developing innovative solutions for real-world problems. It provides a platform for students to collaborate, experiment, and innovate with AR/VR technology in diverse fields such as gaming, education, healthcare, and engineering.

Students can participate in various projects and research activities in the lab, including developing AR/VR applications, designing interactive simulations, and creating immersive environments for training and education. The lab also offers workshops, training programs, and seminars to enhance students' skills and knowledge in AR/VR technology.

Overall, the AR/VR lab at the Kolhapur Institute of Technology College of Engineering provides students with a stimulating environment to explore and experiment with the latest developments in AR/VR technology, and prepares them to become competent professionals in this rapidly evolving field.                </p>
            </div>
            <div className="w-full pt-5">
                <img className="mx-auto md:ml-auto rounded-xl" src="images/HomePage/arvr2.jpg"  alt="Placeholder Image" />
            </div>
            </div>

            </div>
        </div>
    </section>

    </>
));

const Loader = () => {
    return(
        <DivContainer>
           <DivSpinner />
        </DivContainer>
    )   
}
export default Loader;