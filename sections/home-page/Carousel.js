// import "tw-elements"
import { allowedStatusCodes } from "next/dist/lib/load-custom-routes";
import React,{ useState,useEffect } from "react"

const images = [
  "/images/HomePage/carousel.png",
  "/images/HomePage/carousel.png",
  "/images/HomePage/carousel.png",
]



const Carousel = () => {
  
  const [translate, setTranslate] = useState(0)
  const [active,setActive] = useState(0)
  const [leftLimit, setLeftLimit] = useState(0)
  const [rightLimit, setRightLimit] = useState(0)
  let leftCount = 0;


  useEffect(() => {
    if(images.length %2 === 0){
      setLeftLimit (-1 *((images.length /2)-1))
      setRightLimit(images.length/2) 
      console.log(leftLimit,rightLimit)
    }else{
      setLeftLimit(-1 *(parseInt(images.length/2)))
      setRightLimit((parseInt(images.length/2)))
    }
  }, [])
  

  const handleTranslate=(i)=>{
 console.log(i)
 if((active + (-1*i)) >= leftLimit && (active + (-1*i)) <= rightLimit ){
   setActive(active + (-1*i))
   setTranslate(translate+(i*1013))
 }else{
   setActive(i=== 1 ? rightLimit : leftLimit)
   setTranslate((rightLimit * 1013 *(-1*i)))
 }
    
  }

  return (
    <section className="object-cover w-full mt-8 overflow-hidden h-fit mb-9 ">
      <div className="mx-auto h-[561px] w-[997px] flex relative lg:w-full lg:h-fit">
      <div className="cursor-pointer z-10 h-[31px] w-[31px] top-1/2 -translate-y-1/2 lg:left-[32px] sm:left-[15px] -left-[72px] absolute bg-slate-300 bg  bg-center bg-no-repeat bg-[url('/images/HomePage/arrow-left.svg')] rounded-full"
      onClick={()=>handleTranslate(1)}
      ></div>
      <div className="cursor-pointer z-10 h-[31px] w-[31px] top-1/2 -translate-y-1/2 lg:right-[32px] sm:right-[15px]  -right-[72px] absolute bg-slate-300 bg  bg-center bg-no-repeat bg-[url('/images/HomePage/arrow-right.svg')] rounded-full"
      onClick={()=>handleTranslate(-1)}
      ></div>

      <button className="absolute z-10 w-20 h-8 text-sm bg-white rounded-lg cursor-pointer bottom-8 right-12 sm:w-18 sm:h-8 sm:right-4 sm:bottom-4">Show all</button>

<div className="w-fit "
style={{transform:`translate(${translate}px)`, transition:"all", transitionDuration:"0.5s"}}
>
        {images.map((img, index) => {
          if (index === 0) {
            return (
              <img
             
                data-aos="zoom-in"
                data-aos-delay="20"
                src={img}
                className={`w-full h-full rounded-lg`}
                
                alt=""
                srcset=""
              />
            )
          } else {
            let left = 0;
            if(index %2 === 0){
              leftCount ++
               left = `-${leftCount*1013}px`
            }else{
               left = `${(index-leftCount)*1013}px`
            }
            
            return (
              <img
                data-aos="zoom-in"
                data-aos-delay="20"
                src={img}
                className={`absolute w-full h-full rounded-lg`}
                style={{top:"0px",left:`${left}`}}
                alt=""
                srcset=""
              />
            )
          }
        })}
        </div>
      </div>
    </section>
  )
}

export default Carousel
