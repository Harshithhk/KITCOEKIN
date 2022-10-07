import { forwardRef } from "react";
import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";

export const DivSpinner = () => <div> Loading.. </div> ;

export const DivContainer = forwardRef( ({children} , ref) => (
    <>
    <div ref={ref} className= "fixed top-0 left-0 outline-none " > </div>

    <section className= "flex items-center h-[100vh] relative text-lg uppercase pl-[10%] pr-[10%] pt-[100px] font-neue text-[#ffeded] ">
        {/* <Hero /> */}
    </section>

    <section className= "flex items-center h-[100vh] relative text-lg uppercase pl-[10%] pr-[10%] text-[#ffeded] justify-end ">
        {/* <About /> */}
    </section>
    <section className= "flex items-center h-[100vh] relative text-1g uppercase pl-[10%] pr-[10%] pt-[100px] font-neue text-[#ffeded] ">
        {/* <Skills /> */}
    </section>
    <section className= "Flex items-center h-[100vh] relativa text-lg uppercase pl-[10%] pr-[10%] text-[#ffeded] justify-end">
        Section4
    </section>
    <section className= "Flex items-center h-[100vh] relativa text-lg uppercase pl-[10%] pr-[10%] text-[#ffeded] ">
        Section5
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