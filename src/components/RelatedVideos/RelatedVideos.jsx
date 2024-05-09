"use client";
import { useTranslations } from "next-intl";

import React from "react";
import style from "./style.module.css";
import { IoTimeOutline } from "react-icons/io5";

export const RelatedVideos = ({ videos }) => {
  const t = useTranslations("RelatedVideo");
  const [activeVideo, setActiveVideo] = React.useState(videos[0]);

  const handleVideoClick = (video) => {
    setActiveVideo(video);
  };

  return (
    <div className={style.relatedVideo}>
      <iframe title="Iframe de videos" loading="lazy" className={style.iframe} src={`https://www.youtube.com/embed/${activeVideo.url}`}></iframe>
      <div>
        <h3 className={`text-xl fw-bold ${style.subtitle} mt-24 mb-16 lg:mb-24 lg:mt-0`}>{t("title")}</h3>
        <ul className={`${style.listVideos} list-unstyled`}>
          {videos.map((item) => (
            <li key={item.id}>
              <article className={`${style.thumbnail} ${item === activeVideo ? style.thumbnailActive : null}`} onClick={() => handleVideoClick(item)}>
                <figure className={`${style.thumbnailWrapperImage}`}>
                  <img
                    src="/youtube-icon.svg"
                    className={style.thumbnailIconYoutube}
                    aria-hidden="true"
                    aria-label="logo de youtube"
                    loading="lazy"
                  />
                  <img className={`${style.thumbnailImage}`} src={item.image} alt="" />
                </figure>
                <div className={`${style.thumbnailContent}`}>
                  <h5 className="text-md ">{item.title}</h5>
                  <p className="text-xs">
                    <IoTimeOutline />
                    {item.time}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
