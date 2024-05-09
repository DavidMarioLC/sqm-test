"use client";
import React from "react";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import "./style.css";

export const PilaresNavigation = ({ items }) => {
  const locale = useLocale();
  const pathname = usePathname();
  const listPathNames = pathname.split("/");
  const currentPath = listPathNames[listPathNames.length - 1];

  return (
    <React.Fragment>
      <div className="d-flex  gap-3 pt-4 overflow-x-auto py-3 pilarsList">
        {items.map((item, idx) => (
          <Link
            key={idx}
            locale={locale}
            href={`/agricultura-sostenible/${item.slug}`}
            className={`badgePilar ${item.slug === currentPath ? "badgePilarActive" : ""} `}
          >
            <img className="badgePilarImage" src="/pilar.png" />
            {item.title}
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};
