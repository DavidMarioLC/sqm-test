import { NavigationMAC } from "@/components/NavigationMAC";
import { SimpleBanner } from "@/components/SimpleBanner";
import { getBrands } from "@/services/api";
import { cookies } from "next/headers";
import { Pagination } from "@/components/Pagination";
import { GridBrands } from "@/components/GridBrands";
import { Search } from "@/components/Search";
import SortFilter from "@/components/SortFilter/SortFilter";

export default async function Page({ params, searchParams }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const page = Number(searchParams.page) || 1;
  const order = searchParams.order || "";
  const limit = 12;

  const [data] = await getBrands(page, limit, order, country, language);

  const brands = data.taxonomy;
  const totalElements = data.total;
  const totalPages = Math.ceil(totalElements / limit);

  return (
    <main>
      <SimpleBanner background="#0033A1" title={"Marcas"} />
      <NavigationMAC />

      <article className="container mb-5">
        <Search isCompact />
      </article>

      <article className="container ">
        <SortFilter />
      </article>

      <GridBrands brands={brands} />
      <Pagination totalPages={totalPages} page={page} />
    </main>
  );
}
