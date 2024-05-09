import { ColorBanner } from "@/components/ColorBanner";
import { cookies } from "next/headers";
import parse from "html-react-parser";
import style from "./style.module.css";
import { ContactBanner } from "@/components/ContactBanner";
import { SimpleBanner } from "@/components/SimpleBanner";
import { getSpecialNutritionPage } from "@/services/api";

export const metadata = {
  title: "SQM - Nutrición vegetal",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const data = await getSpecialNutritionPage(country, language);
  return (
    <main>
      <SimpleBanner title={data.banner.title} subtitle={data.banner.subtitle} background={data.banner.color} />
      <section className={`container py-56 ${style.content}`}>{parse(`${data.firstContent}`)}</section>
    </main>
  );
}
