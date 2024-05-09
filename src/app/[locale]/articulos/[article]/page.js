import { NextBreadcrumb } from "@/components/NextBreadcrumb";
import { RelatedProductsAside } from "@/components/RelatedProductsAside";
import { cookies } from "next/headers";
import parse from "html-react-parser";
import { Title } from "@/components/Title";
import Image from "next/image";
import style from "./style.module.css";
import { Button } from "@/components/Button";
import { BsDownload } from "react-icons/bs";
import { BsShare } from "react-icons/bs";

import { ArticlesCarousel } from "@/components/ArticlesCarousel";
import { ProductCarousel } from "@/components/ProductCarousel";
import { getSingleArticlePageDesktop, getSingleArticlePageMobile, getSingleRelatedArticle, getSingleRelatedProduct } from "@/services/api";

import { SocialShareButtons } from "@/components/SocialShareButtons";
import { ShareButtonTooltip } from "@/components/ShareButtonTooltip";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const slug = params.article;
  const singleDesktop = await getSingleArticlePageDesktop(slug, country, language);
  const singleMobile = await getSingleArticlePageMobile(slug, country, language);
  const relatedArticles = await getSingleRelatedArticle(slug, country, language);
  const relatedProducts = await getSingleRelatedProduct(slug, country, language);
  const pdf = `${process.env.SQM_API_URL}/pdf/pdf-articles?articulo=${slug}&wpml_language=${language}`;

  if (singleDesktop.error || singleMobile.error) {
    notFound();
  }

  return (
    <main>
      <div className="container pt-3">
        <NextBreadcrumb className="breadcrumbDark" />
        <div className="row py-5">
          <div className="col-12 col-lg-9">
            {/* mobile */}
            <div className="d-lg-none">
              <Title level={1} className="">
                {singleMobile.data.title}
              </Title>
              {/* download and shared */}
              <div className="pt-3 d-flex gap-3">
                <div className="text-center  d-inline-flex flex-column align-items-center">
                  <Button variant="outline" color="blue" href={""} isOnlyIcon>
                    <BsDownload size={18} />
                  </Button>
                  <p>Descargar</p>
                </div>
                <div className="text-center d-inline-flex flex-column  align-items-center">
                  <Button variant="outline" color="blue" href={""} isOnlyIcon>
                    <BsShare size={18} />
                  </Button>
                  Compartir
                </div>
              </div>
              <hr className="border" />
              {/* editor */}
              <section className="py-5 ">{parse(`${singleMobile.data.content} `)}</section>
            </div>
            {/* desktop */}
            <div className="d-none d-lg-block">
              {/* image */}
              <Image
                src={singleDesktop.data.image}
                width={830}
                height={448}
                alt="title single"
                className={`mb-5 img-fluid  overflow-hidden rounded-5`}
              />
              {/* title */}
              <Title level={1} className="pb-5">
                {singleDesktop.data.title}
              </Title>
              {/* extract */}
              <section>{parse(`${singleDesktop.data.resume}`)}</section>
              {/* download and shared */}
              <div className="py-5 d-flex gap-3">
                <div className="text-center  d-inline-flex flex-column align-items-center">
                  <Button variant="outline" color="blue" href={pdf} isOnlyIcon>
                    <BsDownload size={18} />
                  </Button>
                  <p>Descargar</p>
                </div>
                <div className="text-center d-inline-flex flex-column  align-items-center">
                  <ShareButtonTooltip />
                </div>
              </div>
              {/* editor */}
              <section className={`py-5 ${style.content}`}>{parse(`${singleDesktop.data.content}`)}</section>
            </div>
            {/* details socials */}
            <div className="text-center pb-4">
              <p className="fw-bold">Compartir</p>
              <SocialShareButtons />
            </div>
            <div className="border-top border-bottom py-4">
              <p className="fw-bold mb-4">Cultivos relacionados</p>
              <div className="d-flex gap-2">
                {singleDesktop.data.crops.map((item) => (
                  <img key={item.id} src={item.image ? item.image : ""} className={style.imageRelatedCrop} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <p className="fw-bold mb-4">Etiquetas</p>
              <div className="d-flex gap-2 flex-wrap">
                {singleDesktop.data.keywords.map((item) => (
                  <p key={item.id} className={style.tag}>
                    {" "}
                    # {item.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className=" d-none col-lg-3 d-lg-block">
            <RelatedProductsAside products={relatedProducts.data} />
          </div>
        </div>
      </div>
      {/* related articles */}
      <div className="py-56 lg:py-96 position-relative bg-gray">
        <div className="container">
          <Title level={2} align="center" className="text-2xl lg:text-5xl">
            Artículos relacionados
          </Title>

          <ArticlesCarousel articles={relatedArticles.data} />

          <p className="text-center">
            <Button variant="solid" color="blue" href={"/articulos"}>
              Ver todos los artículos
            </Button>
          </p>
        </div>
      </div>
      {/* related product */}
      <section className="position-relative py-56 lg:py-96 d-lg-none">
        <div className="container">
          <Title level={2} align="center" className="text-2xl lg:text-5xl">
            Productos relacionados
          </Title>
          <ProductCarousel data={relatedProducts.data} />
          <p className="text-center pt-24 col-12 col-md-8 col-lg-auto">
            <Button variant="solid" color="blue" href="#">
              Ver todos los productos
            </Button>
          </p>
        </div>
      </section>
    </main>
  );
}
