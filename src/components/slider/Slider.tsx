import axios from "axios";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";

function Slider() {

  interface SliderData {
    image: string;
    description?: string; 
}

    const [Sliders , setSliders] = useState<SliderData[]>([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/sliders")
        .then((result)=>{
            setSliders(result.data)
        })
    } , [])
  return (
    <div className="max-w-5xl w-full mx-auto h-100 px-4 mb-20 font-bold">
        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{delay:2500}}
        modules={[Autoplay]}
        className="w-full h-full rounded-2xl overflow-hidden">
          {
            Sliders.map((slider  ,index)=>(
              <SwiperSlide key={index}  className="w-full h-full">
                <div className="flex w-full h-full items-center">
                <div className="flex-1 h-full">
                <img src={slider.image} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="flex-1 p-8 z-10">
                <p className=" text-blue-900 text-2xl drop-shadow-lg duration-1000">{slider.description}</p>
                </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      
    </div>
  )
}

export default Slider;
