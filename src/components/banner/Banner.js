import React from 'react'
import "./Banner.css"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Banner() {
  return (
    <div className='container banner'>
             <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/ru/PkQ0qUIvcBWqpPhvMu8tlQw4kdT8DCbC5sGm7xQ2Zs9hF0UZ0vwbpeuARVwk." alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/oz/Z7xfAwhWDG65l9JpHqiDYiaHEiziIjVU3iEfmrIp2XpNMjrzvD5a4ZeDDZKT.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://olcha.uz/image/original/sliders/oz/Ne0z0REj1L6F4SOzKmLNZD8V50ivQ5WwGaeZmnbucfITBU0O1bp3cs2cRRYs." alt="" /></SwiperSlide>

      </Swiper>
      
    </div>
  )
}

export default Banner