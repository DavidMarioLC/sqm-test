import { cookies } from "next/headers";
import { ImageBanner } from "@/components/ImageBanner";
import { RelatedProductsAside } from "@/components/RelatedProductsAside";
import { Title } from "@/components/Title";
import { AccordionCrops } from "@/components/AccordionCrops";
import { RelatedVideos } from "@/components/RelatedVideos";
import { ArticlesCarousel } from "@/components/ArticlesCarousel";
import { Button } from "@/components/Button";
import { ProductCarousel } from "@/components/ProductCarousel";
import { getSingleCrop, getSingleCroopRelatedArticles, getSingleCroopRelatedVideos, getSingleCroopRelatedProducts } from "@/services/api";
import { ClientOnly } from "@/components/ClientOnly";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const slug = params.cultivo;

  const { data: singleCroop, error } = await getSingleCrop(slug, country, language);

  if (error) {
    notFound();
  }
  const relatedArticles = await getSingleCroopRelatedArticles(slug, language);
  const relatedVideos = await getSingleCroopRelatedVideos(slug, language);
  const relatedProducts = await getSingleCroopRelatedProducts(slug, country, language);

  return (
    <main>
      <ClientOnly>
        <ImageBanner title={singleCroop.title} paragraph={singleCroop.subtitle} image={singleCroop.background} />
      </ClientOnly>
      <div className="container">
        <div className="row">
          {/* content */}
          <section className="col-12 col-lg-9 flex-column gap-5 py-48">
            <p className="text-md lg:text-lg text-gray-dark">{singleCroop.description}</p>

            {/* accordion */}
            {singleCroop.accordeon.length > 0 && <AccordionCrops items={singleCroop.accordeon} />}
          </section>

          {/* related products desktop */}
          {relatedProducts.length > 0 && (
            <section className="col-3 position-relative d-none d-lg-block">
              <RelatedProductsAside products={relatedProducts} />
            </section>
          )}
        </div>
      </div>
      {/* related articles */}
      {relatedArticles.length > 0 && (
        <div className="py-56 lg:py-96 position-relative bg-gray">
          <div className="container">
            <Title level={2} align="center" className="text-2xl lg:text-5xl">
              Artículos relacionados
            </Title>

            <ArticlesCarousel articles={relatedArticles} />

            <p className="text-center">
              <Button variant="solid" color="blue" href={"/articulos"} target="_blank">
                Ver todos los artículos
              </Button>
            </p>
          </div>
        </div>
      )}

      {/* related videos */}
      {relatedVideos.length > 0 && (
        <section>
          <div className="container py-56 lg:py-96">
            <Title level={2} className="mb-5">
              Videos relacionados
            </Title>
            <RelatedVideos videos={relatedVideos} />
          </div>
        </section>
      )}

      {/* related products mobile */}
      <section className="position-relative py-56 lg:py-96 d-lg-none bg-gray">
        <div className="container">
          <Title level={2} align="center" className="text-2xl lg:text-5xl">
            Productos relacionados
          </Title>
          <ProductCarousel data={relatedProducts} />
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
