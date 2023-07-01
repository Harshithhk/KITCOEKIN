import Hero1 from "./heroSection/Hero1"
import Hero2 from "./heroSection/Hero2"
import Hero3 from "./heroSection/Hero3"
import Hero4 from "./heroSection/Hero4"
import Hero1A from "./heroSection/Hero1A"
import Hero5 from "./heroSection/Hero5"

import React from "react"

const HeroSectionUpdated = () => {
  const [count, setCount] = React.useState(0)

  // React.useEffect(() => {
  //   setTimeout(()=>{
  //     if(count == 3){
  //       setCount(0)
  //     }else{
  //       setCount(count + 1)
  //     }
  //   },8000)
  // }, [count])

  // React.useEffect(() => {
  //  console.log(count)
  // }, [count])

  return (
    <section className=" h-[621px] md:h-[calc(100vh-88px)] w-full overflow-hidden  relative mb-4  md:mb-0 md:overflow-hidden">
      {count == 0 ? (
        <>
          {/* <div className="sm:hidden xxl:block">
            <Hero1A setCount={setCount} />
          </div> */}
          <div className="sm:block xxl:block">
            <Hero1 setCount={setCount} />
          </div>
        </>
      ) : count == 1 ? (
        <Hero2 setCount={setCount} />
      ) : count == 2 ? (
        <Hero3 setCount={setCount} />
      ) : count == 3 ? (
        <Hero4 setCount={setCount} />
      ) : count == 4 ? (
        <Hero5 setCount={setCount} />
      ) : null}
    </section>
  )
}

export default HeroSectionUpdated
