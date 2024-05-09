"use client";
import React from "react";
import style from "./style.module.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { usePathname } from "next/navigation";
import { BsHouse } from "react-icons/bs";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

export const NextBreadcrumb = ({ className }) => {
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();

  const paths = pathname.split("/").filter((item) => item.trim() !== "");
  const allpaths = paths.splice(1);

  const replaceDashesWithSpaces = (item) => {
    const str = item.replace(/-/g, " ");
    return str;
  };

  const getLink = (item) => {
    if (item === params.marca) {
      return `/marcas/${item}`;
    } else if (allpaths.includes(item)) {
      return `/${item}`;
    } else {
      return "/";
    }
  };

  return (
    <Breadcrumb className={className}>
      <Breadcrumb.Item locale={locale} linkAs={Link} href={"/"}>
        <BsHouse />
      </Breadcrumb.Item>
      {allpaths.map((item, idx) => {
        if (idx === allpaths.length - 1) {
          return (
            <Breadcrumb.Item active key={idx + item}>
              {replaceDashesWithSpaces(item)}
            </Breadcrumb.Item>
          );
        } else {
          return (
            <Breadcrumb.Item locale={locale} linkAs={Link} href={getLink(item)} key={idx + item}>
              {replaceDashesWithSpaces(item)}
            </Breadcrumb.Item>
          );
        }
      })}
    </Breadcrumb>
  );
};
