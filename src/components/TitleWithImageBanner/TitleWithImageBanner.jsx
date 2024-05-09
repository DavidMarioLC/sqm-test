import React from "react";
import style from "./style.module.css";
import { NextBreadcrumb } from "../NextBreadcrumb";
export const TitleWithImageBanner = ({ image, title }) => {
  return (
    <section className={style.banner}>
      <div className="container">
        <NextBreadcrumb className="breadcrumbDark py-3" />
        <div className="text-center">
          <img className={style.image} src={image} alt="" />
          <h1 className={style.title}>{title}</h1>
        </div>
      </div>
    </section>
  );
};
