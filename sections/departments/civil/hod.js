import React from "react"

const hod = () => (
  <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-white px-14 sm:px-4 sm:pb-10">
    <div className="flex justify-between md:flex-col">
      <div>
        <div className="pt-8 md:text-2xl text-[#24346D] text-4xl font-bold flex h-fit items-center align-middle">
          <div className="w-2 h-10 mr-4 rounded-md bg-primary"></div>
          HOD'S MESSAGE
        </div>
        <div className="mt-10 md:mt-4 md:w-full md:text-base md:text-left w-[800px] text-xl text-accent text-justify">
        Civil Engineering is one of the basic and core branches of Engineering,
        having a large influence on common man’s living. It emphasizes on the
        technical uplift of the common man and guides common man through application
        of the technical knowledge for the welfare of the society. 
        Think of any technical activity and it is really impossible
         to forget the impact of CIVIL ENGINEERING on it
          <br />
          <br />
          It lets you tread the career path in various fields such as
          Structural Engineering, Irrigation & Water Resource,
          Transportation, Environmental Utilities, Surveying,
          Remote Sensing, Town Planning, Construction Management etc.
          <br />
          <br />
          A Common Individuals Virtual and Indigenous Life technique, no doubt, is the meaning of Civil Engineering.
        </div>
      </div>
      <div className="md:mx-auto w-[300px] h-[360px] bg-[#24346D] mt-28 mr-6 rounded-xl p-3 text-white text-2xl md:text-xl  items-center flex flex-col md:mt-14">
        <div className="overflow-hidden bg-white rounded-xl">
          <img src="/images/Department/mamta-kalas.png" alt="mamtakalas.png" />
        </div>
        <div className="mt-2">DR.Mamata S.Kalash</div>
      </div>
    </div>
  </section>
)

export default hod
