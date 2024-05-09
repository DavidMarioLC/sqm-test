import React from "react";
import { Link } from "../../navigation";
import { useLocale } from "next-intl";
import style from "./style.module.css";
import Image from "next/image";

export const ArticleCard = ({
  link = {
    url: "",
    target: "",
  },
  image = "/article-card-image.png",
  title = "Title",
  category = "category",
  tags = [
    {
      id: 1,
      name: "etiqueta 01",
    },
    {
      id: 2,
      name: "etiqueta 02",
    },
  ],
}) => {
  const locale = useLocale();

  return (
    <Link href={`/articulos/${link.url}`} locale={locale} target={link.target}>
      <article className={`${style.articleCard}`}>
        <div className={`${style.articleCardWraperImage}`}>
          <Image
            src={image ? image : "/article-card-image.png"}
            width={261}
            height={169}
            alt={title}
            className={`${style.articleCardImage}`}
          />
        </div>
        <div className={`${style.articleCardBody}`}>
          <span className={`${style.articleCardTagLink} text-sm`}>{category}</span>
          <h3 className={`${style.articleCardTitle} text-xl `}>{title}</h3>
          <p className={`${style.articleCardTags} text-xs `}>
            <span>{tags.map((tag) => `#${tag.name}`).join(" - ")}</span>
          </p>
        </div>
      </article>
    </Link>
  );
};
