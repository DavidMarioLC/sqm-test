import { ColorBanner } from "@/components/ColorBanner";
import { DistributorMap } from "@/components/DistributorsMap";
import { getCountryAndCities, getBannerDistributor, getDistributors } from "@/services/api";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "SQM - Distribuidores",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;

  const language = params.locale;

  const data = await getCountryAndCities(country, language);

  const currentCountry = data[0].country;

  const cities = data[0].cities;

  const banner = await getBannerDistributor(language);

  const initialDistribuitors = await getDistributors(currentCountry.code, "all", language);

  const initialActiveDistribuitor = initialDistribuitors[0];
  return (
    <main key={crypto.randomUUID()}>
      <ColorBanner title={banner.titulo} paragraph={banner.subtitulo} color={banner.color} />
      <section className="container">
        {data.length > 0 ? (
          <DistributorMap
            initialActiveDistribuitor={initialActiveDistribuitor}
            initialDistribuitors={initialDistribuitors}
            country={currentCountry}
            cities={cities}
            language={language}
          />
        ) : (
          <p>su pais no tiene distribuidores</p>
        )}
      </section>
    </main>
  );
}
