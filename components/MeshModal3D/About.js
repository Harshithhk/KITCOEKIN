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
        <div className="flex flex-col items-center justify-center text-center bg-[#1e293b] p-4 ml-[200px]">
            <div className="pb-2 text-center font-inter">
                <h2 className='text-4xl font-bold'>Title</h2>
            </div>
            <p className="p1-10 text-xl tracking-wider font-inter">
                text texttexttexttext texttext texttext text text text text text texttexttexttext texttext texttext text text text text
                text texttexttexttext texttext texttext text text text texttext texttexttexttext texttext texttext text text text text
                text texttexttexttext texttext texttext text text text texttext texttexttexttext texttext texttext text text text text
                text texttexttexttext texttext texttext text text text texttext texttexttexttext texttext texttext text text text text
            </p>
            <div className="pt-20">
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