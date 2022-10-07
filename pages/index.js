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
  news = await fetch("https://kitcoek.herokuapp.com/api/newsandnotices/news")
  news = await news.json()
  notices = await fetch(
    "https://kitcoek.herokuapp.com/api/newsandnotices/notices"
  )
  notices = await notices.json()

  return {
    props: {
      news: news,
      notices: notices,
    },
    revalidate: 10,
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
      <StatisticsNew />
      <EsteemedRecruiters />
      <Testimonials />
      <Footer />
    </DefaultLayout>
  )
}

export default Home
