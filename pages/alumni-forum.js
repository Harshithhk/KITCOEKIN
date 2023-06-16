import DefaultLayout from "../components/DefaultLayout"
import QuickLinksCard from "../sections/alumni/career/quickLinksCard"
import Forum from "../sections/alumni/forum"
import Footer from "../sections/home-page/Footer"
import React from "react"
const CseEngineeringMous = () => {
    const [modalToggle, setModalToggle] = React.useState("");
    const [readMore, setReadMore] = React.useState("");
    const [ForumList, setForumList] = React.useState([]);
    const [forumTopic, setForumTopic] = React.useState([]);

    

    React.useEffect(() => {
        fetch( `${process.env.SERVER_API}/api/alumni/forum`)
        .then(result => result.json())
        .then(forumData => {
          console.log(forumData)
         setForumList(forumData)
         setForumTopic(forumData)
         })
      }, []);
    

    return (
        <DefaultLayout modalToggle = {modalToggle} setModalToggle = {setModalToggle} >
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
                        Alumni Forum
                    </h1>
                    <br></br>
                    <br></br>
                    <h6
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        className="w-[75%] sm:text-sm font-bold text-center text-white z-20"
                    >
                      <a href="alumni">
            <span className="hover:text-primary hover:cursor-pointer">
              {" "}
              
              Alumni Home
            </span>{" "}</a> <span className=" ">|</span> Alumni Forum

                    </h6>
                </section>
                {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}

                <section className="overflow-hidden max-w-auto mx-auto md:mx-0  bg-secondary">



                <div className="grid grid-cols-3  sm:px-0 px-2 sm:flex sm:flex-col pb-20 mt-6">

                <section className="col-start-1  col-end-3 sm:mr-0 sm:ml-0 sm:mt-6 sm:px-4 sm:pb-10  pb-20 mx-10  h-fit   ">
                            <div className=" justify-between mt-6 sm:mt-0 sm:ml-4 mb-9 text-[#24346D] text-4xl sm:text-2xl font-bold flex h-fit items-center align-middle">
                                <div className="flex items-center">
                                <div className="w-2 h-10 mr-4 rounded-md sm:h-6 bg-primary sm:mr-2 sm:w-[4px] "></div>
                              FORUM TOPICS
                                </div>
                              <svg onClick={()=>{setReadMore("")}} className={` ${readMore?"visible":"invisible"} w-6 h-6 hover:cursor-pointer hover:text-primary`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                                <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clipRule="evenodd" />
                              </svg>

                            </div>
                            {/* -------------- */}

                            
                       
                           <Forum ForumList = {ForumList}  readMore = {readMore} setReadMore ={setReadMore} setForumList ={setForumList} forumTopic ={forumTopic}/>
                         
                        </section>


                        {/* -------------col2--------------- */}
                        <div className="flex flex-col justify-start sm:mx-1"><QuickLinksCard setModalToggle = {setModalToggle} />  </div>


                    </div>
                </section>
                <Footer />
            </div>
        </DefaultLayout>
    )
}

export default CseEngineeringMous
