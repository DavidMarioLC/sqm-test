"use client";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { AcademyCard } from "@/components/AcademyCard";

export const AcademyCardCarousel = ({ items }) => {
  const [totalSlides, setTotalSlides] = React.useState(0);
  const [currentIndex, setCurrentIndex] = React.useState(1);

  const swiperProps = {
    modules: [Navigation, Pagination],
    spaceBetween: 16,
    slidesPerView: 1,
    pagination: {
      enabled: false,
    },
    navigation: {
      enabled: true,
    },
    className: "articlesCarousel py-24",
    style: {
      "--swiper-navigation-size": "27px",
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        pagination: {
          enabled: true,
          clickable: true,
        },
      },
    },
  };
  return (
    <Swiper
      {...swiperProps}
      onSwiper={(swiper) => {
        setTotalSlides(swiper.snapGrid.length);
      }}
      onSlideChange={(swiper) => {
        setCurrentIndex(swiper.activeIndex + 1);
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <AcademyCard image={item.image} title={item.title} description={item.description} slug={item.slug} buttonText={item.buttonText} />
        </SwiperSlide>
      ))}

      {totalSlides > 1 && (
        <div className="articlesCarousel__pagination">
          {currentIndex}/{totalSlides}
        </div>
      )}
    </Swiper>
  );
};
