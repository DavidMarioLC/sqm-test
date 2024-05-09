import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import { FiFileText } from "react-icons/fi";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/components/Button";

export const AcademyCard = ({
  image = "/post-image.png",
  title = "Title",
  description = "Description",
  slug = "slug",
  buttonText = "Ver todos los videos",
}) => {
  const locale = useLocale();

  return (
    <article className={style.card}>
      <div className={style.imageWrapper}>
        <Image src={image} width={384} height={183} alt={title} className={style.imageCard} />
      </div>
      <section className={`p-4  ${style.content}`}>
        <h2 className={`text-xl lg:text-2xl mb-4 fw-bold ${style.title}`}>{title}</h2>
        <p className={`text-md lg:text-lg mb-4 ${style.description}`}>{description}</p>
        <Button href={`/videos`} variant="solid" color="blue" className="w-100">
          {buttonText}
        </Button>
      </section>
    </article>
  );
};
