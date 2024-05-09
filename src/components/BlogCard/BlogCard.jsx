import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import { FiFileText } from "react-icons/fi";
import { Link } from "../../navigation";
import { useLocale } from "next-intl";

export const BlogCard = ({
  image = "",
  category = "category",
  title = "Title",
  slug = "",
  description = "Description",
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
  author = {
    image: "",
    name: "Nombre de Autor",
    ocupation: "Ocupación",
  },
}) => {
  const locale = useLocale();
  const tagList = tags.map((tag) => `#${tag.name}`).join(" - ");

  return (
    <Link locale={locale} href={`/blog/${slug}`} className={style.linkCard}>
      <article className={style.card}>
        <div className={style.imageWrapper}>
          <Image
            src={image ? image : "/single-post.png"}
            width={384}
            height={183}
            alt={title ? title : "nombre de card"}
            className={style.imageCard}
          />
        </div>
        <section className={`p-4  ${style.content}`}>
          {category ? (
            <p className={`text-sm ${style.category} ${style[category]}`}>
              <FiFileText size={18} />
              {category}
            </p>
          ) : null}
          <h2 className={`text-xl lg:text-2xl ${style.title}`}>{title}</h2>
          <p className={`text-md lg:text-lg ${style.description}`}>{description}</p>
          <p className={`text-xs ${style.tags}`}>
            <span>{tagList}</span>
          </p>
          <hr className="border" />
          <div className={`d-flex gap-2 align-items-center ${style.wrapperAuthor}`}>
            <Image
              src={author.image ? author.image : "/author.png"}
              width={72}
              height={72}
              alt={author.name ? author.name : "Nombre de Autor"}
              className={style.authorImage}
            />
            <div>
              <p className={`text-sm lg:text-md fw-bold mb-1 ${style.authorName}`}>
                {author.name ? author.name : "Nombre de Autor"}
              </p>
              <p className={`text-xs`}>{author.ocupation ? author.ocupation : "Ocupación"}</p>
            </div>
          </div>
        </section>
      </article>
    </Link>
  );
};
