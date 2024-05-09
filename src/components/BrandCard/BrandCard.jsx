import React from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import style from "./style.module.css";

export const BrandCard = ({ image = "", link = "", name = "", brand }) => {
  return (
    <article className={`${style.productCard}`}>
      <Image
        src={image}
        width={261}
        height={294}
        sizes="100vw"
        alt={name}
        className={`${style.productCardImage}`}
      />
      <div>
        <Image
          src={brand.image}
          width={261}
          height={294}
          className={`${style.productCardImageBrand}`}
          alt={brand.name}
          quality={50}
        />
        {name && (
          <p className={`${style.productCardName} fw-bold mb-0 text-center mt-16`}>{name}</p>
        )}
      </div>
      <Button variant="outline" color="blue" href={`/marcas/${link.url}`} target={link.target}>
        {link.text}
      </Button>
    </article>
  );
};
