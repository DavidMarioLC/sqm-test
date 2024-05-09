"use client";

import React from "react";
import style from "./style.module.css";
import { NextBreadcrumb } from "../NextBreadcrumb";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

export const SimpleBanner = ({ background = "#0033A1", title = "Title", subtitle = "" }) => {
  // const pathname = usePathname();
  // const newPathname = pathname.split("/").filter((path) => path);
  // const title = newPathname.slice(1);

  return (
    <section style={{ background }} className={style.bannerSimple}>
      <div className="container">
        <NextBreadcrumb className="breadcrumbWhite" />
        <div className={style.bannerContent}>
          <h1 className={style.bannerTitle}>{title}</h1>
          {subtitle && <p className={style.bannerSubtitle}>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};
