"use client";
import React from "react";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import "./style.css";

export const SubLinksNavigation = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const listPathNames = pathname.split("/");
  const currentPath = listPathNames[listPathNames.length - 1];
  //video = video
  return (
    <React.Fragment>
      <div className="d-flex  gap-3 pt-4 overflow-x-auto py-3 pilarsList">
        <Link locale={locale} href={`/academia-sqm/videos`} className={`badgePilar  `}>
          <img className="badgePilarImage" src="/pilar.png" />
          videos
        </Link>
        <Link locale={locale} href={`/academia-sqm/libros`} className={`badgePilar  `}>
          <img className="badgePilarImage" src="/pilar.png" />
          libros
        </Link>
        <Link locale={locale} href={`/academia-sqm/cursos`} className={`badgePilar `}>
          <img className="badgePilarImage" src="/pilar.png" />
          cursos
        </Link>
      </div>
    </React.Fragment>
  );
};
