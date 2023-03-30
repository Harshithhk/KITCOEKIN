import React from "react"

const AboutUs = () => {
  return (
    <section className="mt-16 mx-auto  w-[1407px] sm:w-[90%] sm:mt-8">
      {/* HEADING */}
      <div className="flex items-center w-full">
        <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          className="ml-3 md:ml-2 w-fit italic font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]"
        >
          Alumni Association
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex w-full">
        <p className="w-full sm:w-full text-justify mt-8 sm:mt-4 h-fit text-xl sm:text-base text-[#24346D] font-semibold">
        Welcome to the About Us page of the Alumni Association of Kolhapur Institute of Technology College of Engineering. We are a community of proud graduates of this esteemed institution, committed to building a strong alumni network and fostering lifelong connections among our members.

Our association's objectives are to provide opportunities for continued professional development and networking, to support the academic and research activities of the college, and to give back to the community through various social and cultural initiatives.

We strive to create a platform for our alumni to connect with each other and with the college, to share their knowledge and expertise, and to contribute to the development of the institution and the society at large.

We encourage all our alumni to become active members of our association, to participate in our events and initiatives, and to stay connected with us through our various communication channels. Together, we can continue to make a positive impact on the world and uphold the legacy of our alma mater.
        
        </p>
      </div>
    </section>
  )
}

export default AboutUs
