import React from "react";
import style from "./improveCard.module.css";

export const ImproveCard = ({ image, title, description }) => {
  return (
    <article className={style.card}>
      <img className={style.image} src={image} alt={title} />
      <h3 className={`${style.title} text-xl  lg:text-2xl`}>{title}</h3>
      <p className={`${style.description} lg:text-lg`}>{description}</p>
    </article>
  );
};
