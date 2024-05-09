import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import { FiFileText } from "react-icons/fi";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/components/Button";
import { BsDownload } from "react-icons/bs";

export const BookCard = ({
  image = "/book-image-default.png",
  category = "category",
  title = "Title",
  linkDownload = "#",
  slug = "#",
}) => {
  const locale = useLocale();

  return (
    <article className={style.card}>
      <div className={style.imageWrapper}>
        <Image src={image} width={384} height={183} alt={title} className={style.imageCard} />
      </div>
      <section className={`p-4 ${style.content}`}>
        {category && <p className={`text-sm ${style.category}`}>{category}</p>}
        <h2 className={`text-xl lg:text-2xl mb-4 ${style.title}`}>{title}</h2>

        <p className="d-grid gap-3">
          <Button
            target="_blank"
            href={linkDownload}
            variant="outline"
            color="blue"
            className="w-100"
          >
            Descargar libro <BsDownload />
          </Button>
          <Button
            href={`/academia-sqm/libros/${slug}`}
            variant="solid"
            color="blue"
            className="w-100"
          >
            Ver detalle
          </Button>
        </p>
      </section>
    </article>
  );
};
