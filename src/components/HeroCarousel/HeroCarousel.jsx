"use client";
import Image from "next/image";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

import { Button } from "@/components/Button";

export const HeroCarousel = ({ data }) => {
  const swiperProps = {
    modules: [Navigation, Pagination],
    spaceBetween: 0,
    slidesPerView: 1,
    className: `heroCarousel`,
    pagination: {
      clickable: true,
      bulletActiveClass: `heroCarouselBulletActived`,
      clickableClass: `heroCarouselPagination`,
    },
    navigation: {
      enabled: false,
    },
    style: {
      "--swiper-pagination-color": "#000",
      "--swiper-pagination-bullet-size": "18px",
      "--swiper-pagination-bullet-width": "12px",
      "--swiper-pagination-bullet-height": "12px",
      "--swiper-pagination-bullet-inactive-color": "#a8a8a8",
      "--swiper-pagination-bullet-inactive-opacity": "1",
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
        navigation: {
          enabled: true,
        },
      },
    },
  };

  return (
    <>
      <Swiper {...swiperProps}>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <HeroCarouselItem
              media={item.media}
              title={item.title}
              link={item.link}
              isVideo={item.isVideo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export const HeroCarouselItem = ({ media, title = "title", link, isVideo = false }) => {
  return (
    <div className={`heroCarouselWrapper`}>
      <div className={`container heroCarouselItem`}>
        {isVideo ? (
          <video className={`heroCarouselItemMultimedia`} muted autoPlay loop>
            <source src={media} type="video/mp4"></source>
          </video>
        ) : (
          // <img className={`heroCarouselItemMultimedia`} src={media} alt="title" />
          <Image
            className={`heroCarouselItemMultimedia`}
            src={media}
            width={1000}
            height={600}
            alt="title"
            priority
          />
        )}

        <div className={`heroCarouselContent`}>
          <h2 className={`heroCarouselItemTitle text-2xl lg:text-5xl`}>{title} </h2>
          <p className={`heroCarouselItemButton`}>
            {Object.entries(link).length > 0 && (
              <Button variant="solid" color="white" href={link.url} target={link.target}>
                {link.title}
              </Button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
