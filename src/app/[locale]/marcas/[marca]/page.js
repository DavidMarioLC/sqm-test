import { BrandBanner } from "@/components/BrandBanner";
import { getBrandBannerAndDescription, getBrandProductLine, getBrandProductList, getBrandLogos } from "@/services/api";
import { cookies } from "next/headers";
import parse from "html-react-parser";
import { ProductLineCarousel } from "@/components/ProductLineCarousel";
import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import { ProductCarousel } from "@/components/ProductCarousel";
import { BrandLogosCarousel } from "@/components/BrandLogosCarousel";
import { notFound } from "next/navigation";

export default async function Marca({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const brand = params.marca;

  const { data: dataBannerAndDescription, error } = await getBrandBannerAndDescription(brand, country, language);

  if (error) {
    notFound();
  }

  const dataProductLine = await getBrandProductLine(brand, country, language);
  const productList = await getBrandProductList(brand, country, language);
  const brandLogos = await getBrandLogos(country, language);
  const sectionBrand = brandLogos[0];

  return (
    <main>
      <BrandBanner background={dataBannerAndDescription.background} logo={dataBannerAndDescription.logoGris} title={dataBannerAndDescription.title} />

      <section className="py-24 lg:py-48">
        <div className="container border-bottom pb-24">
          <h2 className="fw-bold text-lg lg:text-xl text-md-center ">{dataProductLine.title}</h2>
          <ProductLineCarousel data={dataProductLine.items} brand={brand} />
        </div>
      </section>

      <section className="pb-96">
        <div className="container">{parse(`${dataBannerAndDescription.description}`)}</div>
      </section>

      <section className="container">
        <Title level={2} align="center" className="text-2xl lg:text-5xl">
          {dataProductLine.title}
        </Title>
      </section>

      {productList.map((item) => (
        <section key={item.id} className=" position-relative">
          <div className="container pb-56  border-bottom">
            <section className="d-flex justify-between pt-4  container">
              <h3 className="fw-medium mb-0 text-xl lg:text-4xl text-gray">{item.name}</h3>

              <Button variant="ghost" href={`/categorias/?marca="ultrasol"&category="${item.slug}"`} color="green" className="text-lg lg:text-xl">
                {item.link.text}
              </Button>
            </section>
            <ProductCarousel data={item.products} />
          </div>
        </section>
      ))}

      {brandLogos.length > 0 && (
        <section className="py-56 lg:py-96 position-relative bg-gray">
          <div className="container container-brand-logos">
            <Title level={2} align="center" className="text-2xl lg:text-5xl">
              {sectionBrand.title}
            </Title>
            <BrandLogosCarousel data={sectionBrand.brands} />
          </div>
        </section>
      )}
    </main>
  );
}
