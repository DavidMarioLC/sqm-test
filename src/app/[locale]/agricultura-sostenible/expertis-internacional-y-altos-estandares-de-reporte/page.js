import { ImageBanner } from "@/components/ImageBanner";
import { Title } from "@/components/Title";
import { cookies } from "next/headers";
import style from "./style.module.css";
import parse from "html-react-parser";
import Image from "next/image";
import { AccordionCustom } from "@/components/AccordionCustom";
import { BsDownload } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";

import { Button } from "@/components/Button";
import Link from "next/link";

import { BsFileEarmarkPdf } from "react-icons/bs";
import { PilaresNavigation } from "@/components/PilaresNavigation";
import { getExpertisInternational } from "@/services/api";
import { ClientOnly } from "@/components/ClientOnly";
import { TitleWithImageBanner } from "@/components/TitleWithImageBanner";

export const metadata = {
  title: "SQM - Expertis internacional",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const data = await getExpertisInternational(country, language);

  return (
    <main>
      <TitleWithImageBanner title={data.banner.title} image={data.banner.image} />

      <section className="container py-4">
        <div>
          <h2 className="text-md-center fw-bold text-lg lg:text-xl ">Nuestros pilares</h2>
          <PilaresNavigation items={data.pilars} />
        </div>
      </section>
      <div className="container py-5 ">
        <hr className="border" />
        <section className={`${style.content}`}>
          {parse(`
        ${data.firstContent}
        `)}
        </section>
        <p className="text-lg lg:text-xl mt-4 pt-5">{data.certifications.title}</p>
        <div className={`d-flex gap-4 pb-4 overflow-x-auto mb-4  ${style.listCertifications}`}>
          {data.certifications.items.map((item) => (
            <Link target="_blank" key={item.id} href={item.document} className={style.btnDownload}>
              <BsDownload size={18} color="#0DA600" />
              {item.titulo}
            </Link>
          ))}
        </div>

        <section className="d-flex flex-column gap-4">
          {data.otherCertifications.items.map((item) => (
            <article
              key={item.id}
              className="d-flex flex-column gap-3 flex-md-row gap-md-5 px-2 px-md-5 py-4 justify-content-center align-items-center border-top"
            >
              <img src={item.imagen} className={style.certificateImageCard} />
              <div>
                <p>{item.texto}</p>
                <p className="d-grid col-12 col-md-3">
                  <Button target="_blank" href={item.document} variant="solid" color="blue">
                    <GoLinkExternal />
                    Ver certificado
                  </Button>
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
