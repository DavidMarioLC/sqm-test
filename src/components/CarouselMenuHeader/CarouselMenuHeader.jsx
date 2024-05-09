"use client";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import "./style.css";

export const CarouselMenuHeader = ({ items }) => {
  const locale = useLocale();
  const swiperProps = {
    modules: [Navigation, Pagination],
    spaceBetween: 4,
    slidesPerView: 5.89,
    pagination: {
      clickable: true,
    },
    navigation: true,
    className: "pb-24 pt-24 carouselNavigationHeader",
  };

  return (
    <Swiper {...swiperProps}>
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <Link locale={locale} href={`/${item.link.url}`} className="carouselNavigation__card">
            <figure>
              <img
                src={item.icon ? item.icon : "/cultivo-image-default.png"}
                alt={item.title}
                width={92}
                height={92}
              />
            </figure>
            <span>{item.title}</span>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
