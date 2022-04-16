import Head from "next/head"
import DefaultLayout from "../components/DefaultLayout"
import HeroSection from "../sections/home-page/HeroSection"
import NewVision from "../sections/home-page/NewVision"
import Footer from "../sections/home-page/Footer"
import Overveiw from "../sections/home-page/Overveiw"
import Accredations from "../sections/home-page/Accredations"
import NewsAndNotices from "../sections/home-page/NewsAndNotices"
import EsteemedRecruiters from "../sections/home-page/EsteemedRecruiters"
const Home = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>KITCOEK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <NewVision />
      <Accredations />
      <NewsAndNotices />
      <EsteemedRecruiters />
      <Overveiw />
      <Footer />
    </DefaultLayout>
  )
}

export default Home
