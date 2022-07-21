import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./index.module.scss"

const TinySwiper = ({data}) => {
  return (
    <div className={styles.swiper}>
        <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.name}>
                <img src={item.img} alt={item.name} />
              </SwiperSlide>
            ))}
          </Swiper>
    </div>
  )
}

export default TinySwiper