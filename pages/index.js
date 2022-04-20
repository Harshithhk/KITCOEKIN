import Head from "next/head"
import DefaultLayout from "../components/DefaultLayout"
import HeroSection from "../sections/home-page/HeroSection"
import NewVision from "../sections/home-page/NewVision"
import Footer from "../sections/home-page/Footer"
import Overveiw from "../sections/home-page/Overveiw"
import Accredations from "../sections/home-page/Accredations"
import NewsAndNotices from "../sections/home-page/NewsAndNotices"
import EsteemedRecruiters from "../sections/home-page/EsteemedRecruiters"
import BtechHonours from "../sections/home-page/BtechHonours"
import Statistics from "../sections/home-page/Statistics"
import Testimonials from "../sections/home-page/Testimonials"
import Carousel from "../sections/home-page/Carousel"

import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 500, delay: 20 })
  }, [])

  return (
    <DefaultLayout>
      <Head>
        <title>KITCOEK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      {/* <HeroSection /> */}
      <BtechHonours />
      <NewVision />
      <Accredations />
      <NewsAndNotices />
      <Overveiw />
      <Statistics />
      <EsteemedRecruiters />
      {/* <Testimonials /> */}
      <Footer />
    </DefaultLayout>
  )
}

export default Home
