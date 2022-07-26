import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./index.module.scss";
import Title from "../../Title/Title";

const SmallSwiper = ({ obj,bg }) => {
  const obj1 = [{ img: obj.img1 }, { img: obj.img2 }, { img: obj.img3 }];
  const obj2 = [{ img: obj.img4 }, { img: obj.img5 }, { img: obj.img6 }];
  const obj3 = [
    { img: obj.img1 },
    { img: obj.img2 },
    { img: obj.img3 },
    { img: obj.img4 },
    { img: obj.img5 },
    { img: obj.img6 },
  ];
  return (
    <section className={styles.container} style={{backgroundColor: bg}}>
      <div className={`${styles.wrapper} globalContainer`}>
        <Title title={obj.title} />
        <Swiper
          style={{
            "--swiper-navigation-color": "gray",
          }}
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className={styles.images} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              {obj1.map((item) => (
                <img src={item.img} alt="img" />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.images} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              {obj2.map((item) => (
                <img src={item.img} alt="img" />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={`${styles.wrapperLast} globalContainer`}>
        <Title title={obj.title} />
        <Swiper
          style={{
            "--swiper-navigation-color": "gray",
          }}
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation
          scrollbar={{ draggable: true }}
        >
          <div className={styles.imagess}>
            {obj3.map((item) => (
              <SwiperSlide style={{ textAlign: "center", paddingTop: "50px" }}>
                <img src={item.img} alt="img" width={250} height={250} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default SmallSwiper;
