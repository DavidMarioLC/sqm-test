import React from "react";
import style from "./style.module.css";

export const Title = ({ level, className, align, alignDesktop, children }) => {
  if (typeof level !== "number" || level < 1 || level > 6) {
    throw new Error(`Unrecognized heading level: ${level}`);
  }

  const HeadingTag = `h${level}`;

  return (
    <HeadingTag className={`${style.title} ${style[align]} ${style[alignDesktop]} ${className}`}>
      {children ? children : "Title"}
      <div className={style.underline}>underline</div>
    </HeadingTag>
  );
};
