import React,{useState} from 'react';

function ArVr(props) {

    const [isExpanded, setIsExpanded] = useState(false);

    let kitOverview = "The Alumni Association of Kolhapur Institute of Technology College of Engineering welcomes all its proud graduates to the community. Our mission is to build a strong alumni network and provide opportunities for continued professional development and networking. The landing page features a mini gallery of memorable moments from alumni events and activities, inviting alumni to reminisce about their time here. We hope for the continued success of our alumni association with your support and active participation. Stay connected with us for the latest updates and news about our upcoming events and initiatives."


    return (
        <section className="cdxzq " data-aos-id-4="">
                <div className="c3myu ca3ts cbq8v border-2  border-slate-100 rounded-tr-[100px] mb-16">
            
                    <div className="chaba cqi3d c6in0 ce4pe c5q0m crgnl ck7qp cf0jn cu7lf " aria-hidden="true"></div>
                    <div className="chaba cqi3d c6in0 ce4pe c5q0m crgnl cvdk9 cgtx5 cu7lf " aria-hidden="true"></div>
            
                    <div className="ca3ts cmc2m cuafn c0sod">
                        <div className="chn6j cbovh">
            
                            <div className="c3myu ca3ts cighh cpvgl c4nun c51lg cjy67 cwayg cbum8 co2li ">
            
                                <div className="cgl6d c54d1 c4q7x">
            
                                    <h2 className="cpcm4 c9ob6 text-basic" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay="100">We are proud of</h2>
                                    <p className="c3czc cnvr3 cnfi1 msdh:text-justify" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay="200">{isExpanded ? kitOverview : `${kitOverview.slice(0, 300)}  ... `}<span onClick={()=>{setIsExpanded(!isExpanded)}} className="text-primary hover:cursor-pointer">&nbsp;{isExpanded?"Read less":"Read more"}</span></p>

                                    <div className="ct5dn  cm6ll c8z22 md:flex md:items-center md:justify-center md:gap-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay="300">
                                        <div>
                                            <h5 className="cab22 ckq42 text-basic ">Benefits </h5>
                                            <ul className="cep2u c4nun czvp3 cnfi1">
                                                <li className="cighh c51lg">
                                                    <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                        <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                        <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                                    </svg>
                                                    <span>Networking</span>
                                                </li>
                                                <li className="cighh c51lg">
                                                    <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                        <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                        <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                                    </svg>
                                                    <span>Career</span>
                                                </li>
                                                <li className="cighh c51lg">
                                                    <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                        <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                        <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                                    </svg>
                                                    <span>Mentorship</span>
                                                </li>
                                                <li className="cighh c51lg">
                                                    <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                        <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                        <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                                    </svg>
                                                    <span>Community</span>
                                                </li>
                                               
                                                <li className="cighh c51lg">
                                                    <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                        <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                        <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                                    </svg>
                                                    <span>Resources</span>
                                                </li>
                                                <li className="cighh c51lg">
                                                    <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                        <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                        <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                                    </svg>
                                                    <span>Reunion</span>
                                                </li>
                                               
                                            </ul>
                                        </div>
                                        <div className=''>
                                            <h5 className="cab22 ckq42 text-basic ">Opportunities</h5>
                                            <ul className="cep2u c4nun czvp3 cnfi1">
                                            
                                                <li className="cighh c51lg">
                                                    <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                        <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                        <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                                    </svg>
                                                    <span>Volunteer</span>
                                                </li>
                                                <li className="cighh c51lg">
                                                    <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                        <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                        <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                                    </svg>
                                                    <span>Projects</span>
                                                </li>
                                                <li className="cighh c51lg">
                                                    <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                        <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                        <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                                    </svg>
                                                    <span>Events</span>
                                                </li>
                                                <li className="cighh c51lg">
                                                    <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                        <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                        <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                                    </svg>
                                                    <span>Fundraising  </span>
                                                </li>
                                                <li className="cighh c51lg">
                                                    <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                        <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                        <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                                    </svg>
                                                    <span>Collaboration</span>
                                                </li>
                  
                                                <li className="cighh c51lg">
                                                    <svg className="cjzor c4q7x" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                        <circle className="c8cq9" cx="10" cy="10" r="10"></circle>
                                                        <path className="cc4tk" d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                                    </svg>
                                                    <span>Giving Back</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
            
                                    <div className="ca3ts cv5q2 cydx6" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]" data-aos-delay="300">
                                        <div>
                                            <a className="cvk53 cep2u c51lg ceugs clenw czotb ct4ap cmond bg-orange-400  text-white  hover:bg-primary" href="new-vision">
                                                To  Gallary 
                                                <span className="cz2zl ctpj1 c9b1d c8nkc chqbb cnank cv3dq">
                                                    <svg className="ch0s7" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
            
                                </div>
            
                                <div className="cka5y cef1y ctnab c0sqv cvd31 cwayg ">
                                    <div className="c3myu cka8y cemev">
                                        <img src="/images/alumni/gallery/alumniGrid.png" className="c034o cwayg " width="496" height="496"  alt="Features 04" data-aos="fade-up" data-aos-anchor="[data-aos-id-4]"/>

                                    </div>
                                </div>
            
                            </div>
            
                        </div>
                    </div>
                    <div className='bg-white text-white  w-full absolute'>s</div>
                </div>
            </section>
    );
}

export default ArVr;