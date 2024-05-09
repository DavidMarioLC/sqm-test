import { Button } from "@/components/Button";
import { NextBreadcrumb } from "@/components/NextBreadcrumb";
import { cookies } from "next/headers";
import Image from "next/image";
import { FiFileText } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";

import parse from "html-react-parser";
import style from "./style.module.css";
import { IoCalendarOutline, IoTimeOutline } from "react-icons/io5";

import { Title } from "@/components/Title";
import { NewRelatedCarousel } from "@/components/NewRelatedCarousel";
import { getSingleBlogPage, getSingleBlogRelatedNew, getPDFBlog } from "@/services/api";
import { notFound } from "next/navigation";
import { SocialShareButtons } from "@/components/SocialShareButtons";
import { ShareButtonTooltip } from "@/components/ShareButtonTooltip";

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const slug = params.post;
  const { json, error } = await getSingleBlogPage(slug, country, language);
  const data = json[0];
  const relatedNew = await getSingleBlogRelatedNew(slug, language);
  const pdf = `${process.env.SQM_API_URL}/pdf/pdf-blogs?blog=${slug}&wpml_language=${language}`;

  if (error) {
    notFound();
  }

  return (
    <main>
      <div className="container">
        <NextBreadcrumb className="breadcrumbDark py-5" />
        {data.category && (
          <p className={`${style.category} ${style["noticias"]}`}>
            <FiFileText size={18} /> {data.category}
          </p>
        )}

        <h1 className={` text-3xl lg:text-6xl fw-bold mb-4 mb-md-5 ${style.title}`}>{data.title}</h1>
      </div>
      <Image src={data.image ? data.image : "/single-post.png"} width={1024} height={500} alt="testing image" priority className="img-fluid w-100" />
      <section className={style.containerSingleBlog}>
        <div className="pt-5 pb-3">
          <div className="d-flex gap-4">
            {data.date && (
              <p className={`d-flex gap-2 align-items-center `}>
                <IoCalendarOutline className={style.iconCalendar} size={18} />
                <time className="text-md lg:text-lg">{data.date}</time>
              </p>
            )}
            {data.timeRead && (
              <p className={`d-flex gap-2 align-items-center text-md lg:text-lg`}>
                <IoTimeOutline className={style.iconTime} size={18} />
                {data.timeRead}
              </p>
            )}
          </div>
          <div className="d-flex gap-2">
            {data?.autor[0]?.image && (
              <Image
                className={style.authorImage}
                src={data?.autor[0]?.image ? data.autor[0].image : ""}
                width={56}
                height={56}
                alt={data?.autor[0]?.title ? data.autor[0].title : " nombre del autor"}
              />
            )}

            <div className="d-flex flex-column gap-2">
              <p className={`${style.authorName} text-md lg:text-lg fw-bold`}>{data?.autor[0]?.name}</p>
              <p className={`${style.authorOcupation} text-sm lg:text-md`}>{data?.autor[0]?.ocupation}</p>
            </div>
          </div>
          <hr className="border" />
        </div>

        <div className="pb-3 d-flex gap-3">
          <div className="text-center  d-inline-flex flex-column align-items-center">
            <Button variant="outline" color="blue" href={pdf} download="page.pdf" isOnlyIcon>
              <BsDownload size={18} />
            </Button>
            <p>Descargar</p>
          </div>
          <div className="text-center d-inline-flex flex-column  align-items-center">
            <ShareButtonTooltip />
          </div>
        </div>
        <section className={style.content}>{parse(`${data.content}`)}</section>
        <div className="text-center pb-4 pt-md-5 mb-5">
          <p className="fw-bold">Compartir</p>
          <SocialShareButtons />
        </div>
      </section>
      {/* related articles */}
      <div className="py-56 lg:py-96 position-relative bg-gray">
        <div className="container">
          <Title level={2} align="center" className="text-2xl lg:text-5xl">
            Noticias relacionadas
          </Title>

          <NewRelatedCarousel data={relatedNew.data} />

          <p className="text-center">
            <Button variant="solid" color="blue" href={"/articulos"} target="_blank">
              Ver todas las noticias
            </Button>
          </p>
        </div>
      </div>
    </main>
  );
}
