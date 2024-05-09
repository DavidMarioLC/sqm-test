import React from "react";
import style from "./style.module.css";
import { NextBreadcrumb } from "@/components/NextBreadcrumb";

export const ColorBanner = ({ title = "Title", paragraph = "Paragraph", color = "#0033A1" }) => {
  return (
    <section className={style.banner} style={{ background: color }}>
      <div className="container">
        <NextBreadcrumb className="breadcrumbWhite " />
        <div className={style.maxWidth}>
          <h1 className={style.title}>{title}</h1>
          <p className={style.paragraph}>{paragraph}</p>
        </div>
      </div>
    </section>
  );
};
