import React,{useState,useEffect} from "react"
import Head from "next/head"
import DefaultLayout from "../components/DefaultLayout"
import Aos from "aos"
import "aos/dist/aos.css"
import Footer from "../sections/home-page-2/Footer"
import HeroSectionUpdated from "../sections/home-page/HeroSectionUpdated"
import HeroSection from "../sections/home-page-2/heroSection"
import Script from 'next/script'
import NewsAndEvents from "../sections/home-page-2/NewsAndEvent"
import Image from "next/image"
import SocialMedia from "../sections/home-page-2/SocialMedia"
import TestimonialSlider from "../components/TestimonialsSlider"
import ARIIA from "../sections/home-page-2/ARIIA"
import AlumniAssociation from "../sections/home-page-2/AlumniAssociation"
import ArVr from "../sections/home-page-2/ArVr"
import Statistics from "../sections/home-page-2/Statistics"
import Overview from "../sections/home-page-2/Overview"
import Recruiters from "../sections/home-page-2/Recruiters.js"
import Accredations from "../sections/home-page-2/Accredations"


export async function getStaticProps() {
    let news = []
    let events = []
    news = await fetch(
      process.env.SERVER_API+"/api/newsandevents/news"
    )
    news = await news.json()
    events = await fetch(
      process.env.SERVER_API+"/api/newsandevents/events"
    )
    events = await events.json()
  
    return {
      props: {
        news: news,
        events: events,
      },
      revalidate: 10,
    }
  }

const Home = (props) => {

    
    useEffect(() => {
  
      let zoomLevelValue = (99 - ((1500 - window.outerWidth * 100)/1500)) 
  
      Aos.init({ duration: 500, delay: 20 , offset: zoomLevelValue < 90 && zoomLevelValue > 70 ? -300:zoomLevelValue<60?-1000:null})
  
    }, [])

    
      const testimonials = [
        {
          name:"Murlidhar ",
          position:"wipro technology (cloud architect)",
          year:"2007",
          department:"Computer Science And Engineering",
          videoIframe:<iframe className="w-[600px] h-[350px] sm:w-fit "  src="https://www.youtube.com/embed/6L2T1G_QDWQ" title="OUR STUDENT OUR PRIDE | KIT&#39;S College of Engineering (Autonomous)|MURLIDHAR PARULEKAR" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        },
        {
          name:"Chetan ",
          position:"Marine Engineer",
          year:"2008",
          department:"Mechanical Engineering",
          videoIframe:<iframe className="w-[600px] h-[350px] sm:w-fit "  src="https://www.youtube.com/embed/6GpqIypfb78?list=PLfQ03Dbp3JnNZ5c7-Jt0YkD2zcWQ3E1GJ" title="OUR STUDENT OUR PRIDE | KIT&#39;s College of Engineering (Autonomous) | Chetan Mirajkar" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        },
        {
          name:"Shivani ",
          position:"software developer (KPIT)",
          year:"2016",
          department:"Electronic and Telecomm Engineering",
          videoIframe:<iframe className="w-[600px] h-[350px] sm:w-fit "  src="https://www.youtube.com/embed/Eof29x_3uqk?list=PLfQ03Dbp3JnNZ5c7-Jt0YkD2zcWQ3E1GJ" title="OUR STUDENT OUR PRIDE | KIT&#39;S College of Engineering (Autonomous)| Miss. Shivani Chougule" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        }
      ]

    return (
        <DefaultLayout>
            
            <HeroSection />

            {/* ------------------------- */}

            <ARIIA />

            {/* -------------below is not mobile responsive------------ */}

            <Accredations />

            {/* ------------------------- */}

            <AlumniAssociation />
            
            {/* ------------------------- */}

            <ArVr />

            {/* ------------------------- */}
            
            <Statistics />
            

            {/* ------------------------- */}

            <NewsAndEvents news={props.news} events={props.events} />
            

            {/* --------------------------- */}

            <Overview />
           
            {/* --------------------------- */}

            <Recruiters />

            {/* --------------------------- */}

            <SocialMedia />
            
            <TestimonialSlider testimonials = { testimonials} />

            <Footer />

        </DefaultLayout>    
        )

}

export default Home
