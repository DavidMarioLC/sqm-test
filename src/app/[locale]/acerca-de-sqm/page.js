import { cookies } from "next/headers";
import parse from "html-react-parser";
import style from "./style.module.css";
import { ContactBanner } from "@/components/ContactBanner";
import { getContactBanner } from "@/services/api";
import { Title } from "@/components/Title";
import { LineBusinessCarousel } from "@/components/LineBusinessCarousel/LineBusinessCarousel";
import { SimpleBanner } from "@/components/SimpleBanner";
import { getAboutSQMPage } from "@/services/api";

export const metadata = {
  title: "Acerca de SQM",
};

async function RSCContactBanner({ language }) {
  const data = await getContactBanner(language);
  return <ContactBanner data={data} />;
}

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;

  const data = await getAboutSQMPage(country, language);

  return (
    <main>
      <SimpleBanner title={data.banner.title} subtitle={data.banner.subtitle} background={data.banner.color} />
      <section className={`container py-56 ${style.content}`}>{parse(`  ${data.firstContent} `)}</section>
      <section className="container">
        <Title level={2} className="text-2xl lg:text-4xl color-02 fw-bold">
          {data.cards.title}
        </Title>
        <p className="my-5">{data.cards.description}</p>
      </section>
      <section className=" position-relative py-56 ">
        <div className="container">
          <LineBusinessCarousel items={data.cards.items} />
        </div>
      </section>
      <RSCContactBanner language={language} />
    </main>
  );
}
