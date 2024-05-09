import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import { Button } from "@/components/Button";

export const ProductCard = ({
  image = "https://fakeimg.pl/800x600/",
  link,
  name = "",
  brand,
  href,
}) => {
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
        />
        {name && (
          <p
            className={`${style.productCardName} fw-bold mb-0 text-center mt-16`}
          >
            {name}
          </p>
        )}
      </div>
      <Button variant="outline" color="blue" href={href} target={link.target}>
        {link.text}
      </Button>
    </article>
  );
};
