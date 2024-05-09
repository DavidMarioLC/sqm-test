import React from "react";
import style from "./style.module.css";
import { Button } from "@/components/Button";

export const DistributorBanner = ({
  imageMobile,
  imageDesktop,
  title,
  link,
}) => {
  return (
    <section className="container pb-56 lg:pb-96 ">
      <article className={style.promotionBanner}>
        <figure className={style.promotionBannerWrapperImage}>
          <picture>
            <source media="(min-width:768px)" srcSet={imageDesktop} />
            <img
              src={imageMobile}
              alt={title}
              width={536}
              height={360}
              className={style.promotionBannerImage}
            />
          </picture>
        </figure>
        <div className={style.promotionBannerContent}>
          <h2
            className={`${style.promotionBannerTitle} text-xl lg:text-3xl mb-48`}
          >
            {title}
          </h2>
          <p className="grid col-md-6">
            <Button
              variant="outline"
              color="white"
              target={link.target}
              href="/distribuidores"
              fullWidth
            >
              {link.text}
            </Button>
          </p>
        </div>
      </article>
    </section>
  );
};
