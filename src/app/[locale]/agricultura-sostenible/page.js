import { ImageBanner } from "@/components/ImageBanner";
import { Title } from "@/components/Title";
import { cookies } from "next/headers";
import style from "./style.module.css";
import parse from "html-react-parser";
import Image from "next/image";
import { AccordionCustom } from "@/components/AccordionCustom";
import { BsDownload } from "react-icons/bs";
import { Button } from "@/components/Button";
import { Link } from "@/navigation";
import { PilaresNavigation } from "@/components/PilaresNavigation";
import { getAgriculturePage } from "@/services/api";
import { ClientOnly } from "@/components/ClientOnly";

export const metadata = {
  title: "Agricultura sostenible",
};

export default async function Page({ params, searchParams }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;

  const data = await getAgriculturePage(country, language);

  return (
    <main>
      <ClientOnly>
        <ImageBanner title={data.banner.title} paragraph={data.banner.subtitle} />
      </ClientOnly>

      <section className="container py-4">
        <div>
          <h2 className="text-md-center fw-bold text-lg lg:text-xl ">Nuestros pilares</h2>
          <PilaresNavigation items={data?.pilars} />
        </div>
      </section>
      <div className="container pb-3 ">
        <hr className="border" />
        <section className={style.content}>{parse(`${data.firstContent}`)}</section>
      </div>

      <section className={`${style.content} py-5`}>
        <div className="container">{parse(` ${data.secondContent}`)}</div>
      </section>
      <section className="container">
        <AccordionCustom items={data.accordion} />
      </section>
    </main>
  );
}
