"use client";
import React from "react";
import { useLocale } from "next-intl";
import { Link } from "@/navigation";
import { BsChevronDown } from "react-icons/bs";
import { NavigationSubmenu } from "./NavigationSubmenu";
import style from "./headerDesktop.module.css";

export const NavigationItem = ({ data }) => {
  const locale = useLocale();

  const [showSubmenu, setShowSubmenu] = React.useState(false);

  const handleMouseEnter = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubmenu(false);
  };

  return (
    <li className={style.navigationItem} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {data?.submenu[0]?.links?.length > 0 ? (
        <React.Fragment>
          {data.title}
          <BsChevronDown />
          <NavigationSubmenu showSubmenu={showSubmenu} data={data} />
        </React.Fragment>
      ) : (
        <Link locale={locale} href={`/${data?.link?.url}`}>
          {data.title}
        </Link>
      )}
    </li>
  );
};
