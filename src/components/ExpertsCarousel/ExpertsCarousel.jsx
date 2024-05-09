"use client";

import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "@/components/ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import style from "./card.module.css";
import Image from "next/image";
import { Link } from "@/navigation";
import { Button } from "@/components/Button";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export const ExpertsCarousel = ({ experts }) => {
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
      {experts.map((item) => (
        <SwiperSlide key={item.id}>
          <article className={style.card}>
            <Image src={item.imagen} width={126} height={126} className={style.image} alt={item.title} />
            <div>
              <p className={style.name}>{item.title}</p>
              <p className={style.ocupation}>{item.ocupation}</p>
            </div>
            <Button variant="ghost" color="green" target={item.link.target} href={`/nuestros-expertos/${item.link.url}`}>
              {item.link.text}
              <IoArrowForwardCircleOutline size={18} />
            </Button>
          </article>
        </SwiperSlide>
      ))}

      <div className="brandCarousel__pagination">
        {currentIndex}/{totalSlides}
      </div>
    </Swiper>
  );
};
