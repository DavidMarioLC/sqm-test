import { ImageBanner } from "@/components/ImageBanner";
import { RelatedProductsAside } from "@/components/RelatedProductsAside";
import { cookies } from "next/headers";
import parse from "html-react-parser";
import { GridArticlesRelated } from "@/components/GridArticlesRelated";
import { Title } from "@/components/Title";
import { Pagination } from "@/components/Pagination";
import { RelatedVideos } from "@/components/RelatedVideos";
import { ArticlesCarousel } from "@/components/ArticlesCarousel";
import { Button } from "@/components/Button";
import { getYodoPage, getVideosRelatedYodo, getProductRelatedYodo, getArticlesRelatedYodo } from "@/services/api";
import { ClientOnly } from "@/components/ClientOnly";
import { Suspense } from "react";
import { GridSkeletonArticleCard } from "@/components/Skeleton";
import { ProductCarousel } from "@/components/ProductCarousel";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "SQM - Yodo en nutrición vegetal",
};

async function ArticleRelated({ page, limit, language }) {
  const [articlesRelated] = await getArticlesRelatedYodo(page, limit, language);
  return <GridArticlesRelated articles={articlesRelated.Essays} />;
}

export default async function Page({ params, searchParams }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;

  const page = Number(searchParams.page) || 1;
  const limit = searchParams.limit || 12;
  const data = await getYodoPage(country, language);
  const videos = await getVideosRelatedYodo(language);
  const productRelated = await getProductRelatedYodo(country, language);
  const [articlesRelated] = await getArticlesRelatedYodo(page, limit, language);

  const totalElements = articlesRelated.total;
  const totalPages = Math.ceil(totalElements / limit);

  const products = productRelated.map((item) => ({
    id: item.id,
    image: item.image,
    brand: { ...item.crops },
    link: {
      text: "ver producto",
      target: "_self",
      slug: item.slug,
    },
    name: item.title,
  }));

  return (
    <main key={crypto.randomUUID()}>
      <ClientOnly>
        <ImageBanner title={data.banner.title} paragraph={data.banner.subtitle} />
      </ClientOnly>
      <div className="container">
        <section className="row">
          <div className="col-12 col-lg-9 py-5">
            <section>{parse(`${data.firstContent} `)}</section>
          </div>
          <div className="d-none d-lg-block col-lg-3">
            <RelatedProductsAside products={productRelated} />
          </div>
        </section>
      </div>
      {/* articles related */}
      <section className="bg-gray py-56 lg:py-96">
        <div className="container">
          <Title level={2} align="center" className="mb-5">
            Artículos relacionados
          </Title>
          <section className="row g-4">
            <Suspense fallback={<GridSkeletonArticleCard />}>
              <ArticleRelated page={page} limit={limit} language={language} />
            </Suspense>
          </section>
          <div className="pt-5">
            <Pagination totalPages={totalPages} page={page} />
          </div>
        </div>
      </section>
      {/* video related */}
      <section>
        <div className="container py-56 lg:py-96">
          <Title level={2} className="mb-5">
            Videos relacionados
          </Title>
          <RelatedVideos videos={videos} />
        </div>
      </section>
      {/* related articles */}
      <div className="py-56 lg:py-96 position-relative bg-gray d-lg-none">
        <div className="container">
          <Title level={2} align="center" className="text-2xl lg:text-5xl">
            Productos relacionados
          </Title>
          <ProductCarousel data={products} />

          <p className="text-center mt-4">
            <Button variant="solid" color="blue" href={"/articulos"} target="_blank">
              Ver todos los productos
            </Button>
          </p>
        </div>
      </div>
    </main>
  );
}
