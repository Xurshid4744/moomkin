import React from "react";
import TeamCard from "../../../../components/Cards/TeamCard/TeamCard";

import avatar1 from "../../../../assets/images/abdulaziz.jpg";
import avatar2 from "../../../../assets/images/risqiddin.jpg";
import avatar3 from "../../../../assets/images/umar.JPG";
import avatar4 from "../../../../assets/images/bobur.jpg";
import avatar5 from "../../../../assets/images/hamza.png";

import styles from "./index.module.scss";
import Title from "../../../../components/Title/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
const Team = () => {
  const obj = [
    {
      img: avatar1,
      first_name: "Abdulaziz",
      last_name: "Xamidov",
      position: "Project Manager",
    },
    {
      img: avatar2,
      first_name: "Risqiddin",
      last_name: "Rustamov",
      position: "Software engineer",
    },
    {
      img: avatar3,
      first_name: "Umar",
      last_name: "Juraev",
      position: "Software engineer",
    },
    {
      img: avatar4,
      first_name: "Boburjon",
      last_name: "Anvarjonov",
      position: "CTO / Product manager",
    },
  ];
  const obj2 = [
    {
      img: avatar5,
      first_name: "Hamza",
      last_name: "Foziljonov",
      position: "CEO",
    },
  ];
  return (
    <section className={`${styles.container} globalContainer`} id="team">
      <Title title={"Management Team"} />
      <div className={styles.cards}>
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
            <div className={styles.swiper}>
              {obj.map((item) => (
                <TeamCard
                  img={item.img}
                  first_name={item.first_name}
                  last_name={item.last_name}
                  position={item.position}
                  key={item.first_name}
                />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiper}>
              {obj2.map((item) => (
                <TeamCard
                  img={item.img}
                  first_name={item.first_name}
                  last_name={item.last_name}
                  position={item.position}
                  key={item.first_name}
                />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
