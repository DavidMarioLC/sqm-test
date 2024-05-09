import React from "react";
import style from "./style.module.css";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";

export const Pill = ({ href, icon, children }) => {
  const locale = useLocale();
  return (
    <Link
      locale={locale}
      href={href}
      className={`${style.pill} ${icon ? style.pillWithIcon : null}`}
    >
      {icon && <img src={icon} alt="icono PNG" />}
      {children}
    </Link>
  );
};
