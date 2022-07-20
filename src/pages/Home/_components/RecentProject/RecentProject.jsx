import React from "react";
import SmallSwiper from "../../../../components/Swipers/SmallSwiper/SmallSwiper";

import img1 from "../../../../assets/images/mehrigiyo.jpg";
import img2 from "../../../../assets/images/napa.png";
import img3 from "../../../../assets/images/kingbok.jpg";
import img4 from "../../../../assets/images/edcontrol.png";
import img5 from "../../../../assets/images/adliya_vazirligi.png";
import img6 from "../../../../assets/images/it-park.jpg";


const RecentProject = () => {
  const obj = {
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    img6: img6,
    title: "Recent Projects We Made",
  };
  return <SmallSwiper obj={obj} bg={"#ecf0f4"} />;
};

export default RecentProject;
