import { cookies } from "next/headers";

import { NavigationMAC } from "@/components/NavigationMAC";
import { SimpleBanner } from "@/components/SimpleBanner";
import { SqmGrid } from "@/components/SqmGrid";
import { GridProducts } from "@/components/GridProducts";
import { Title } from "@/components/Title";
import { BrandLogosCarousel } from "@/components/BrandLogosCarousel";
import { Search } from "@/components/Search";
import SortFilter from "@/components/SortFilter/SortFilter";
import { FilterPanelParams, FilterPanelParamsMobile } from "@/components/FiltersPanel";
import { GridApplications } from "@/components/GridApplications";
import { Pagination } from "@/components/Pagination";

import { getApplications, getBrandLogos, getCheckboxOptions, getFilteredProducts } from "@/services/api";
import { ClientOnly } from "@/components/ClientOnly";

export default async function ApplicationPage({ params, searchParams }) {
  const cookieStore = cookies();

  const language = params.locale;
  const country = cookieStore.get("country").value;

  const page = Number(searchParams.page) || 1;
  const order = searchParams.order || "";
  const limit = 12;

  const [crops, brands, applications, brandLogos] = await Promise.all([
    getCheckboxOptions(country, language, "crops"),
    getCheckboxOptions(country, language, "brands"),
    getCheckboxOptions(country, language, "applications"),
    getBrandLogos(country, language),
  ]);

  const sectionBrand = brandLogos[0];
  const allowedParams = ["crops", "brands", "applications"];

  const applicationsPromise = () => {
    return getApplications(page, limit, order, country, language).then((res) => res[0]);
  };

  const productsPromise = () => {
    return getFilteredProducts(page, limit, order, country, language, {
      crops: searchParams.crops,
      brands: searchParams.brands,
      applications: searchParams.applications,
    });
  };

  // Verifica si en la URL se encuentran los parametros permitidos
  const isFilteredView = allowedParams.some((param) => Object.keys(searchParams).includes(param));

  return (
    <main>
      <SimpleBanner background="#002574" title="Aplicaciones" />
      <NavigationMAC />

      <article className="container mb-5">
        <Search isCompact />
      </article>

      <section className="container">
        <div className="row">
          <section className="d-none col-12 col-lg-3 d-md-block pb-48 position-relative">
            <FilterPanelParams
              badges
              filters={[
                {
                  name: "Aplicaciones",
                  param: "applications",
                  options: applications,
                },
                {
                  name: "Por Cultivos",
                  param: "crops",
                  options: crops,
                },
                {
                  name: "Marca de Productos",
                  param: "brans",
                  options: brands,
                },
              ]}
            />
          </section>

          <section className="col-12 col-lg-9">
            <div className="d-flex align-items-center gap-2">
              <FilterPanelParamsMobile
                filters={[
                  {
                    name: "Aplicaciones",
                    param: "applications",
                    options: applications,
                  },
                  {
                    name: "Por Cultivos",
                    param: "crops",
                    options: crops,
                  },
                  {
                    name: "Marca de Productos",
                    param: "brans",
                    options: brands,
                  },
                ]}
              />
              <ClientOnly>
                <SortFilter defaultValue="relevant" options={[{ text: "Más relevante", value: "relevant" }]} />
              </ClientOnly>
            </div>

            <div className="row g-4">
              {!isFilteredView ? (
                <SqmGrid
                  promise={applicationsPromise}
                  renderItem={(data) => (
                    <>
                      <GridApplications applications={data.taxonomy} />
                      <Pagination page={page} totalPages={Math.ceil(data.total / limit)} />
                    </>
                  )}
                />
              ) : (
                <SqmGrid
                  promise={productsPromise}
                  renderItem={(data) => (
                    <>
                      <GridProducts products={data.products} />
                      <Pagination page={page} totalPages={Math.ceil(data.total / limit)} />
                    </>
                  )}
                />
              )}
            </div>
          </section>
        </div>
      </section>

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
