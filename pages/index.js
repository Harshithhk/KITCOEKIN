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
import Testimonials from "../sections/home-page/Testimonials"
import Overviews from "../sections/home-page/Overviews"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"





export async function getStaticProps() {
  let news = await fetch('https://kitcoek-server.herokuapp.com/api/newsandnotices/news')
  news = await news.json()
  
  let notices = await fetch('https://kitcoek-server.herokuapp.com/api/newsandnotices/notices')
  notices = await notices.json()


  return{
    props: {
      news:news,
      notices:notices
    }
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
      <HeroSection />
      <BtechHonours />
      <NewVision />
      <Accredations />
      <NewsAndNotices news={props.news} notices={props.notices}/>
      <Overviews />
      <Statistics />
      <EsteemedRecruiters />
      {/* <Testimonials /> */}
      <Footer />
    </DefaultLayout>
  )
}

export default Home
