import { cookies } from "next/headers";
import { FilterPanelParams, FilterPanelParamsMobile } from "@/components/FiltersPanel";
import { NavigationMAC } from "@/components/NavigationMAC";
import { SimpleBanner } from "@/components/SimpleBanner";
import { GridProducts } from "@/components/GridProducts";
import { Pagination } from "@/components/Pagination";
import { getCategoriesSPN, getCheckboxOptions, getFilteredProducts } from "@/services/api";
import { Search } from "@/components/Search";
import SortFilter from "@/components/SortFilter/SortFilter";
import { SqmGrid } from "@/components/SqmGrid";
import { GridCategories } from "@/components/GridCategories";
import { ClientOnly } from "@/components/ClientOnly";

export default async function Page({ params, searchParams }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;

  const page = Number(searchParams.page) || 1;
  const order = searchParams.order || "";
  const limit = 12;

  const [categories, crops, brands] = await Promise.all([
    getCheckboxOptions(country, language, "categoryspn"),
    getCheckboxOptions(country, language, "crops"),
    getCheckboxOptions(country, language, "brands"),
  ]);

  const allowedParams = ["crops", "brands", "categories"];

  const categoriesSPNPromise = () => {
    return getCategoriesSPN(country, language);
  };

  const productsPromise = () => {
    return getFilteredProducts(page, limit, order, country, language, {
      crops: searchParams.crops,
      brands: searchParams.brands,
      categories: searchParams.categories,
    });
  };

  // Verifica si en la URL se encuentran los parametros permitidos
  const isFilteredView = allowedParams.some((param) => Object.keys(searchParams).includes(param));

  return (
    <main>
      <SimpleBanner background="#008809" title="Categorías" />
      <NavigationMAC />

      <article className="container mb-5">
        <Search isCompact />
      </article>

      <article className="container "></article>

      <section className="container">
        <div className="row">
          <section className="d-none d-md-block col-12 col-lg-3 pb-48 position-relative">
            <FilterPanelParams
              badges
              filters={[
                {
                  name: "Categorias",
                  param: "categories",
                  options: categories,
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
                    name: "Categorias",
                    param: "categories",
                    options: categories,
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
                  promise={categoriesSPNPromise}
                  renderItem={(data) => (
                    <>
                      <GridCategories categories={data} />
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
    </main>
  );
}
