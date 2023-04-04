import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import Career from "../sections/alumni/career"
import React from "react"
import dynamic from 'next/dynamic'
import NewsAndNotices from "../sections/alumni/NewsAndNotices"
import Overviews from "../sections/alumni/Overviews"
import AboutUs from "../sections/alumni/AboutUs"
// import OpenStreetMap from '../component/OpenStreetMap'
const OpenStreetMap = dynamic(() => import('../components/Map/OpenStreetMap'), {
  ssr: false,
})
export async function getStaticProps() {
  let news = []
  let notices = []
  // news = await fetch("https://kitcoek.herokuapp.com/api/newsandnotices/news")
  // news = await news.json()
  // notices = await fetch(
  //   "https://kitcoek.herokuapp.com/api/newsandnotices/notices"
  // )
  // notices = await notices.json()

  return {
    props: {
      news: news,
      notices: notices,
    },
    revalidate: 10,
  }
}
const Alumni = (props) => {
  const [modalToggle, setModalToggle] = React.useState("");

  let news = []
  let notices = []
  return (
    <DefaultLayout modalToggle = {modalToggle} setModalToggle = {setModalToggle} >
      <div className="w-full bg-[#24346D]">
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
            Alumni Association
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="0"
            className="w-[75%] text-lg pt-2 sm:text-sm font-bold text-center text-white z-20"
          >
            Kolhapur Institute Of Technology College Of Engineering Kolhapur
          </h1>
        </section>
        
        {/*-------------------------------------------------------------------------------------- CONTENT -------------------------------------------------------------------------------------- */}
        <section className="relative rounded-3xl z-30 w-[95%] mx-auto  h-fit bg-white p-4  ">
        

         
         
            <div className='w-full z-0  h-full'>
     
              <OpenStreetMap />
            </div>
          
           
        
        </section>

     
        <section className="pt-16 sm:pt-1 mt-16 mb-[-60px] overflow-clip bg-[#F8F7FC] max-w-screen">
          <Career setModalToggle = {setModalToggle} />
          <NewsAndNotices  news={news} notices={notices} />
          <Overviews />
        </section>
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default Alumni
