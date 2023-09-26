import React ,{useState} from 'react';

function Overview(props) {

    const [isExpanded, setIsExpanded] = useState(false);

    let kitOverview = "An institute established in May 1983, KIT(Autonomous) reflects the vision of leading industrialists and educationalists. The vast exposure and experience of it’s founders has helped KIT(Autonomous) to establish it’s identity as an Institute of repute in the field of Engineering and Management education. The Institute has been awarded “A” status by Govt. of Maharashtra in recognition of its over all academic excellence and infrastructure. It is affiliated to Shivaji University, Kolhapur and is approved by AICTE, New Delhi.The institute consists of many departments and other facilities."

    return (
        <section className="c0vpr cts0y" data-aos-id-6="">
                <div className="c3myu ca3ts cbq8v">
            
                    <div className="chaba cqi3d c6in0 ce4pe c5q0m cdcqj cn547 c8ukb cu7lf" aria-hidden="true"></div>
            
                    <div className="ca3ts cmc2m cuafn c0sod">
                        <div className="chn6j cbovh">
            
                            <div className="c3myu ca3ts cighh cpvgl c4nun c51lg czaf3 cjy67 cwayg cbum8 co2li">
            
                                <div className="cgl6d c54d1 c4q7x c4zq1 ">
            
                                    <h2 className="cpcm4 c9ob6 text-basic  " data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay="100">KITCoEK <span className="text-primary"><br className='msdh:hidden' />OVERVIEW</span></h2>
                                    <p className="c3czc cnvr3 cnfi1 " data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay="200">{isExpanded ? kitOverview : `${kitOverview.slice(0, 300)}  ... `}<span onClick={()=>{setIsExpanded(!isExpanded)}} className="text-primary hover:cursor-pointer">&nbsp;{isExpanded?"Read less":"Read more"}</span></p>
                                    <ul className="cep2u c4nun czvp3 cnfi1" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay="300">
                                        <li className="cighh c51lg">
                                            <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                            </svg>
                                            <span>Visionary Industrialist's College</span>
                                        </li>
                                        <li className="cighh c51lg">
                                            <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                            </svg>
                                            <span>Industry Integrated Curriculum</span>
                                        </li>
                                        <li className="cighh c51lg">
                                            <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                            </svg>
                                            <span>Great Placement Record And Support</span>
                                        </li>
                                        <li className="cighh c51lg">
                                            <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                            </svg>
                                            <span>Vibrant Campus Life</span>
                                        </li>
                                        <li className="cighh c51lg">
                                            <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                            </svg>
                                            <span>Faculty With Rich Experience</span>
                                        </li>
                                        <li className="cighh c51lg">
                                            <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                            </svg>
                                            <span>State-Of-The-Art Infrastructure</span>
                                        </li>
                                    </ul>
            
                                </div>
            
                                <div className="c0vpr cef1y ctnab c0sqv corfv cwayg" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]">
                                    <div className="c3myu ca3ts ctnab">

                                        <div className="md:hidden cqi3d c6in0 ce4pe ct5pu cnbfc ci3lf c5ve6" aria-hidden="true"></div>

                                        <div className="testimonial-carousel swiper-  ca3ts ctnab cydx6">
                                            <div className="swiper-wrapper ">
                                                <div className="grid grid-cols-7 gap-4  ">
                                                    <div className="col-start-1 col-span-4 ">
                                                        <img className=" max-w-full rounded-lg" src="/images/AboutUs/about2.jpg" alt=""/>
                                                    </div>
                                                    <div className="col-start-5 col-end-8 ">
                                                        <img className="   max-w-full rounded-lg" src="/images/AboutUs/about5.jpg" alt=""/>

                                                    </div>
                                                    <div className="col-start-1 col-end-4">
                                                        <img className=" max-w-full rounded-lg" src="/images/AboutUs/about1.jpg" alt=""/>
                                                        
                                                    </div>
                                                    <div className="col-start-4 col-span-4 ">
                                                        <img className=" max-w-full rounded-lg" src="/images/AboutUs/about7.jpg" alt=""/>
                                                    </div>   
                                                    <div className="col-start-1 col-span-4 ">
                                                        <img className=" max-w-full rounded-lg" src="/images/AboutUs/about8.jpg" alt=""/>
                                                    </div> 
                                                    <div className="col-start-5 col-end-8  items-center  flex hover:cursor-pointer  ">
                                                        <div className="flex  gap-[10px] text-[#3D3859] md:ml-3">
                                                            <div
                                                                data-aos="fade-right"
                                                                data-aos-delay="0"
                                                                className="italic  font-[#3D3859] font-bold underline text-[17.9865px] tracking-[0.005em]"
                                                            >
                                                                To Gallery 
                                                            </div>
                                                            <span data-aos="fade-right" data-aos-delay="0" className="font-bold">
                                                                {">"}
                                                                {">"}
                                                            </span>
                                                        </div>
                                                    </div>                                   
                                                </div>
                                                {/* <div className="swiper-slide cighh c6qtf c4nun cnvz4 c0foo">
                                                    
                                                    <div className="c3myu cighh c3mx4 c4nun cvdk9 cj2as ceh3x c1vv8 c7fb1">
                                                        <img className="cqi3d csu3j cwiq1" src="code/homePage/images/testimonial-sign-01.svg" width="150" height="71" alt="Testiomonial sign 01" />
                                                        <p className="c9ob6 c3mx4 cxvzd cmw79">“ This card is awesome. The app lets me link foreign cards with a new one which makes everything 100 times easier. Like Apple Pay, online shopping without useless phone confirmation. I wish I knew this earlier. ”</p>
                                                        <div className="cxb6y cxvzd cnfi1">
                                                            <span className="cmw79">Elisa Koeppel</span> - <span className="cp4cj">CEO &amp; Co-Founder</span>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>

                                        <div className="co8y9">
                                            <div className="testimonial-carousel-pagination cjy67"></div>
                                        </div>

                                    </div>
                                </div>
            
                            </div>
            
                        </div>
                    </div>
            
                </div>
            </section>
    );
}

export default Overview;