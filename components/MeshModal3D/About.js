import React from 'react'
import {
AiOutlineMenu,
AiOutlineClose,
AiOutlineSearch,
AiOutlineMail,
}from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const About = () => {
    return(
        <div className="flex flex-col items-center justify-center 3xl:hidden 2xl:hidden sm:block  text-center bg-[#1e293b] p-4 ">
            <div className="pb-2 text-start font-inter">
                <h2 className='text-3xl font-bold'>AR/VR Technology: Blurring the Lines Between Reality and Imagination</h2>
            </div>
            <p className="p1-10 text-sm text-justify tracking-wider font-inter">
            Augmented Reality (AR) and Virtual Reality (VR) are two rapidly evolving technologies that are transforming the way we interact with the digital world. AR overlays digital content onto the physical world, enhancing our perception of reality, while VR immerses us in a fully simulated environment, transporting us to a different realm altogether. Both AR and VR have numerous applications across industries, from entertainment and gaming to education, healthcare, and beyond. As these technologies continue to evolve, they are poised to revolutionize the way we live, work, and play, offering unprecedented levels of immersion, interactivity, and engagement.



</p>
            <div className="pt-20 hidden">
                <div className="flex items-center justify-between my-3 w-full 2xl:w-[80%] gap-6">
                    <div className="p-4 duration-300 ease-in rounded-full shadow-lg
                    cursor-pointer shadow-gray-400 hover:scale-105">
                        <FaLinkedinIn />
                    </div> 
                    <div className="p-4 duration-300 ease-in rounded-full shadow-lg
                    cursor-pointer shadow-gray-400 hover:scale-105">
                        <FaGithub />
                    </div> 
                    <div className="p-4 duration-300 ease-in rounded-full shadow-lg
                    cursor-pointer shadow-gray-400 hover:scale-105">
                        <AiOutlineMail />
                    </div> 
                    <div className="p-4 duration-300 ease-in rounded-full shadow-lg
                    cursor-pointer shadow-gray-400 hover:scale-105">
                        <BsPersonLinesFill />
                    </div> 
                </div>
            </div>
        </div> 
        )
}
export default About