"use client";

import React from "react";
import style from "./style.module.css";
import { useMediaQuery } from "@uidotdev/usehooks";
import { NextBreadcrumb } from "@/components/NextBreadcrumb";

export const ImageBannerExtended = ({
  title = "La importancia de una correcta nutrición",
  firstParagraph = "Ultra Berries nutridos por SQM",
  secondParagraph = "La importancia de una correcta nutrición",
  imageMobile = "/imagebanner-mobile.png",
  imageDesktop = "/imagebanner-desktop.png",
}) => {
  const isDesktopDevice = useMediaQuery("@media (min-width : 768px)");

  return (
    <section
      className={style.banner}
      style={{
        backgroundImage: `url('${isDesktopDevice ? imageDesktop : imageMobile}')`,
      }}
    >
      <div className="container">
        <NextBreadcrumb />
        <div className={style.maxWidth}>
          <p className={style.firstParagraph}>{firstParagraph}</p>
          <p className={style.secondParagraph}>{secondParagraph}</p>
          <h1 className={style.title}>{title}</h1>
        </div>
      </div>
    </section>
  );
};
