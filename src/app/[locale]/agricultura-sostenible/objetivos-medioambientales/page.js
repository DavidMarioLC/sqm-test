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
import { TitleWithImageBanner } from "@/components/TitleWithImageBanner";
import { ArticlesCarousel } from "@/components/ArticlesCarousel";
import { ImproveCarousel } from "@/components/ImproveCarousel";
import { PilaresNavigation } from "@/components/PilaresNavigation";
import { getObjectives } from "@/services/api";

export const metadata = {
  title: "SQM - Objetivos medioambientales",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;

  const data = await getObjectives(country, language);

  return (
    <main>
      <TitleWithImageBanner title={data.banner.title} image={data.banner.image} />

      <section className="container py-4">
        <div>
          <h2 className="text-md-center fw-bold text-lg lg:text-xl ">Nuestros pilares</h2>
          <PilaresNavigation items={data.pilars} />
        </div>
        <hr className="border" />
      </section>
      <div className="container py-5 ">
        <section>
          {parse(`
         ${data.firstContent}
        `)}
        </section>
      </div>

      <section className=" py-5">
        <div className="container">
          <Title level={2} className="text-2xl lg:text-5xl color-02 mb-4">
            {data.accordion.title}
          </Title>

          <AccordionCustom items={data.accordion.items} />
        </div>
      </section>
    </main>
  );
}
