"use client";
import { Link } from "@/navigation";
import React from "react";
import { useLocale } from "next-intl";
import style from "./style.module.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const Pagination = ({ totalPages, page }) => {
  const locale = useLocale();
  const prevPage = page === 1 ? "" : `?page=${page - 1}`;
  const nextPage = totalPages === page ? "" : `?page=${page + 1}`;

  const pageIsEqualToOne = page === 1;
  const pageIsEqualToTotalPage = totalPages === page;
  return (
    <div className="container py-3 py-md-5">
      <nav className={style.pagination}>
        {pageIsEqualToOne ? (
          <BsChevronLeft size={22} />
        ) : (
          <Link scroll={false} locale={locale} href={prevPage} className={style.buttonPrev}>
            <BsChevronLeft size={22} />
          </Link>
        )}

        <ul className={style.listNumbers}>
          {Array.from({ length: totalPages }).map((item, idx) => (
            <Link
              scroll={false}
              key={crypto.randomUUID()}
              href={`?page=${idx + 1}`}
              className={`${style.numbers} ${page === idx + 1 ? style.currentPage : ""} `}
            >
              {idx + 1}
            </Link>
          ))}
        </ul>

        {pageIsEqualToTotalPage ? (
          <BsChevronRight size={22} />
        ) : (
          <Link scroll={false} locale={locale} href={nextPage} className={style.buttonNext}>
            <BsChevronRight size={22} color="#008809" />
          </Link>
        )}
      </nav>
    </div>
  );
};
