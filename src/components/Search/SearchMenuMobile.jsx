"use client";
import React from "react";
import { Link } from "../../navigation";
import { useLocale } from "next-intl";
import style from "@/components/Header/headerMobile.module.css";
import { Button } from "@/components/Button";
import { BsArrowLeft, BsSearch, BsChevronRight } from "react-icons/bs";
import { SlClose } from "react-icons/sl";
import { useSearch } from "./useSearch";
import { PiSmileySadThin } from "react-icons/pi";
import Spinner from "react-bootstrap/Spinner";

export const SearchMenuMobile = ({ openSearch, closeSearch }) => {
  const { onChange, result, error, searchTerm, cleanSearch, loading } = useSearch();
  const locale = useLocale();

  return (
    <div className={style.headerSearch}>
      <div className={style.headerSearchTop}>
        <button
          aria-label="Boton buscar"
          onClick={() => {
            cleanSearch();
            closeSearch();
          }}
          className={style.headerSearchButtonBack}
        >
          <BsArrowLeft />
        </button>
        <input
          id="search"
          value={searchTerm}
          onChange={(e) => {
            onChange(e.target.value);

            if (e.target.value) {
              openSearch();
            } else {
              closeSearch();
            }
          }}
          className={style.headerSearchInput}
          type="text"
          placeholder="Buscar en la web"
        />

        {searchTerm ? (
          <button className={style.headerSearchButtonClear} onClick={cleanSearch}>
            <SlClose />
          </button>
        ) : (
          <label htmlFor="search" className={style.headerSearchButtonSearch}>
            <BsSearch />
          </label>
        )}
      </div>
      <div className={`${style.headerSearchResults} ${searchTerm ? style.headerSearchResultsOpen : ""}`}>
        <div className={style.headerSearchResultsContent}>
          {result?.articlesAndEssay?.length > 0 && (
            <div className={style.headerSearchResultItem}>
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
              <Button variant="ghost" color="green" href="" className="py-8 ps-24">
                Ver todos
              </Button>
            </div>
          )}

          {result?.products?.length > 0 && (
            <div className={style.headerSearchResultItem}>
              <p className="text-lg">Productos</p>
              <ul>
                {result.products.map((item) => (
                  <li key={item.id}>
                    <BsChevronRight />
                    <Link locale={locale} href={`/marcas/slug-marca/${item.slug}`}>
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
            <div className={style.headerSearchResultItem}>
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
              <Button variant="ghost" color="green" href="/academia-sqm/videos" className="py-8 ps-24">
                Ver todos
              </Button>
            </div>
          )}

          {result?.books?.length > 0 && (
            <div className={style.headerSearchResultItem}>
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
              <Button variant="ghost" color="green" href="" className="py-8 ps-24">
                Ver todos
              </Button>
            </div>
          )}

          {error ? (
            <div className={`${style.headerSearcResultsNotFound}`}>
              <PiSmileySadThin />
              <p className="mb-0">No pudimos encontrar lo que buscabas.</p>
            </div>
          ) : null}

          {loading && (
            <div className="d-flex justify-content-center align-items-center h-100" style={{ color: "#0033a1" }}>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
