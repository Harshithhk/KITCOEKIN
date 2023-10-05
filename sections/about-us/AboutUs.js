import React from "react"

const AboutUs = () => {
  return (
    <section className="my-[120px] mx-auto   cbq8v sm:w-[90%] md:my-8">
      {/* HEADING */}
      <div className="flex items-center w-full">
        <div className=" h-[46px] w-[6.75px] bg-[#F07C00] md:h-7 md:w-1 rounded-lg"></div>
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          className="ml-3 md:ml-2 w-fit italic font-[800] text-center  text-[#3D3859] leading-[54px] text-[35.97px]  md:text-[22px]"
        >
          ABOUT US
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex w-full">
        <p className="w-full sm:w-full text-justify mt-8 sm:mt-4 h-fit text-xl sm:text-base text-[#24346D] ">
          Premier Institute in engineering & Technology established in 1983 by
          group of visionary industrialist, professionals and educationalists.
          The vast exposure and experience of its founders has helped Kolhapur
          institute of Technology’s College of Engineering Kolhapur to establish
          its identity as an Institute of repute in the field of Engineering and
          Management education. The first among the self-financed engineering
          college in Maharashtra.Premier Institute in engineering & Technology
          established in 1983 by group of visionary industrialist, professionals
          and educationalists. The vast exposure and experience of its founders
          has helped Kolhapur institute of Technology’s College of Engineering
          Kolhapur to establish its identity as an Institute of repute in the
          field of Engineering and Management education. The first among the
          self-financed engineering college in Maharashtra. <br /> <br />
          The Institute has been awarded “A Grade Status with CGPA 3.12” by The
          National Assessment and Accreditation Council (NAAC), Bengaluru.
          Institute has successfully received accreditation for six departments
          (Civil Engineering, Computer Science & Engineering, Environmental
          Engineering, Electronics Engineering, Mechanical Engineering, and
          Production Engineering) by National Board of Accreditation (NBA), New
          Delhi, which is Govt. body for accreditation of programs in
          institutes. The Institute has also received Permanent Affiliation by
          Shivaji University Kolhapur and has received Autonomous status. We are
          committed to students and stakeholders for best results and following
          it successfully produced more than 15000 engineers getting campus
          placements and becoming entrepreneurs becoming one of the most
          prominent and successful Institute for Engineering Education in
          western Maharashtra.
        </p>
      </div>
    </section>
  )
}

export default AboutUs
