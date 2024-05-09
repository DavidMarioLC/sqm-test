"use client";

import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ApplicationCard } from "@/components/ApplicationCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

export const ApplicationCarousel = ({ data }) => {
  const [totalSlides, setTotalSlides] = React.useState(0);
  const [currentIndex, setCurrentIndex] = React.useState(1);

  const swiperProps = {
    className: "applicationCarousel py-24",
    modules: [Navigation, Pagination],
    pagination: {
      clickable: true,
    },
    navigation: {
      enabled: false,
    },
    spaceBetween: 16,
    slidesPerView: 1.5,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    breakpoints: {
      680: {
        slidesPerView: 3,
      },
      1200: {
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        navigation: {
          enabled: true,
        },
      },
      1440: {
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        slidesPerView: 4,
        navigation: {
          enabled: true,
        },
      },
    },
  };
  return (
    <Swiper
      {...swiperProps}
      onSwiper={(swiper) => {
        setTotalSlides(swiper.pagination.bullets.length);
      }}
      onSlideChange={(swiper) => {
        setCurrentIndex(swiper.activeIndex + 1);
      }}
    >
      {data?.map((item, idx) => (
        <SwiperSlide key={idx + 1}>
          <ApplicationCard
            image={item.image}
            icon={item.icon}
            title={item.title}
            link={item.link.url}
          />
        </SwiperSlide>
      ))}
      <div className="applicationCarousel__pagination">
        {currentIndex}/{totalSlides}
      </div>
    </Swiper>
  );
};
