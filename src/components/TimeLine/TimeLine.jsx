"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import parse from "html-react-parser";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

export function TimeLine({ items }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [main, setMain] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  let thumbnailRef = useRef(null);
  let mainRef = useRef(null);

  const next = () => {
    thumbnailRef.slickNext();
  };
  const previous = () => {
    thumbnailRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  useEffect(() => {
    setThumbnail(thumbnailRef);
    setMain(mainRef);
  }, []);
  return (
    <div className="slider-container">
      {/* tumbnail */}
      <Slider
        className="py-5 timeline_thumbnail"
        asNavFor={thumbnail}
        ref={(slider) => (mainRef = slider)}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settings}
      >
        {items.map((item, idx) => (
          <div key={item.id}>
            <article className="timeline_year">
              <h3 className="timeline_number">{item.year}</h3>
              <div className="timeline_circle"></div>
            </article>
          </div>
        ))}
      </Slider>
      <div>
        <button className="timeline__navigation-button" onClick={previous}>
          <IoIosArrowRoundBack size={48} color={`${activeSlide + 1 === 1 ? "#A5A5A7" : "#0DA600"}`} />
        </button>
        <button className="timeline__navigation-button" onClick={next}>
          <IoIosArrowRoundForward size={48} color={`${activeSlide + 1 < items.length ? "#0DA600" : "#A5A5A7"}`} />
        </button>
      </div>
      {/* main */}

      <Slider
        beforeChange={(current, next) => {
          setActiveSlide(next);
        }}
        infinite={false}
        className="py-5 timeline_main"
        asNavFor={main}
        ref={(slider) => (thumbnailRef = slider)}
      >
        {items.map((item, idx) => (
          <div key={item.id}>
            <section className="timeline_main">
              <div className="timeline_info">
                <div className="timeline_mw">
                  <h2 className="fw-bold color-02 text-2xl lg:text-4xl">{item.title}</h2>

                  {parse(`${item.description}`)}
                </div>
              </div>
              <div className="timeline_wrapperImage mt-3">
                <img className="timeline_image" src={item.image ? item.image : ""} />
              </div>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
}
