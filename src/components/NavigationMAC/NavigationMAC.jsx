"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import style from "./style.module.css";
import { useTranslations } from "next-intl";

export const NavigationMAC = () => {
  const t = useTranslations("NavigationMAC");

  const locale = useLocale();
  const pathname = usePathname();
  const newPathname = pathname.split("/").filter((path) => path);
  const [currentPage] = newPathname.slice(1);

  return (
    <div className={style.navigation}>
      <div className="container">
        <div className={style.navigationLinks}>
          <Link locale={locale} href="/marcas" className={`${style.navigationItem} ${currentPage === "marcas" ? style.navigationItemActive : ""}`}>
            {t("brandsTitle")}
          </Link>
          <Link
            locale={locale}
            href="/aplicaciones"
            className={`${style.navigationItem} ${currentPage === "aplicaciones" ? style.navigationItemActive : ""}`}
          >
            {t("applicationsTitle")}
          </Link>
          <Link
            locale={locale}
            href="/categorias"
            className={`${style.navigationItem} ${currentPage === "categorias" ? style.navigationItemActive : ""}`}
          >
            {t("categoriesTitle")}
          </Link>
        </div>
      </div>
    </div>
  );
};
