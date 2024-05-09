import { NextBreadcrumb } from "@/components/NextBreadcrumb";
import { Title } from "@/components/Title";
import { cookies } from "next/headers";
import Image from "next/image";
import { BsEnvelopeAt } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FiFileText } from "react-icons/fi";

import style from "./style.module.css";
import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { ExpertsCarousel } from "@/components/ExpertsCarousel";
import { Pagination } from "@/components/Pagination";
import { getSingleExpertPage, getOursExperts } from "@/services/api";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const slug = params.experto;
  const { data, error } = await getSingleExpertPage(slug, language);
  const experts = await getOursExperts(language);

  if (error) {
    return notFound();
  }
  return (
    <main>
      <section className="bg-gray py-4">
        <div className="container">
          <NextBreadcrumb className="breadcrumbDark py-3" />
          <div className={`text-center d-lg-flex  justify-content-center align-items-center py-5 ${style.gapHero}`}>
            <Image src={data.imagen} width={241} height={241} alt="author image " />
            <div>
              <Title level={1} align="centerMobileAndLeftDesktop" className="pb-24">
                {data.title}
              </Title>
              <p>{data.ocupation}</p>
              <div className="d-flex gap-4 justify-content-center justify-content-lg-start">
                <Link target="_blank" href="#" className={style.socialIcon}>
                  <BsEnvelopeAt size={24} />
                </Link>
                <Link target="_blank" href="#" className={style.socialIcon}>
                  <FaLinkedinIn size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="row container gap-3 mb-5 my-md-5">
        <div className={`col-12 col-lg-3`}>
          <div className={` py-5 px-1 px-md-4 ${style.profile}`}>
            <h2 className={style.title}>Sobre Mi</h2>
            <p className={style.about}>{data.description}</p>
            <p className={style.ubication}>
              <SlLocationPin color="#0DA600" /> {data.country}
            </p>
            <hr className="border" />
            <h2 className={style.title}>Temas de interés</h2>
            <div className={style.tags}>
              {data.interests.map((item) => (
                <p key={item} className={style.tag}>
                  #{item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <div className={`bg-gray rounded-3 mb-5 ${style.quantityArticles}`}>
            <p className={`d-flex align-items-center gap-2 text-2xl lg:text-5xl mb-0 `}>
              <span className={style.quantityArticlesNumber}>{data.countPost}</span>
              <FiFileText size={30} color="#0033a1" />
            </p>
            <p className="text-sm lg:text-md">Artículos escritos</p>
          </div>
          <Title level={2} align="centerMobileAndLeftDesktop" className="pb-24">
            Artículos escritos
          </Title>
          {data.posts.length > 0 && (
            <div className="row g-3 mb-3">
              {data.posts.map((item) => (
                <div key={item.id} className="col-12 col-lg-6">
                  <BlogCard
                    image={""}
                    category={item.category[0].title}
                    title={item.title}
                    slug={""}
                    description={"resumen"}
                    tags={item.tags}
                    author={item.autor}
                  />
                </div>
              ))}
            </div>
          )}

          {/* <Pagination totalPages={5} page={1} /> */}
        </div>
      </section>

      <section className="position-relative py-56 lg:py-96 bg-gray">
        <div className="container">
          <Title level={2} align="center" className="text-2xl lg:text-5xl">
            Nuestros expertos
          </Title>
          <ExpertsCarousel experts={experts.data} />
        </div>
      </section>
    </main>
  );
}
