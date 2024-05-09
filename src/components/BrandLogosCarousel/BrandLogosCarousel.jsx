"use client";

import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "../../navigation";
import { useLocale } from "next-intl";
import style from "./brandIconCard.module.css";
import "./style.css";

export const BrandLogosCarousel = ({ data }) => {
  const locale = useLocale();
  const swiperProps = {
    modules: [Navigation, Pagination],
    spaceBetween: 32,
    slidesPerView: 3.6,
    pagination: {
      enabled: true,
      clickable: true,
    },
    navigation: {
      enabled: false,
    },
    className: "py-48 pb-48 brandIconCarousel",
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        spaceBetween: 32,
        slidesPerView: 4,
        pagination: {
          enabled: true,
        },
        navigation: {
          enabled: true,
        },
      },
    },
  };

  return (
    <Swiper {...swiperProps}>
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Link
            href={`/marcas/${item.link.url}`}
            locale={locale}
            target={item.target}
            className={style.brandIconCard}
          >
            <div className={style.brandIconCardWrapperImage}>
              <img
                className={style.brandIconCardImage}
                src={item.image}
                alt={item.name}
              />
            </div>
            <span className={style.brandName}>{item.name}</span>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
