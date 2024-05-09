import React from "react";
import style from "./lineBusinessCard.module.css";

export const LineBusinessCard = ({ image, title }) => {
  return (
    <article className={style.card}>
      <div className={style.wrapperImage}>
        <img className={style.image} src={image} width={142} height={142} alt={title} />
      </div>
      <h3 className={`${style.title} text-xl  lg:text-2xl`}>{title}</h3>
    </article>
  );
};
