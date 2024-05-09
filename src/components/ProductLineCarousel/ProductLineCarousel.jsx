"use client";

import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pill } from "@/components/Pill";

export const ProductLineCarousel = ({ data, brand }) => {
  const swiperProps = {
    modules: [Navigation, Pagination],
    spaceBetween: 32,
    slidesPerView: 2.5,
    pagination: {
      clickable: true,
    },
    className: "pt-16 pb-48 lineOfProductsCarousel",
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    breakpoints: {
      768: {
        slidesPerView: 5,
      },
      1200: {
        spaceBetween: 0,
        slidesPerView: 7,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 0,
      },
    },
  };

  return (
    <Swiper {...swiperProps}>
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Pill
            href={`/categorias?marca=${brand}&category="${item.slug}"`}
            icon=""
          >
            {item.name}
          </Pill>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
