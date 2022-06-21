import React from "react"

const hod = () => (
  <section className="relative rounded-3xl z-30 w-[95%] mx-auto pb-20 h-fit bg-white px-14 sm:px-4 sm:pb-10">
    <img
      className="absolute -top-28 w-[205px] h-[170px]"
      src="/images/TnP/indicator.png"
      alt=""
    />
    <div className="flex justify-between">
      <div>
        <div className="pt-28 text-[#24346D] text-4xl font-bold flex h-fit items-center align-middle">
          <div className="w-2 h-10 mr-4 rounded-md bg-primary"></div>
          HOD'S MESSAGE
        </div>
        <div className="mt-10 w-[800px] text-xl text-accent">
          This era of globalization has opened enormous opportunities for young
          and talented budding engineers in all the walks of life. As a result,
          the expectations from the young engineers are that they should mould
          themselves seamlessly in to the global corporate culture. The T&P
          department provides ample opportunities for placements and
          entrepreneurship by organizing seminars, workshops and training
          <br />
          <br />
          programs for enhancing the personality traits and facilitates the
          transition of our students from academics to corporate life. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ullam aspernatur
          culpa, a praesentium totam hic. Atque omnis qui neque hic, repellat
          vero perferendis nam inventore. Unde veritatis qui rem maiores. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Vel saepe dicta
          blanditiis modi! Aliquam minima perferendis dolore sequi facere
          blanditiis?
        </div>
      </div>
      <div className="w-[300px] h-[360px] bg-[#24346D] mt-28 mr-6 rounded-xl p-3 text-white text-2xl items-center flex flex-col">
        <div className="overflow-hidden bg-white rounded-xl">
          <img src="/images/Department/mamta-kalas.png" alt="amitsarkar.png" />
        </div>
        <div className="mt-2">DR. Amit Sarkar</div>
      </div>
    </div>
  </section>
)

export default hod
