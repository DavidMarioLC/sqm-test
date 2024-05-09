import React from "react";
import style from "./style.module.css";
import { NextBreadcrumb } from "../NextBreadcrumb";
import { Title } from "@/components/Title";

export const TitleWithUnderlineBanner = ({ title, className }) => {
  return (
    <section className={`${style.banner} ${className}`}>
      <div className="container">
        <NextBreadcrumb className="breadcrumbDark" />
        <Title className={style.title} level={1} align="center">
          {title}
        </Title>
      </div>
    </section>
  );
};
