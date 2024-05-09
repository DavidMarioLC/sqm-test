import { Search } from "@/components/Search";
import { TitleWithUnderlineBanner } from "@/components/TitleWithUnderlineBanner";
import style from "./style.module.css";
import { cookies } from "next/headers";
import { ListArticles } from "@/components/ListArticles";
import { BrandLogosCarousel } from "@/components/BrandLogosCarousel";
import { Title } from "@/components/Title";
import { ClientOnly } from "@/components/ClientOnly";
import { getBrandLogos } from "@/services/api";
export const metadata = {
  title: "SQM - Articulos",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const brandLogos = await getBrandLogos(country, language);
  const brand = brandLogos[0];

  return (
    <main>
      <TitleWithUnderlineBanner title="Artículos y ensayos" />
      <section className={style.maxWidthSearch}>
        <Search />
      </section>
      <section className="container py-3 py-md-5">
        <hr className="border d-none d-lg-block" />
        <ClientOnly>
          <ListArticles country={country} language={language} />
        </ClientOnly>
      </section>
      <section className="py-56 lg:py-96 position-relative bg-gray">
        <div className="container container-brand-logos">
          <Title level={2} align="center" className="text-2xl lg:text-5xl">
            {brand.title}
          </Title>
          <BrandLogosCarousel data={brand.brands} />
        </div>
      </section>
    </main>
  );
}
