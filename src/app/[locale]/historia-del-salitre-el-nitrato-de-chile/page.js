import { cookies } from "next/headers";
import style from "./style.module.css";
import parse from "html-react-parser";
import { SimpleBanner } from "@/components/SimpleBanner";
import { getHistorySalitrePage } from "@/services/api";

export const metadata = {
  title: "SQM - Historia del salitre",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const data = await getHistorySalitrePage(country, language);
  return (
    <main>
      <SimpleBanner title={data.banner.title} background={data.banner.color} />
      <div className="container">
        <section className={`py-56 ${style.content}`}>{parse(`${data.firstContent}`)}</section>
      </div>
    </main>
  );
}
