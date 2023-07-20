import Head from "next/head"
import DefaultLayout from "../components/DefaultLayout"
import HeroSection from "../sections/home-page/HeroSection"
import NewVision from "../sections/home-page/NewVision"
import Footer from "../sections/home-page/Footer"
import Accredations from "../sections/home-page/Accredations"
import NewsAndEvents from "../sections/home-page/NewsAndEvents"
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
import TestimonialSlide from "../sections/home-page/TestimonialsSlide"
import SocialMedia from "../sections/home-page/SocialMedia"
import TestimonialSlider from "../components/TestimonialsSlider"
import VideoSection from "../sections/home-page/videoSection"
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
    Aos.init({ duration: 500, delay: 20 })
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
      <HeroSectionUpdated />
      {/* <HeroSection /> */}
      <VideoSection />
      <BtechHonours />
      <NewVision />
      <Accredations />
      <NewsAndEvents news={props.news} events={props.events} />
      <Overviews />
      <div className="container my-24 sm:my-16 px-6  mx-auto">
        <section className="mb-32 sm:pb-0 pb-20 text-primary text-center 2xl:text-left sm:text-center">
          <div className="flex flex-wrap justify-center relative">
            <div className="grow-0 shrink-0 basis-auto w-full 2xl:w-10/12 sm:w-fit px-3">
              <div className="grid 2xl:grid-cols-2 sm:grid-cols-1 gap-x-6 items-center">
                <div className="mb-10 2xl:mb-0 sm:mb-4">
                  <h2 className="text-3xl sm:text-xl font-bold text-primary">
                    Do not miss any updates.
                    <br />
                    <span className="text-[#484267]">
                      Subscribe to the newsletter
                    </span>
                  </h2>
                </div>

                <div className="mb-6 2xl:mb-0">
                  <div className="2xl:flex flex-row sm:flex-col justify-center items-center">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 sm:py-1 mb-2 2xl:mb-0 2xl:mr-2 sm:mb-5 text-xl  sm:text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#484267] focus:outline-none"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 sm:py-2 w-1/2  bg-[#484267] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#484267] hover:shadow-lg focus:bg-[#484267] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#484267] active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className="w-[800px] bg-slate-200 mt-20 sm:mt-12 h-[1px]"></hr>

            <div className="absolute -bottom-12 gap-12 flex">
              <a href="apply-admission">
                {" "}
                <div className="hover:cursor-pointer flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                    />
                  </svg>
                  <span className="text-[#484267] sm:hidden hover:text-primary">
                    Admission Enquery
                  </span>
                </div>
              </a>
              <a href="documents/home/KIT College -Brochure-Aug-2022.pdf">
                <div className="hover:cursor-pointer flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  <span className="text-[#484267] sm:hidden hover:text-primary">
                    Broucher
                  </span>
                </div>
              </a>

              <div className="hover:cursor-pointer flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
                  />
                </svg>
                <span className="text-[#484267] sm:hidden hover:text-primary">
                  DTE Code
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <StatisticsNew />
      <EsteemedRecruiters />
      <SocialMedia />

     <TestimonialSlider testimonials = { testimonials} />
      {/* <Testimonial>
        <Testimonial.DataCard name="Murlidhar " position="wipro technology (cloud architect)" year="2007"  department="Computer Science And Engineering"  videoIframe={<iframe className="w-[600px] h-[350px] sm:w-fit "  src="https://www.youtube.com/embed/6L2T1G_QDWQ" title="OUR STUDENT OUR PRIDE | KIT&#39;S College of Engineering (Autonomous)|MURLIDHAR PARULEKAR" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>} />
        <Testimonial.DataCard name="Chetan" position="Marine Engineers" year="2008"  department="Mechanical Engineering"  videoIframe={<iframe className="w-[600px] h-[350px] sm:w-fit "  src="https://www.youtube.com/embed/6GpqIypfb78?list=PLfQ03Dbp3JnNZ5c7-Jt0YkD2zcWQ3E1GJ" title="OUR STUDENT OUR PRIDE | KIT&#39;s College of Engineering (Autonomous) | Chetan Mirajkar" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>} />

        <Testimonial.DataCard name="Shivani" position="software developer (KPIT)" year="2016"  department="Electronic and Telecomm Engineering"  videoIframe={<iframe className="w-[600px] h-[350px] sm:w-fit "  src="https://www.youtube.com/embed/Eof29x_3uqk?list=PLfQ03Dbp3JnNZ5c7-Jt0YkD2zcWQ3E1GJ" title="OUR STUDENT OUR PRIDE | KIT&#39;S College of Engineering (Autonomous)| Miss. Shivani Chougule" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>} />

      </Testimonial> */}
      <Footer />
    </DefaultLayout>
  )
}

export default Home
