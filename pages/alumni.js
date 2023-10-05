import DefaultLayout from "../components/DefaultLayout"
import Footer from "../sections/home-page/Footer"
import Career from "../sections/alumni/career"
import React from "react"
import dynamic from 'next/dynamic'
import Activity from "../sections/alumni/NewsAndNotices"
import Overviews from "../sections/alumni/Overviews"
import AboutUs from "../sections/alumni/AboutUs"
import {checkTokenExpiration,isUserSignedIn} from "../utils/auth"
import FAQ from "../sections/alumni/FAQ"
import ActivityList from "../sections/alumni/ActivityList"
// import OpenStreetMap from '../component/OpenStreetMap'
const OpenStreetMap = dynamic(() => import('../components/Map/OpenStreetMap'), {
  ssr: false,
})

export async function getStaticProps() {
  let AlumniList = []
  AlumniList = await fetch(
      `${process.env.SERVER_API}/api/alumni/`
  )
  let activities = []
  activities = await fetch(
    process.env.SERVER_API+"/api/alumni/activity"
  )
  activities = await activities.json()
  AlumniList = await AlumniList.json()

  return {
    props: {
      AlumniList: AlumniList,
      activities: activities,
    },
    revalidate: 10,
  }
}

const Alumni = (props) => {
  const [modalToggle, setModalToggle] = React.useState("");



  const [test, setTest] = React.useState(0);

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
            onClick={()=>{setTest(!test)}}
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
     
              <OpenStreetMap AlumniList = {props.AlumniList} />
            </div>
          
           
        
        </section>

     
        <section className="pt-16 sm:pt-1 mt-16 mb-[-110px] md:mb-[-190px] md:pb-20 overflow-clip bg-white max-w-screen">
          <Career setModalToggle = {setModalToggle} />
          {/* <Activity  activities={props.activities} /> */}
          <ActivityList activities={props.activities} />
          <Overviews />
          <FAQ />
        </section>
        <Footer />
      </div>
    </DefaultLayout>
  )
}

export default Alumni
