import React from "react";
import style from "./style.module.css";
import Image from "next/image";

export const BrandBanner = ({
  background = "#008809",
  logo = "/brandbannerlogo.png",
  title = "Title",
}) => {
  const isImage = background.match(/\.(jpeg|jpg|gif|png)$/) !== null;

  const bannerStyle = {
    backgroundImage: isImage ? `url(/${background})` : "none",
    backgroundColor: isImage ? "transparent" : background || "transparent",
  };

  return (
    <React.Fragment>
      <section
        style={bannerStyle}
        className={`${style.banner} ${
          logo ? style.bannerHigh : style.bannerLow
        }`}
      >
        {logo ? (
          <Image
            className={style.bannerImage}
            src={`${logo}`}
            alt="title"
            width={328}
            height={80}
          />
        ) : (
          <h1 className={style.bannerTitle}>{title}</h1>
        )}
      </section>
    </React.Fragment>
  );
};
