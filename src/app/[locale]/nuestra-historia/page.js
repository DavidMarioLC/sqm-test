import { cookies } from "next/headers";
import style from "./style.module.css";
import { getOursHistoryPage } from "@/services/api";
import { SimpleBanner } from "@/components/SimpleBanner";
import parse from "html-react-parser";
import { TimeLine } from "@/components/TimeLine";
import { Title } from "@/components/Title";

export const metadata = {
  title: "SQM - Historia",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;

  const data = await getOursHistoryPage(country, language);

  return (
    <main>
      <SimpleBanner title={data.banner.title} background={data.banner.color} />
      <section className={`container  py-5 ${style.content}`}>{parse(`${data.firstContent}`)}</section>
      <section className="container py-56 lg:py-96">
        <Title level={2} align="center">
          Línea de tiempo
        </Title>
        <TimeLine items={data.timeLine.items} />
      </section>
    </main>
  );
}
