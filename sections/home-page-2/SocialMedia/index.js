import React from 'react';
import Script from 'next/script'
import { useEffect, useState } from "react"
import Modal from '../../../components/Modal';

function SocialMedia(props) {
    const [active, setActive] = useState(3)
    const youtubeVideos = [
       {
        title:"Kolhapur Institute of Technology’s College of Engineering (Autonomous) Kolhapur",
        videoIframe:<iframe className='w-full h-[400px] rounded-xl' src="https://www.youtube.com/embed/VQgO5glYXZ4" title="Kolhapur Institute of Technology’s College of Engineering (Autonomous) Kolhapur" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        ,
       },
       {
        title:"Kolhapur | ना IIT, ना &#39;मोठी&#39; डीग्री, कोल्हापूरच्या अमृताला तब्बल 41 लाखांचं पॅकेज!",
        videoIframe:<iframe className='w-full h-[400px] rounded-xl' src="https://www.youtube.com/embed/NygCbGFRE3M" title="Kolhapur | ना IIT, ना &#39;मोठी&#39; डीग्री, कोल्हापूरच्या अमृताला तब्बल 41 लाखांचं पॅकेज!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        ,
       },
       {
        title:"Smart India Hackathon 2022 #KIT_Kolhapur",
        videoIframe:<iframe className='w-full h-[400px] rounded-xl' src="https://www.youtube.com/embed/33jCUX_oiIk" title="Smart India Hackathon 2022 #KIT_Kolhapur" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        ,
       },
        
      ];
    return (
        <section className="mt-20">
                <div className="c3myu ca3ts cbq8v">
            
                    <div className="chaba cqi3d c6in0 ce4pe c5q0m cdcqj ck7qp cf0jn cu7lf" aria-hidden="true"></div>
                    <div className="chaba cqi3d c6in0 ce4pe c5q0m cdcqj cvdk9 cgtx5 cu7lf" aria-hidden="true"></div>
            
                    <div className="ca3ts cmc2m cuafn c0sod">
                        <div className="chn6j cbovh">
            
                            <div className="c3myu ca3ts cpvgl cjy67 cwayg co2li">
            
                                <div className="ctaq8 cgmwa cjtgt" data-aos="fade-up">
                                    <h2 className="cpcm4 c9ob6 text-basic ">Stay Social with Your College</h2>
                                    <p className="ct5dn cnvr3 cnfi1 ">Keep up with campus life, events, and news. Follow us on social media to stay connected with your college community!</p>
                                </div>
                                <div className="md:-mt-7" >
                
                                    <section className="">
                                        <div className="flex  mx-auto flex-row md:flex-col">
                                            <div className="flex flex-col items-center justify-start px-6 py-8 space-y-6  rounded-sm p-12 w-2/5  text-gray-900 md:w-full md:space-y-0">
                                                <div className="flex space-x-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                                    </svg>
                                                    <div className="space-y-2">
                                                        <p className="text-lg font-medium leadi md:float-left">Handles</p>
                                                        <p className="leadi md:float-left">Select a handle to view contents.<br/><br/></p>
                                                    </div>
                                                </div>
                                                <div className='md:flex md:flex-row md:gap-4'>
                                                    <div
                                                        onClick={() => setActive(0)}
                                                        style={{ background: active == 0 ? "#3D3859" : "" }}
                                                        className="bg-[#3D3859] group relative cursor-pointer flex w-[300px] md:w-fit md:h-fit h-[90px] bg-gradient-to-r from-[#7D7D7D]  to-[#BEBEBE]  rounded-xl ml-auto md:mr-auto p-4 mt-3 overflow-hidden"
                                                    >
                                                        <div
                                                            className={`absolute top-0 left-0 w-full md:hidden h-full text text-[60px] text-white font-bold opacity-5 flex  items-center p-7 
                                                            ${
                                                                active == 0 && "opacity-0"
                                                            }`}
                                                        >
                                                            Instagram
                                                        </div>
                                                        <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-14 md:h-5 w-5 text-white group-hover:rotate-12"
                                                                fill="currentColor"
                                                                
                                                                viewBox="0 0 24 24">
                                                                <path
                                                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                        </svg>
                                                        <div className="flex flex-col items-center ml-12 font-bold md:hidden text-white">
                                                            <div className="text-3xl  w-fit md:text-4xl">
                                                            Instagram
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    <div
                                                        onClick={() => setActive(1)}
                                                        style={{ background: active == 1 || active == 3 ? "#3D3859" : "" }}
                                                        className="bg-[#3D3859] group relative cursor-pointer flex w-[300px] md:w-fit md:h-fit h-[90px] bg-gradient-to-r from-[#7D7D7D]  to-[#BEBEBE]  rounded-xl ml-auto md:mr-auto p-4 mt-3 overflow-hidden"
                                                    >
                                                        <div
                                                            className={`absolute   top-0 left-0 w-full md:hidden h-full text text-[60px] text-white font-bold opacity-5 flex  items-center p-7 
                                                            ${
                                                                active == 1  && "opacity-0"
                                                            }`}
                                                        >
                                                            Telegram
                                                        </div>
                                                        <svg
                                                            className="h-14 md:h-5 w-5 text-white group-hover:rotate-12"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                            id="telegram-1"
                                                            d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
                                                        </svg>
                                                        
                                                        
                                                        <div className="flex flex-col items-center ml-12 font-bold md:hidden text-white">
                                                            <div className="text-3xl  w-fit md:text-4xl">
                                                            Telegram
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    <div
                                                        onClick={() => setActive(2)}
                                                        style={{ background: active == 2 ? "#3D3859" : "" }}
                                                        className="bg-[#3D3859] group relative cursor-pointer flex w-[300px] md:w-fit md:h-fit h-[90px] bg-gradient-to-r from-[#7D7D7D]  to-[#BEBEBE]  rounded-xl ml-auto md:mr-auto p-4 mt-3 overflow-hidden"
                                                    >
                                                        <div
                                                            className={`absolute top-0 left-0 w-full md:hidden h-full text text-[60px] text-white font-bold opacity-5 flex  items-center p-7 
                                                            ${
                                                                active == 2 && "opacity-0"
                                                            }`}
                                                        >
                                                            Twitter
                                                        </div>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-14 md:h-5 w-5 text-white group-hover:rotate-12"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24">
                                                            <path
                                                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                                        </svg>
                                                        <div className="flex flex-col items-center ml-12 font-bold md:hidden text-white">
                                                            <div className="text-3xl  w-fit md:text-4xl">
                                                            Twitter
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-3/5 md:w-full  ">
                                               
                                                <div className={`${active == 0 ? "flex":"hidden"} items-center justify-center  p-4 md:p-0 lg:p-12 overflow-y-scroll md:overflow-y-hidden border-2 border-slate-300 mt-6 md:mt-0 h-[600px] sm:h-[410px] rounded-xl `}>
                                                    <Script async src="https://www.instagram.com/embed.js"></Script>
                                                    <blockquote className="instagram-media w-full" data-instgrm-permalink="https://www.instagram.com/kitcoek.official/" data-instgrm-version="13"></blockquote>
                                                </div>
                                                <div className={`${active == 1 ? "flex":"hidden"} items-center justify-center  p-4 md:p-2 lg:p-12 overflow-y-scroll border-2 border-slate-300 mt-6 md:mt-0 h-[600px] sm:h-[410px] rounded-xl `}>
                                                    {/* <img src="https://source.unsplash.com/640x480/" alt="" className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96" /> */}
                                                    <iframe className="sm:p-2 w-full h-full bg-center  bg-no-repeat bg-cover bg-[url('/images/HomePage/tbg.png')]" id="telegram-post-kitcoekofficial-415" src="https://t.me/kitcoekofficial/415?embed=1" scrolling="no"  ></iframe>
                                                </div>
                                                <div className={`${active == 2 ? "block":"hidden"} items-center justify-center  p-4 md:p-2 lg:p-12 overflow-y-scroll border-2 border-slate-300 mt-6 md:mt-0  h-[600px] sm:h-[410px] rounded-xl `}>
                                                    {/* <img src="https://source.unsplash.com/640x480/" alt="" className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96" /> */}
                                                    <a  className={`twitter-timeline p-1`} href="https://twitter.com/officialkitcoek?ref_src=twsrc%5Etfw">Tweets by officialkitcoek</a> 
                                                    <Script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></Script>
                                                </div>
                                                <div className={`${active == 3 ? "block":"hidden"} bg-right  bg-no-repeat bg-cover bg-[url('/images/HomePage/socialcover.png')] items-center justify-center  p-4 md:p-2 lg:p-12 overflow-y-scroll border-2 border-slate-300 mt-6 md:mt-0  h-[600px] sm:h-[410px] rounded-xl `}>
                                                    {/* <img src="images/HomePage/socialcover.png" alt=""  /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="p-6 bg-white text-gray-100">
                                        <div className="  mx-auto">
                                            <div className="grid gap-6 my-16 md:my-8 grid-cols-3 md:grid-cols-1">
                                                {/* <iframe className='w-full h-full rounded-xl' src="https://www.youtube.com/embed/VQgO5glYXZ4" title="Kolhapur Institute of Technology’s College of Engineering (Autonomous) Kolhapur" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                <iframe className='w-full h-full rounded-xl' src="https://www.youtube.com/embed/NygCbGFRE3M" title="Kolhapur | ना IIT, ना &#39;मोठी&#39; डीग्री, कोल्हापूरच्या अमृताला तब्बल 41 लाखांचं पॅकेज!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                <iframe className='w-full h-full rounded-xl' src="https://www.youtube.com/embed/33jCUX_oiIk" title="Smart India Hackathon 2022 #KIT_Kolhapur" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                                                <Modal title={youtubeVideos[0].title} body={youtubeVideos[0].videoIframe} ><img src='images/HomePage/youtube1.png' alt='' className='hover:cursor-pointer'/></Modal>
                                                <Modal title={youtubeVideos[1].title} body={youtubeVideos[1].videoIframe} ><img src='images/HomePage/youtube2.png' alt='' className='hover:cursor-pointer'/></Modal>
                                                <Modal title={youtubeVideos[2].title} body={youtubeVideos[2].videoIframe} ><img src='images/HomePage/youtube3.png' alt='' className='hover:cursor-pointer'/></Modal>

                                            </div>
                                        </div>
                                    </section>
                                
                                    
                                
                                </div>
                                
            
                            </div>
            
                        </div>
                    </div>
            
                </div>
            </section>
    );
}

export default SocialMedia;