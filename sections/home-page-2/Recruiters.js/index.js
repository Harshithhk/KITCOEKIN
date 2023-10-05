import React from 'react';

function Recruiters(props) {

    let recruiters =  [

        "bg-[url('/images/recruiters/recruiters-01.png')]",
        "bg-[url('/images/recruiters/recruiters-02.png')]",
        "bg-[url('/images/recruiters/recruiters-03.png')]",
        "bg-[url('/images/recruiters/recruiters-04.png')]",
        "bg-[url('/images/recruiters/recruiters-05.png')]",
        "bg-[url('/images/recruiters/recruiters-06.png')]",
        "bg-[url('/images/recruiters/recruiters-07.png')]",
        "bg-[url('/images/recruiters/recruiters-08.png')]",
        "bg-[url('/images/recruiters/recruiters-09.png')]",
        "bg-[url('/images/recruiters/recruiters-10.png')]",
        "bg-[url('/images/recruiters/recruiters-11.png')]",
        "bg-[url('/images/recruiters/recruiters-12.png')]",
        "bg-[url('/images/recruiters/recruiters-13.png')]",
        "bg-[url('/images/recruiters/recruiters-14.png')]",
        "bg-[url('/images/recruiters/recruiters-15.png')]",
        "bg-[url('/images/recruiters/recruiters-16.png')]",
        "bg-[url('/images/recruiters/recruiters-17.png')]",
        "bg-[url('/images/recruiters/recruiters-18.png')]",
      ]

    return (
        <section className="c0vpr cts0y" data-aos-id-6="">
                <div className="c3myu ca3ts cbq8v">
            
                    <div className="chaba cqi3d c6in0 ce4pe c5q0m crgnl cn547 c8ukb bg-secondary md:mb-10  cu7lf " aria-hidden="true"></div>
            
                    <div className="ca3ts cmc2m    ">
                    <div className="chn6j cbovh  cuafn">

                                <div className="ctaq8 cgmwa cjtgt md:text-center" data-aos="fade-up">
                                    <h2 className="cpcm4 c9ob6 text-basic ">Esteemed Recruiters</h2>
                                    <p className="ct5dn cnvr3 cnfi1"> Gain insight into the exciting career prospects available to you and discover the reputable employers who highly regard and seek out our accomplished graduates</p>
                                </div>
                        </div>
                        <div className="chn6j cbovh -mt-44 md:-mt-24 pb-24  bg-[url('/images/TnP/csm_worldmap_5832344b9b.png')]  bg-center bg-no-repeat ">
            
                            <div className="c3myu ca3ts cpvgl cjy67  cwayg co2li ">
            
                                
                                <div className="grid grid-cols-6  gap-6 md:grid-cols-2 md:gap-0">
                                    {recruiters.map((element,index) => (
                                            <div 
                                                key={index}
                                                // data-aos="zoom-in"
                                                // data-aos-delay="0"
                                                className={`cursor-pointer place-self-center invert-[30%] hover:shadow-2xl hover:w-[190px] md:hover:w-[145px] rounded-[22px] h-[130px] w-[185px] bg-center  bg-no-repeat bg-cover ${element} shadow-sm md:w-[145px] md:h-[105px]`}
                                            ></div>
                                    ))}
                                </div>
                                
            
                            </div>
            
                        </div>
                    </div>
            
                </div>
            </section>
    );
}

export default Recruiters;