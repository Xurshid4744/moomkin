import React from "react";
import Button from "../Button/Button";

const HeadLine = ({ data, sizeTitle = "38px", hidden = false, children }) => {
  const style = {
    fontSize: sizeTitle,
    color: "#fff",
    fontWeight: "800",
  };

  return (
    <section>
      <h2 style={{ ...style }}>{data.title}</h2>
      {data.children}
      {children}
      <div hidden={hidden}>
        <Button title={"GET IN TOUCH"} />
      </div>
    </section>
  );
};

export default HeadLine;
