import { ApplicationCarousel } from "@/components/ApplicationCarousel";
import { BrandsCarousel } from "@/components/BrandsCarousel";
import { Button } from "@/components/Button";
import { CampaignBanner } from "@/components/CampaignBanner";
import { FeaturedArticlesCarousel } from "@/components/FeaturedArticlesCarousel";
import { HeroCarousel } from "@/components/HeroCarousel";
import { InformationCard } from "@/components/InformationCard";
import { MostViewCard } from "@/components/MostViewCard";
import { RelatedVideos } from "@/components/RelatedVideos";
import {
  SkeletonApplicationCard,
  SkeletonArticlesCarousel,
  SkeletonCarouselBrands,
  SkeletonCarouselHero,
  SkeletonMostView,
  SkeletonPromotion,
  SkeletonSectionCard,
  SkeletonYoutubeIframe,
} from "@/components/Skeleton";
import { Title } from "@/components/Title";
import {
  getApplicationCarousel,
  getMostViewArticles,
  getBrandsCarousel,
  getCampaignBanner,
  getFeaturedArticles,
  getFeaturedVideos,
  getHeroCarousel,
  getInformationCards,
} from "@/services/api";
import { cookies } from "next/headers";
import { Suspense } from "react";

async function RSCHeroCarousel({ country, language }) {
  const data = await getHeroCarousel(country, language);
  return <HeroCarousel data={data} />;
}

async function RSCBrandsCarousel({ country, language }) {
  const data = await getBrandsCarousel(country, language);
  return (
    <section className="py-56 lg:pb-96 lg:pt-48 position-relative">
      <div className="container">
        <Title level={2} align="center" className="text-2xl lg:text-5xl">
          {data.title}
        </Title>
        <BrandsCarousel data={data.items} />
      </div>
    </section>
  );
}

async function RSCApplicationCarousel({ country, language }) {
  const data = await getApplicationCarousel(country, language);
  return (
    <section className="py-56 lg:py-96 bg-gray position-relative">
      <div className="container">
        <div className="d-flex justify-content-between">
          <Title level={2} className="fw-bold text-xl lg:text-2xl">
            {data.title}
          </Title>

          <Button variant="ghost" color="green" href={"/aplicaciones"} className=" flex-shrink-0" target={data.link.target}>
            {data.link.text}
          </Button>
        </div>

        <ApplicationCarousel data={data.items} />
      </div>
    </section>
  );
}

async function RSCInformationCard({ country, language }) {
  const data = await getInformationCards(country, language);
  const data1 = data[0];
  const data2 = data[1];

  return (
    <section className="py-56 lg:py-96">
      <div className="container  vstack gap-5  align-items-center">
        <InformationCard
          imageSrc={data1.image}
          title={data1.title}
          description={data1.description}
          link={{ url: "`/yodo-en-nutricion-vegetal`", text: data1.link.text }}
        />

        <InformationCard
          key={data2.id}
          imageSrc={data2.image}
          title={data2.title}
          description={data2.description}
          link={{ url: `/bayas`, text: data2.link.text }}
        />
      </div>
    </section>
  );
}

async function RSCCampaignBanner({ country, language }) {
  const data = await getCampaignBanner(country, language);

  return (
    <CampaignBanner
      backgroundImage={data.backgroundImage}
      productImage={data.productImage}
      productName={data.productName}
      link={data.link}
      textButton={data.textButton}
    />
  );
}

async function RSCFeaturedArticlesCarousel({ country, language }) {
  const data = await getFeaturedArticles(country, language);

  return (
    <div className="py-56 lg:py-96 position-relative ">
      <div className="container">
        <Title level={2} align="center" className="text-2xl lg:text-5xl">
          {data.title}
        </Title>

        <FeaturedArticlesCarousel articles={data.articles} categories={data.categories} />

        <p className="text-center">
          <Button variant="solid" color="blue" href={"/articulos"} target={data.link.target}>
            {data.link.text}
          </Button>
        </p>
      </div>
    </div>
  );
}

async function RSCRelatedVideo({ country, language }) {
  const data = await getFeaturedVideos(country, language);

  return (
    <section className="py-56 lg:py-96 bg-gray">
      <div className="container list-unstyled">
        <Title level={2} align="center" className="text-2xl lg:text-5xl mb-5">
          {data.title}
        </Title>

        <RelatedVideos videos={data.videos} />
        <p className="d-grid col-md-3 mt-5 mx-auto">
          <Button variant="solid" color="blue" target={data.link.target} href={"/academia-sqm/videos"}>
            {data.link.text}
          </Button>
        </p>
      </div>
    </section>
  );
}

async function RSCMostViewArticles({ country, language }) {
  const data = await getMostViewArticles(country, language);

  return (
    <section className="py-56 lg:py-96 ">
      <div className="container">
        <Title level={2} align="center" className="text-2xl lg:text-5xl mb-24 ">
          {data.title}
        </Title>
        <div className="d-lg-flex gap-3 gap-md-4 mt-md-5 mb-md-4">
          {data.items.map((item) => (
            <MostViewCard key={item.id} link={item.link.url} image={item.image} title={item.title} />
          ))}
        </div>
        <p className="d-grid col-12 col-lg-3 mx-auto">
          {" "}
          <Button variant="solid" color="blue" href={`/articulos`} target={data.link.target}>
            {data.link.text}
          </Button>
        </p>
      </div>
    </section>
  );
}

export default async function Home({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country")?.value || "MX";
  const language = params.locale;

  return (
    <main>
      {/* <RSCHeroCarousel country={country} language={language} />
      <RSCBrandsCarousel country={country} language={language} />
      <RSCApplicationCarousel country={country} language={language} />
      <RSCInformationCard country={country} language={language} />
      <RSCCampaignBanner country={country} language={language} />
      <RSCFeaturedArticlesCarousel country={country} language={language} />
      <RSCRelatedVideo country={country} language={language} />
      <RSCMostViewArticles country={country} language={language} /> */}

      {/* with suspense */}

      <Suspense fallback={<SkeletonCarouselHero />}>
        <RSCHeroCarousel country={country} language={language} />
      </Suspense>
      <Suspense fallback={<SkeletonCarouselBrands />}>
        <RSCBrandsCarousel country={country} language={language} />
      </Suspense>
      <Suspense fallback={<SkeletonApplicationCard />}>
        <RSCApplicationCarousel country={country} language={language} />
      </Suspense>
      <Suspense fallback={<SkeletonSectionCard />}>
        <RSCInformationCard country={country} language={language} />
      </Suspense>
      <Suspense fallback={<SkeletonPromotion />}>
        <RSCCampaignBanner country={country} language={language} />
      </Suspense>
      <Suspense fallback={<SkeletonArticlesCarousel />}>
        <RSCFeaturedArticlesCarousel country={country} language={language} />
      </Suspense>
      <Suspense fallback={<SkeletonYoutubeIframe />}>
        <RSCRelatedVideo country={country} language={language} />
      </Suspense>
      <Suspense fallback={<SkeletonMostView />}>
        <RSCMostViewArticles country={country} language={language} />
      </Suspense>
    </main>
  );
}
