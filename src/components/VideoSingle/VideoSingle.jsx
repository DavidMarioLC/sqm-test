"use client";
import React from "react";
import style from "./style.module.css";
import { IoTimeOutline } from "react-icons/io5";
import { Button } from "../Button";

export const VideoSingle = ({ data }) => {
  const [collapse, setCollapse] = React.useState(false);
  const [video, setVideo] = React.useState(data.videos[0]);

  const changeVideo = (video) => {
    setVideo(video);
  };

  return (
    <section>
      <iframe className={style.iframe} src={`https://www.youtube.com/embed/${video.url}`}></iframe>
      <p className={style.category}>{video.category.title}</p>
      <h1 className={style.title}>{video.title}</h1>
      {/* <p className={style.author}>Francisco Javier Viramontes</p> */}
      <section className="py-4">
        <div className={`${collapse ? style.collapse : style.collapsed}`}>
          <p>{video.resume}</p>
        </div>
        <button className={style.buttonCollapse} onClick={() => setCollapse(!collapse)}>
          {collapse ? "Seguir leyendo" : "Ver menos"}
        </button>
      </section>

      <ul className="list-unstyled">
        {data.videos.map((item, idx) => (
          <li onClick={() => changeVideo(item)} key={item.id} className={` ${style.itemDefault} ${item.id === video.id ? style.itemActive : ""}`}>
            {/* mobile */}
            <article className={`${style.cardMobile} d-md-none`}>
              <div className={style.cardMobileHeader}>
                <p className={style.cardMobileChapter}>capitulo {idx + 1}</p>
                <p className={style.cardMobileDuration}>
                  <IoTimeOutline color="#008809" />
                  {item.time}
                </p>
              </div>
              <div className={style.cardMobileContainerImage}>
                <div className={style.cardMobileWrapper}>
                  <img className={style.cardMobileImage} src={item.image ? item.image : ""} alt={item.title} width={200} height={200} />
                  <img className={style.iconYoutube} src="/youtube-icon.svg" />
                </div>
                <p className={style.cardMobileTitle}> {item.title}</p>
              </div>
              <p className={style.cardMobileDescription}>{item.resume}</p>
            </article>
            {/* desktop */}
            <article className={`${style.cardDesktop} d-none d-md-flex border-bottom`}>
              <div className={style.cardDesktopWrapper}>
                <img className={style.cardDesktopImage} src={item.image ? item.image : ""} alt={item.title} width={200} height={200} />
                <img className={style.iconYoutube} src="/youtube-icon.svg" />
              </div>
              <div className={style.cardDesktopContent}>
                <div className={style.cardDesktopHeader}>
                  <p className={style.cardDesktopChapter}>capitulo {idx + 1}</p>
                  <p className={style.cardDesktopTime}>
                    <IoTimeOutline color="#008809" />
                    {item.time}
                  </p>
                </div>
                <p className={style.cardDesktopTitle}>{item.title}</p>
                <p className={style.cardDesktopDescription}>{item.resume}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
