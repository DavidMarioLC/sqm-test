"use client";
import React from "react";
import style from "./style.module.css";

import { GoSearch } from "react-icons/go";
import { BsChevronRight } from "react-icons/bs";
import { Button } from "@/components/Button";
import { useSearch } from "./useSearch";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import Spinner from "react-bootstrap/Spinner";
export const Search = ({ isCompact = false }) => {
  const { onChange, result, error, loading } = useSearch();
  const locale = useLocale();
  return (
    <div className={style.search}>
      <input
        onChange={(e) => onChange(e.target.value)}
        className={style.searchInput}
        aria-label="Campo de busqueda"
      />
      <button className={style.searchButton} aria-label="Boton buscar">
        <GoSearch />
      </button>
      <div className={`${style.searchResponse} `}>
        {isCompact ? (
          result?.products?.length > 0 && (
            <ul className={style.searchResultsCompact}>
              {result.products.map((item) => (
                <li key={item.id}>
                  <Link locale={locale} href={`/marcas/ultrasol/${item.slug}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )
        ) : (
          <div className={style.searchResults}>
            {result?.articlesAndEssay?.length > 0 && (
              <div className={style.searchResultsItem}>
                <p className="text-lg">Artículos y ensayos</p>
                <ul>
                  {result.articlesAndEssay.map((item) => (
                    <li key={item.id}>
                      <BsChevronRight />
                      <Link locale={locale} href={`/articulos/${item.slug}`}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" color="green" href="/articulos" className="py-8 ps-24">
                  Ver todos
                </Button>
              </div>
            )}

            {result?.products?.length > 0 && (
              <div className={style.searchResultsItem}>
                <p className="text-lg">Productos</p>
                <ul>
                  {result.products.map((item) => (
                    <li key={item.id}>
                      <BsChevronRight />
                      <Link locale={locale} href={`/marcas/${item.link}`}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" color="green" href="/marcas" className="py-8 ps-24">
                  Ver todos
                </Button>
              </div>
            )}

            {result?.videos?.length > 0 && (
              <div className={style.searchResultsItem}>
                <p className="text-lg">Videos</p>
                <ul>
                  {result.videos.map((item) => (
                    <li key={item.id}>
                      <BsChevronRight />
                      <Link locale={locale} href={`/academia-sqm/videos/${item.slug}`}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  color="green"
                  href="/academia-sqm/videos"
                  className="py-8 ps-24"
                >
                  Ver todos
                </Button>
              </div>
            )}

            {result?.books?.length > 0 && (
              <div className={style.searchResultsItem}>
                <p className="text-lg">Libros</p>
                <ul>
                  {result.books.map((item) => (
                    <li key={item.id}>
                      <BsChevronRight />
                      <Link locale={locale} href={`/academia-sqm/libros/${item.slug}`}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  color="green"
                  href="/academia-sqm/libros"
                  className="py-8 ps-24"
                >
                  Ver todos
                </Button>
              </div>
            )}
          </div>
        )}

        {error ? (
          <div className={`${style.searchNotFound}`}>
            <p className="mb-0">No pudimos encontrar lo que buscabas.</p>
          </div>
        ) : null}

        {loading && (
          <div
            style={{ height: 100, color: "#0033a1" }}
            className="d-flex justify-content-center align-items-center "
          >
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </div>
    </div>
  );
};
