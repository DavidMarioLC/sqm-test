"use client";

import React from "react";
import style from "./style.module.css";
import { useMediaQuery } from "@uidotdev/usehooks";
import { NextBreadcrumb } from "@/components/NextBreadcrumb";

export const ImageBanner = ({
  title = "Title",
  paragraph = "Paragraph",
  image = "/imagebanner-desktop.png",
  imageMobile = "/imagebanner-mobile.png",
  imageDesktop = "/imagebanner-desktop.png",
}) => {
  const isDesktopDevice = useMediaQuery("@media (min-width : 768px)");

  return (
    <section
      className={style.banner}
      style={{
        backgroundImage: `url('${image ? image : "/imagebanner-desktop.png"}')`,
      }}
    >
      <div className="container">
        <NextBreadcrumb className="breadcrumbWhite" />
        <div className={style.maxWidth}>
          <h1 className={style.title}>{title}</h1>
          <p className={style.paragraph}>{paragraph}</p>
        </div>
      </div>
    </section>
  );
};
