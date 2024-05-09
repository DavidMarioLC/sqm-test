"use client";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BrandCard } from "@/components/BrandCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

export const BrandsCarousel = ({ data }) => {
  const [totalSlides, setTotalSlides] = React.useState(0);
  const [currentIndex, setCurrentIndex] = React.useState(1);

  const swiperProps = {
    className: "brandCarousel pt-48 lg:pt-48",
    modules: [Navigation, Pagination],
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
      enabled: true,
    },
    pagination: {
      enabled: false,
      clickable: true,
    },
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
      },
    },

    style: {
      "--swiper-navigation-size": "27px",
      "--swiper-navigation-color": "hsla(79, 100%, 37%, 1)",
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
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <BrandCard
            image={item.image}
            brand={item.brand}
            link={item.link}
            name={item.name}
          />
        </SwiperSlide>
      ))}

      <div className="brandCarousel__pagination">
        {currentIndex}/{totalSlides}
      </div>
    </Swiper>
  );
};
