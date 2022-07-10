import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from "swiper"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const Gallaryslider = ({ images, setGallary }) => {
  return (
    <div className="fixed select-none z-50 flex items-center  top-0 left-0 w-screen h-screen bg-slate-800 md:px-0 px-5">
      <div
        onClick={() => setGallary(false)}
        className="z-50 cursor-pointer w-10 h-10 absolute  right-10 top-10"
      >
        <div className="w-full h-1 rotate-45	 bg-white"> </div>
        <div className="w-full h-1 -rotate-45	 bg-white  -translate-y-1"> </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {images.map((img) => (
          <SwiperSlide>
            <img src={img} className="w-[80%]  mx-auto" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Gallaryslider
