import React from "react";
import Button from "../Button/Button";

const HeadLine = ({ data, sizeTitle="38px" }) => {
  const style = {
    fontSize: sizeTitle,
    color: "#fff",
    fontWeight: "800",
  };

  return (
    <section>
      <h2 style={{...style}}>{data.title}</h2>
      {data.children}
      <Button title={"GET IN TOUCH"} />
    </section>
  );
};

export default HeadLine;
