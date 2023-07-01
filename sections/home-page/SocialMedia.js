import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import Script from 'next/script'

const SocialMedia = () => {
    const [socialMediaSlide, setSocialMediaSlide] = React.useState(1);

   
   
    
    return (
        <div className='  mt-[75px] sm:mb-[230px] sm:mt-[130px] p-20 sm:p-4'>
            <div className='grid grid-cols-2 sm:grid-cols-1 gap-2'>

                <div className='grid grid-cols-1 gap-6'>
                    <div className='grid grid-cols-3 gap-3 h-[150px] sm:h-[100px]'>
                        <div onClick={()=>{setSocialMediaSlide(0)}} className='bg-secondary rounded-xl flex items-center justify-center shadow-lg'>
                            
                                <div className={`relative transition-all duration-300 cursor-pointer  rounded-xl filter grayscale ${socialMediaSlide == 0 ?"grayscale-0 shadow-2xl":null} hover:grayscale-0`}>
                                    <img src="images/HomePage/sm1.png" alt="Image" className="h-[150px] sm:h-[100px] p-1 transition duration-500 rounded-xl transform hover:-translate-y-1 hover:opacity-75" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500">
                                        <span className="text-black font-extrabold text-lg">
                                            {/* content */}
                                        <div className=' focus:outline-none  rounded-xl bg-white/60 p-1'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-20 w-20 sm:w-14 sm:h-14 text-[#1da1f2]"
                                            fill="currentColor"
                                            
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                        </div>

                                        </span>
                                    </div>
                                </div>
                           
                        </div>
                        <div onClick={()=>{setSocialMediaSlide(1)}} className='bg-secondary rounded-xl flex items-center justify-center shadow-lg'>
                        <div className={`relative transition-all duration-300 cursor-pointer p-1 rounded-xl filter grayscale ${socialMediaSlide == 1 ?"grayscale-0 shadow-2xl":null} hover:grayscale-0`}>
                                    <img src="images/HomePage/sm2.png" alt="Image" className="h-[150px] sm:h-[100px] p-1 transition duration-500  rounded-xl transform hover:-translate-y-1 hover:opacity-75" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500">
                                        <span className="text-black font-extrabold text-lg">
                                            {/* Content Instagram*/}
                                        <div className=' focus:outline-none  rounded-xl bg-white/60 p-1'>
                                        
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-20 w-20 sm:w-14 sm:h-14 text-[#c13584]"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </div>

                                        </span>
                                    </div>
                                </div>
                        </div>
                        <div onClick={()=>{setSocialMediaSlide(2)}} className='bg-secondary rounded-xl flex items-center justify-center shadow-lg'>
                            
                        <div className={`relative transition-all duration-300 cursor-pointer rounded-xl filter grayscale ${socialMediaSlide == 2 ?"grayscale-0 shadow-2xl":null} hover:grayscale-0`}>
                                    <img src="images/HomePage/sm3.png" alt="Image" className="h-[150px] sm:h-[100px] p-1 transition duration-500 rounded-xl transform hover:-translate-y-1 hover:opacity-75" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500">
                                        <span className="text-black font-extrabold text-lg">
                                            {/* content */}
                                        <div className=' focus:outline-none  rounded-xl bg-white/60 p-1'>
                                       
                                        <svg
                                            className="h-20 w-20 sm:w-14 sm:h-14 text-[#0088cc]"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            
                                            >
                                            <path
                                                id="telegram-1"
                                                d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
                                            </svg>
                                        </div>

                                        </span>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className={`${socialMediaSlide == 0 ? "block":"hidden"} overflow-y-scroll  h-[480px] sm:h-[410px] rounded-xl shadow-xl`}>
                    <a  className={`twitter-timeline p-1`} href="https://twitter.com/officialkitcoek?ref_src=twsrc%5Etfw">Tweets by officialkitcoek</a> 
                    <Script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></Script>
                    
                    </div>
                    <div className={`${socialMediaSlide == 1 ? "block":"hidden"} overflow-y-scroll  h-[480px] sm:h-[410px] rounded-xl shadow-xl`}>
                        <Script async src="https://www.instagram.com/embed.js"></Script>
                        <blockquote className="instagram-media w-full" data-instgrm-permalink="https://www.instagram.com/kitcoek.official/" data-instgrm-version="13"></blockquote>
                    </div>
                    <div className={`${socialMediaSlide == 2 ? "block":"hidden"} overflow-y-scroll  h-[480px] sm:h-[410px] rounded-xl shadow-xl`}>
                        <iframe className="sm:p-2 w-full h-full bg-center  bg-no-repeat bg-cover bg-[url('/images/HomePage/tbg.png')]" id="telegram-post-kitcoekofficial-415" src="https://t.me/kitcoekofficial/415?embed=1" scrolling="no"  ></iframe>
                    </div>
                </div>
                {/* ------------ */}
                <style>{`
                `}</style>
                <div className='grid grid-cols-1 gap-2 '>  
                    <div className='bg-secondary shadow-xl p-2 sm:p-1 h-[350px] sm:h-[410px] rounded-xl grayscale hover:grayscale-0'>
                    <iframe className='w-full h-full rounded-xl' src="https://www.youtube.com/embed/VQgO5glYXZ4" title="Kolhapur Institute of Technology’s College of Engineering (Autonomous) Kolhapur" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-1 gap-2 h-[300px] sm:h-[100px]'>
                        <div className='bg-secondary  shadow-xl p-2 sm:p-1  rounded-xl grayscale hover:grayscale-0'>
                        <iframe className='w-full h-full rounded-xl' src="https://www.youtube.com/embed/NygCbGFRE3M" title="Kolhapur | ना IIT, ना &#39;मोठी&#39; डीग्री, कोल्हापूरच्या अमृताला तब्बल 41 लाखांचं पॅकेज!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className='bg-secondary  shadow-xl p-2 sm:p-1  rounded-xl grayscale hover:grayscale-0'>
                            <iframe className='w-full h-full rounded-xl' src="https://www.youtube.com/embed/33jCUX_oiIk" title="Smart India Hackathon 2022 #KIT_Kolhapur" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default SocialMedia;