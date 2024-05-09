import { ArticlesCarousel } from "@/components/ArticlesCarousel";
import { Button } from "@/components/Button";
import { ClientOnly } from "@/components/ClientOnly";
import { Compatibility } from "@/components/Compatibility";
import { ContactBanner } from "@/components/ContactBanner";
import { DistributorBanner } from "@/components/DistributorBanner/DistributorBanner";
import { NextBreadcrumb } from "@/components/NextBreadcrumb";
import { ProductCarousel } from "@/components/ProductCarousel";
import { ProductDetailSingle } from "@/components/ProductDetailSingle";
import { RelatedVideos } from "@/components/RelatedVideos";
import { Title } from "@/components/Title";
import {
  getContactBanner,
  getArticlesRelated,
  getVideosRelated,
  getDistributorBanner,
  getRelatedProducts,
  getProductDetails,
  getCompatibility,
} from "@/services/api";

import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const slug = params.producto;

  const { data, error } = await getProductDetails(slug, country, language);

  const product = data[0];

  return {
    title: product.productName,
    description: product.productDescription,
  };
}

async function RSCContactBanner({ language }) {
  const data = await getContactBanner(language);
  return <ContactBanner data={data} />;
}

async function RSCgetArticlesRelated({ product, country, language }) {
  const data = await getArticlesRelated(product, country, language);
  const articleSection = data[0];
  return (
    data.length > 0 && (
      <section className="position-relative py-56 lg:py-96">
        <div className="container">
          <Title level={2} align="center" className="text-2xl lg:text-5xl">
            {articleSection.title}
          </Title>
          <ArticlesCarousel articles={articleSection.articles} />
          <p className="col-12 col-md-8 col-lg-auto text-center">
            <Button variant="solid" color="blue" href="/articulos">
              {articleSection.link.text}
            </Button>
          </p>
        </div>
      </section>
    )
  );
}

async function RSCRelatedVideo({ product, country, language }) {
  const data = await getVideosRelated(product, country, language);
  const RelatedVideoSection = data[0];

  return (
    data.length > 0 && (
      <section className="py-56 lg:py-96 bg-gray">
        <div className="container list-unstyled">
          <Title level={2} className="text-2xl lg:text-5xl mb-5">
            {RelatedVideoSection.title}
          </Title>

          <RelatedVideos videos={RelatedVideoSection.videos} />
          <p className="d-grid col-md-3 mt-5 mx-auto">
            <Button variant="solid" color="blue">
              {/* {t("Button", { name: "viewMoreVideos" })} */}
            </Button>
          </p>
        </div>
      </section>
    )
  );
}

async function RSCDistributorBanner({ country, language }) {
  const data = await getDistributorBanner(country, language);

  return <DistributorBanner imageMobile={data.imageMovil} imageDesktop={data.image} title={data.title} link={data.link} />;
}

async function RSCRelatedProducts({ product, country, language }) {
  const data = await getRelatedProducts(product, country, language);

  const relatedProducts = data[0];
  return (
    data.length > 0 && (
      <section className="position-relative py-56 lg:py-96">
        <div className="container">
          <Title level={2} align="center" className="text-2xl lg:text-5xl">
            {relatedProducts.title}
          </Title>
          <ProductCarousel data={relatedProducts.items} />
          <p className="text-center pt-24 col-12 col-md-8 col-lg-auto">
            <Button variant="solid" color="blue" href="#">
              {/* {t("viewAllProducts")} */}
              ver todos los productos
            </Button>
          </p>
        </div>
      </section>
    )
  );
}

async function RSCCompatibility({ product, productName, productImage, country, language }) {
  const options = await getCompatibility(product, country, language);

  return (
    options?.length > 0 && (
      <Compatibility
        productSlug={product}
        productName={productName}
        productImage={productImage}
        options={options}
        country={country}
        language={language}
      />
    )
  );
}

export default async function Producto({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const product = params.producto;

  const { data: productInfo, error } = await getProductDetails(product, country, language);
  if (error) {
    notFound();
  }
  const pdf = `${process.env.SQM_API_URL}/pdf/pdf-products?product=${product}&wpml_language=${language}`;

  return (
    <main>
      {/* product detail */}
      <ClientOnly>
        <ProductDetailSingle pdf={pdf} data={productInfo[0]} />
      </ClientOnly>
      {/* compatibility */}
      <RSCCompatibility
        product={product}
        productName={productInfo[0]?.productName}
        productImage={productInfo[0]?.productImage}
        country={country}
        language={language}
      />
      {/* related products */}
      <RSCRelatedProducts product={product} country={country} language={language} />
      {/* banner distribuitor */}
      <RSCDistributorBanner product={product} country={country} language={language} />
      {/* related video */}
      <RSCRelatedVideo product={product} country={country} language={language} />
      {/* articles related */}
      <RSCgetArticlesRelated product={product} country={country} language={language} />
      {/* banner contact*/}
      <RSCContactBanner language={language} />
    </main>
  );
}
