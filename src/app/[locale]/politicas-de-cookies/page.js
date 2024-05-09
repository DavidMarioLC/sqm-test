import { cookies } from "next/headers";
import style from "./style.module.css";
import { SimpleBanner } from "@/components/SimpleBanner";
import { TitleWithUnderlineBanner } from "@/components/TitleWithUnderlineBanner";
import { getPageCookies } from "@/services/api";
import parse from "html-react-parser";

export const metadata = {
  title: "SQM - Politicas de cookies",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const { data } = await getPageCookies(country, language);
  return (
    <main>
      <TitleWithUnderlineBanner title="¿Para qué utilizamos cookies y tratamos datos de navegación?" className="bg-gray" />
      <section className={`container py-56 ${style.content}`}>{parse(`${data.content}`)}</section>
    </main>
  );
}
