import Head from "next/head"
import DefaultLayout from "../components/DefaultLayout"
import HeroSection from "../sections/home-page/HeroSection"
import NewVision from "../sections/home-page/NewVision"
import Footer from "../sections/home-page/Footer"
import Accredations from "../sections/home-page/Accredations"
import NewsAndNotices from "../sections/home-page/NewsAndNotices"
import EsteemedRecruiters from "../sections/home-page/EsteemedRecruiters"
import BtechHonours from "../sections/home-page/BtechHonours"
import Statistics from "../sections/home-page/Statistics"

import Overviews from "../sections/home-page/Overviews"
import Milestones from "./milestones"

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import HeroSectionUpdated from "../sections/home-page/HeroSectionUpdated"
import StatisticsNew from "../sections/home-page/StatisticsNew"
import Testimonials from "../sections/about-us/Testimonials"
export async function getStaticProps() {
  let news = []
  let notices = []
  //let news = await fetch('https://kitcoek-server.herokuapp.com/api/newsandnotices/news')
  // let news = await fetch("http://localhost:5000/api/newsandnotices/news")
  // news = await news.json()

  // // let notices = await fetch('https://kitcoek-server.herokuapp.com/api/newsandnotices/notices')
  // let notices = await fetch("http://localhost:5000/api/newsandnotices/notices")
  // notices = await notices.json()

  return {
    props: {
      news: news,
      notices: notices,
    },
  }
}

const Home = (props) => {
  useEffect(() => {
    Aos.init({ duration: 500, delay: 20 })
  }, [])

  return (
    <DefaultLayout>
      <Head>
        <title>KITCOEK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSectionUpdated />
      {/* <HeroSection /> */}
      <BtechHonours />
      <NewVision />
      <Accredations />
      <NewsAndNotices news={props.news} notices={props.notices} />
      <Overviews />
      <div className="h-36 mt-20 flex gap-[150px] justify-center items-center">
        <a href="apply-admission" className="relative px-10  py-5 font-medium text-white group">
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-violet-500 group-hover:bg-violet-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-violet-700 group-hover:bg-violet-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-violet-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-violet-400 -rotate-12"></span>
          <span className="relative">Admission Enquery</span>
        </a>
        <a href="apply-admission" className="relative px-10  py-5 font-medium text-white group">
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-violet-500 group-hover:bg-violet-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-violet-700 group-hover:bg-violet-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-violet-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-violet-400 -rotate-12"></span>
          <span className="relative">Download Broucher </span>
        </a>
        <a href="#_" className="relative px-10  py-5 font-medium text-white group">
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-violet-500 group-hover:bg-violet-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-violet-700 group-hover:bg-violet-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-violet-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-violet-400 -rotate-12"></span>
          <span className="relative">DTE Code : 6267</span>
        </a>
      </div>
      <StatisticsNew />
      <EsteemedRecruiters />
      <Testimonials />
      <Footer />
    </DefaultLayout>
  )
}

export default Home
