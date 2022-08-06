import { useState } from "react"

const stepper = () => {
  let steps = [1, 2, 3, 4, 5]

  let totalWidth = steps.length * 100
  let barWidth = totalWidth - steps.length * 30
  let halfActive = 30 + barWidth / ((steps.length - 1) * 2)
  const [index, setIndex] = useState(0)
  const [activeWidth, setActiveWidth] = useState(
    30 + barWidth / ((steps.length - 1) * 2)
  )

  const calculateWidth = (i) => {
    console.log(i)
    if (i !== steps.length - 1) {
      setActiveWidth(i * (30 + barWidth / (steps.length - 1)) + halfActive)
    } else {
      setActiveWidth(i * (30 + barWidth / (steps.length - 1)))
    }
  }

  // #664DE5
  return (
    <section className="flex justify-center h-screen items-center">
      <div className={`w-[${totalWidth}px] h-fit  relative  `}>
        <div
          style={{
            width: activeWidth,
          }}
          className={`absolute customtransition -translate-y-1/2 left-0  bg-[#664DE5]  h-[2px] top-1/2 transition-all`}
        ></div>
        <div className="absolute -translate-y-1/2 left-0  w-full bg-slate-500/5  h-[2px] top-1/2 transition-all"></div>
        <div className="flex w-full relative   bg-red h-fit justify-between">
          {steps.map((step, i) => (
            <div
              onClick={() => {
                calculateWidth(i)
                setIndex(i)
              }}
              className={`h-[30px] w-[30px] rounded-full ${
                i <= index ? " bg-[#664DE5] text-white" : "bg-white text-black"
              } flex  transition-all justify-center items-center border-[1px] border-slate-100`}
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default stepper
