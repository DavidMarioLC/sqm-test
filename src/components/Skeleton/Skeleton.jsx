"use client";

import React from "react";
import Placeholder from "react-bootstrap/Placeholder";
import style from "./style.module.css";
import Spinner from "react-bootstrap/Spinner";

export const Loading = () => {
  return (
    <div className={style.ContainerLoading}>
      <Spinner animation="border" role="status" className={style.spinner}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export const SkeletonResultCompatibility = () => {
  return (
    <section className="">
      <Placeholder as="h1" animation="glow">
        <Placeholder xs={12} size="lg" className={style.background} />
      </Placeholder>
      <Placeholder as="div" animation="glow" className="d-flex gap-3">
        <Placeholder xs={6} size="xs" className={style.background} />
        <Placeholder xs={3} size="lxs" className={style.background} />
      </Placeholder>
      <Placeholder as="div" animation="glow" className="d-flex gap-3">
        <Placeholder xs={6} className={style.background} />
        <Placeholder xs={3} className={style.background} />
      </Placeholder>
    </section>
  );
};

export const SkeletonArticleCard = () => {
  return (
    <div className="rounded overflow-hidden row gap-2 ">
      <Placeholder animation="glow">
        <Placeholder xs={12} lg={3} size="lg" className={style.articleCardImage} />
      </Placeholder>
      <Placeholder animation="glow">
        <Placeholder xs={4} lg={5} size="lg" />
      </Placeholder>
      <Placeholder animation="glow">
        <Placeholder xs={12} lg={12} size="lg" />
        <Placeholder xs={8} lg={8} size="lg" />
      </Placeholder>
      <Placeholder animation="glow" className="mt-3">
        <Placeholder xs={2} size="xs" /> <Placeholder xs={2} size="xs" /> <Placeholder xs={2} size="xs" />{" "}
      </Placeholder>
    </div>
  );
};

export const SkeletonProductCard = () => {
  return (
    <div className="  row justify-content-center gap-3 ">
      <Placeholder animation="glow" className="d-flex justify-content-center">
        <Placeholder xs={12} lg={3} size="lg" className={style.productCardImage} />
      </Placeholder>
      <Placeholder animation="glow" className="d-flex justify-content-center">
        <Placeholder xs={6} lg={3} size="lg" />
      </Placeholder>
      <Placeholder animation="glow" className="d-flex justify-content-center">
        <Placeholder xs={4} lg={3} size="lg" />
      </Placeholder>
      <Placeholder animation="glow" className="d-flex justify-content-center">
        <Placeholder xs={8} lg={3} size="lg" />
      </Placeholder>
    </div>
  );
};

export const SkeletonBlogCard = () => {
  return (
    <div className="rounded overflow-hidden row gap-2 ">
      <Placeholder animation="glow">
        <Placeholder xs={12} lg={3} size="lg" className={style.articleCardImage} />
      </Placeholder>
      <Placeholder animation="glow">
        <Placeholder xs={4} lg={3} size="lg" />
      </Placeholder>
      <Placeholder animation="glow">
        <Placeholder xs={12} lg={3} size="lg" />
        <Placeholder xs={8} lg={3} size="lg" />
      </Placeholder>
      <Placeholder animation="glow">
        <Placeholder xs={2} size="xs" /> <Placeholder xs={2} size="xs" /> <Placeholder xs={2} size="xs" />{" "}
      </Placeholder>
    </div>
  );
};

export const SkeletonVideoCard = () => {
  return (
    <div className="rounded overflow-hidden row gap-2 ">
      <Placeholder animation="glow">
        <Placeholder xs={12} lg={3} size="lg" className={style.articleCardImage} />
      </Placeholder>
      <Placeholder animation="glow">
        <Placeholder xs={4} lg={3} size="lg" />
      </Placeholder>
      <Placeholder animation="glow">
        <Placeholder xs={12} lg={3} size="lg" />
        <Placeholder xs={8} lg={3} size="lg" />
      </Placeholder>
      <Placeholder animation="glow" className="mt-3">
        <Placeholder xs={12} size="xs" />
      </Placeholder>
    </div>
  );
};

export const SkeletonBookCard = () => {
  return (
    <div className="rounded overflow-hidden row gap-2 ">
      <Placeholder animation="glow">
        <Placeholder xs={12} lg={3} size="lg" className={style.articleCardImage} />
      </Placeholder>
      <Placeholder animation="glow">
        <Placeholder xs={4} lg={3} size="lg" />
      </Placeholder>
      <Placeholder animation="glow">
        <Placeholder xs={12} lg={3} size="lg" />
        <Placeholder xs={8} lg={3} size="lg" />
      </Placeholder>
      <Placeholder animation="glow" className="mt-3">
        <Placeholder xs={12} size="lg" />
        <Placeholder xs={12} size="lg" />
      </Placeholder>
    </div>
  );
};

// grid
export const GridSkeletonArticleCard = () => {
  return (
    <section className="row g-4 g-md-5">
      {Array.from({ length: 9 }).map((item, idx) => (
        <div className="col-12 col-md-4 col-lg-4" key={idx}>
          <SkeletonArticleCard />
        </div>
      ))}
    </section>
  );
};

export const GridSkeletonBlogCard = () => {
  return (
    <section className="row g-4 g-md-5">
      {Array.from({ length: 9 }).map((item, idx) => (
        <div className="col-12 col-md-4 col-lg-4" key={idx}>
          <SkeletonBlogCard />
        </div>
      ))}
    </section>
  );
};

export const GridSkeletonVideoCard = () => {
  return (
    <section className="row g-4 g-md-5">
      {Array.from({ length: 9 }).map((item, idx) => (
        <div className="col-12 col-md-4 col-lg-4" key={idx}>
          <SkeletonVideoCard />
        </div>
      ))}
    </section>
  );
};

export const GridSkeletonBookCard = () => {
  return (
    <section className="row g-4 g-md-5">
      {Array.from({ length: 9 }).map((item, idx) => (
        <div className="col-12 col-md-4 col-lg-4" key={idx}>
          <SkeletonBookCard />
        </div>
      ))}
    </section>
  );
};

export const SkeletonApplicationCard = () => {
  return (
    <div className="rounded overflow-hidden row gap-2 ">
      <Placeholder animation="glow">
        <Placeholder xs={12} lg={3} size="lg" className={style.articleCardImage} />
      </Placeholder>
      <Placeholder animation="glow">
        <Placeholder xs={4} lg={3} size="lg" />
      </Placeholder>
      <Placeholder animation="glow">
        <Placeholder xs={12} lg={3} size="lg" />
        <Placeholder xs={8} lg={3} size="lg" />
      </Placeholder>
      <Placeholder animation="glow">
        <Placeholder xs={2} size="xs" /> <Placeholder xs={2} size="xs" /> <Placeholder xs={2} size="xs" />{" "}
      </Placeholder>
    </div>
  );
};

export const SkeletonProductCarousel = () => {
  return (
    <div className="row g-4">
      {Array.from({ length: 4 }).map((item) => (
        <div className="col-12 col-md-3" key={crypto.randomUUID()}>
          <SkeletonProductCard />
        </div>
      ))}
    </div>
  );
};

//home
export const SkeletonCarouselHero = () => {
  return (
    <div className="row gap-2 p-0 mx-0">
      <Placeholder animation="glow" className="p-0">
        <Placeholder xs={12} lg={3} size="lg" className={style.carouselHero} />
      </Placeholder>
    </div>
  );
};

export const SkeletonCarouselBrands = () => {
  return (
    <div className="rounded overflow-hidden row gap-2  py-5 mx-0">
      <Placeholder animation="glow" className={`${style.centerElement} pb-4`}>
        <Placeholder xs={12} md={6} lg={4} size="lg" />
      </Placeholder>
      <SkeletonProductCarousel />
    </div>
  );
};

export const SkeletonCarouselApplications = () => {
  return (
    <div className={style.carouselApplications}>
      <div className="container">
        <div className="row g-4">
          {Array.from({ length: 4 }).map((_) => (
            <div className="col-12 col-md-3 " key={crypto.randomUUID()}>
              <SkeletonApplicationCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SkeletonSectionCard = () => {
  return (
    <div className={style.sectionCard}>
      <div className="container">
        <div className="row g-4">
          {Array.from({ length: 2 }).map((_) => (
            <div className="col-12  " key={crypto.randomUUID()}>
              <div className="rounded overflow-hidden row gap-2 ">
                <Placeholder animation="glow" className="">
                  <Placeholder xs={12} lg={3} size="lg" className={style.sectionCardContent} />
                </Placeholder>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SkeletonPromotion = () => {
  return (
    <div className="row gap-2 p-0 mx-0">
      <Placeholder animation="glow" className="p-0">
        <Placeholder xs={12} lg={3} size="lg" className={style.carouselHero} />
      </Placeholder>
    </div>
  );
};

export const SkeletonArticlesCarousel = () => {
  return (
    <div className="container py-5">
      <div className="rounded overflow-hidden row gap-2  py-5 mx-0">
        <Placeholder animation="glow" className={`${style.centerElement} pb-4`}>
          <Placeholder xs={12} md={6} lg={4} size="lg" />
        </Placeholder>
        <div className="row g-4">
          {Array.from({ length: 3 }).map((item) => (
            <div className="col-12 col-md-4" key={crypto.randomUUID()}>
              <SkeletonArticleCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SkeletonYoutubeIframe = () => {
  return (
    <div className={`${style.youtubeIframe}`}>
      <div className={` container py-5 align-items-center justify-content-center`} style={{ maxWidth: 1200 }}>
        <div className="py-5">
          <Placeholder animation="glow" className={`${style.centerElement} pb-4`}>
            <Placeholder xs={12} md={6} lg={4} size="lg" />
          </Placeholder>
          <div className="row gap-3 gap-md-0 pt-5 align-items-center">
            <div className="col-12 col-md-6">
              <Placeholder animation="glow">
                <Placeholder xs={12} md={12} size="lg" className={`${style.iframeActive} pb-4 mt-3`} />
              </Placeholder>
            </div>
            <div className="col-12 col-md-6 ">
              <Placeholder animation="glow">
                <Placeholder xs={12} md={12} size="lg" className={`${style.iframeItem} pb-4 mb-3`} />
              </Placeholder>
              <Placeholder animation="glow">
                <Placeholder xs={12} md={12} size="lg" className={`${style.iframeItem} pb-4 mb-3`} />
              </Placeholder>
              <Placeholder animation="glow">
                <Placeholder xs={12} md={12} size="lg" className={`${style.iframeItem} pb-4 mb-3`} />
              </Placeholder>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonMostView = () => {
  return (
    <div className="container py-5 align-items-center justify-content-center">
      <div className="py-5">
        <Placeholder animation="glow" className={`${style.centerElement} pb-5`}>
          <Placeholder xs={12} md={6} lg={4} size="lg" />
        </Placeholder>
        <div className="row gap-3 gap-md-0 pt-5 align-items-center">
          <div className="col-12 col-md-3 ">
            <Placeholder animation="glow">
              <Placeholder xs={12} md={12} size="lg" className={`${style.mostViewCircle} pb-4 mb-3`} />
            </Placeholder>
            <Placeholder animation="glow">
              <Placeholder xs={12} md={12} size="lg" className={`${style.mostViewCategory}  mb-3`} />
            </Placeholder>
            <Placeholder animation="glow">
              <Placeholder xs={12} md={12} size="lg" className={`${style.mostViewDescription} pb-4 mb-2 `} />
              <Placeholder xs={12} md={12} size="lg" className={`${style.mostViewDescription} pb-4 `} />
            </Placeholder>
          </div>
          <div className="col-12 col-md-3 ">
            <Placeholder animation="glow">
              <Placeholder xs={12} md={12} size="lg" className={`${style.mostViewCircle} pb-4 mb-3`} />
            </Placeholder>
            <Placeholder animation="glow">
              <Placeholder xs={12} md={12} size="lg" className={`${style.mostViewCategory}  mb-3`} />
            </Placeholder>
            <Placeholder animation="glow">
              <Placeholder xs={12} md={12} size="lg" className={`${style.mostViewDescription} pb-4 mb-2 `} />
              <Placeholder xs={12} md={12} size="lg" className={`${style.mostViewDescription} pb-4 `} />
            </Placeholder>
          </div>
          <div className="col-12 col-md-3 ">
            <Placeholder animation="glow">
              <Placeholder xs={12} md={12} size="lg" className={`${style.mostViewCircle} pb-4 mb-3`} />
            </Placeholder>
            <Placeholder animation="glow">
              <Placeholder xs={12} md={12} size="lg" className={`${style.mostViewCategory}  mb-3`} />
            </Placeholder>
            <Placeholder animation="glow">
              <Placeholder xs={12} md={12} size="lg" className={`${style.mostViewDescription} pb-4 mb-2 `} />
              <Placeholder xs={12} md={12} size="lg" className={`${style.mostViewDescription} pb-4 `} />
            </Placeholder>
          </div>
          <div className="col-12 col-md-3 ">
            <Placeholder animation="glow">
              <Placeholder xs={12} md={12} size="lg" className={`${style.mostViewCircle} pb-4 mb-3`} />
            </Placeholder>
            <Placeholder animation="glow">
              <Placeholder xs={12} md={12} size="lg" className={`${style.mostViewCategory}  mb-3`} />
            </Placeholder>
            <Placeholder animation="glow">
              <Placeholder xs={12} md={12} size="lg" className={`${style.mostViewDescription} pb-4 mb-2 `} />
              <Placeholder xs={12} md={12} size="lg" className={`${style.mostViewDescription} pb-4 `} />
            </Placeholder>
          </div>
        </div>
      </div>
    </div>
  );
};
