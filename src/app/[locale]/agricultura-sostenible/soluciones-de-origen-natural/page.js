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
import { getNaturalSolution } from "@/services/api";

export const metadata = {
  title: "SQM - Soluciones de origen natural",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const data = await getNaturalSolution(country, language);
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
        <section className={style.content}>
          {parse(`
        ${data.firstContent}
        `)}
        </section>
      </div>
    </main>
  );
}
