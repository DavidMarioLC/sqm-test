import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import { FiFileText } from "react-icons/fi";
import { Link } from "../../navigation";
import { useLocale } from "next-intl";

export const VideoCard = ({
  image = "/video-image-default.png",
  category = "category",
  title = "Title",
  description = "",
  slug = "slug",
}) => {
  const locale = useLocale();

  return (
    <Link locale={locale} href={`/academia-sqm/videos/${slug}`} className={style.linkCard}>
      <article className={style.card}>
        <div className={style.imageWrapper}>
          <Image src={image} width={384} height={183} alt={title} className={style.imageCard} />
          <img
            className={style.logoYoutube}
            src="/youtube-icon.svg"
            width={56}
            height={56}
            alt="logo de youtube"
          />
        </div>
        <section className={`p-4 ${style.content}`}>
          {category && <p className={`text-sm ${style.category} ${style[category]}`}>{category}</p>}

          {title && <h2 className={`text-xl lg:text-2xl ${style.title}`}>{title}</h2>}

          {description && (
            <p className={`text-md lg:text-lg ${style.description}`}>{description}</p>
          )}
        </section>
      </article>
    </Link>
  );
};
