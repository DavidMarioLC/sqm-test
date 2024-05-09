import { SimpleBanner } from "@/components/SimpleBanner";
import { cookies } from "next/headers";
import parse from "html-react-parser";
import style from "./style.module.css";
import { Title } from "@/components/Title";
import { ModalCarousel } from "@/components/ModalCarousel";
import { getOriginPage } from "@/services/api";

export const metadata = {
  title: "SQM - Origen del nitrato de potasio",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const data = await getOriginPage(country, language);

  return (
    <main>
      <SimpleBanner title={data.banner.title} background={data.banner.color} />
      <section className="py-56">
        <section className={`container pb-5 ${style.content}`}>{parse(` ${data.firstContent}`)}</section>
        <section className="bg-gray py-56 lg:py-96 position-relative">
          <div className="container">
            <Title level={2} align="center">
              {data.cards.title}
            </Title>
            <ModalCarousel items={data.cards.items} />
          </div>
        </section>
        <section className={`container pt-5  ${style.content}`}>
          {parse(`
           ${data.secondContent}
          `)}
        </section>
      </section>
    </main>
  );
}
