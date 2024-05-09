import React from "react";
import style from "./style.module.css";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";

export const RelatedProductsAside = ({ products }) => {
  const locale = useLocale();
  return (
    <nav className={`${style.nav} position-sticky top-0 py-48`}>
      <h2 className={style.title}>Productos relacionados</h2>
      <article className={style.list}>
        {products.map((item, idx) => (
          <Link
            key={item.id}
            href={`/marcas/${item.crops.slug}/${item.slug}`}
            locale={locale}
            className={style.link}
          >
            <article className={style.card}>
              <img className={style.brandImage} src={item.image} alt="" />
              <div>
                <img
                  width={97}
                  height={25}
                  className={style.brandNameImage}
                  src={item.crops.image}
                  alt={item.crops.name}
                />
                <h3 className={style.brandName}>{item.title}</h3>
              </div>
            </article>
          </Link>
        ))}
      </article>
    </nav>
  );
};
