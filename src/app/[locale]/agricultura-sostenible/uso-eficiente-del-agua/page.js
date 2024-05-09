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
import { getEfficientUseOfWater } from "@/services/api";

export const metadata = {
  title: "SQM - Uso eficiente del agua",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;

  const data = await getEfficientUseOfWater(country, language);

  const articles = [
    {
      id: 1,
      image: "https://dev.cms-sqmnutrition.somosforma.dev/wp-content/uploads/essays/222559157357.png",
      title: "Get to know: nitrato de potasio en el manejo de nutrientes de la manzana",
      link: {
        url: "https://dev.cms-sqmnutrition.somosforma.dev/essays/get-to-know-nitrato-de-potasio-en-el-manejo-de-nutrientes-de-la-manzana/",
      },
      category: "manzana",
      tags: [
        {
          id: 1,
          name: "Get_to_Know_Potassium_Nitrate",
        },
        {
          id: 2,
          name: "KNO3",
        },
        {
          id: 3,
          name: "Nitrato de potasio",
        },
      ],
    },
    {
      id: 2,
      image: "https://dev.cms-sqmnutrition.somosforma.dev/wp-content/uploads/essays/150951935994-scaled.jpg",
      title: "Producción de banano: Nitrato de potasio es el fertilizante adecuado para optimizar el retorno de la inversión",
      link: {
        url: "https://dev.cms-sqmnutrition.somosforma.dev/essays/produccion-de-banano-nitrato-de-potasio-es-el-fertilizante-adecuado-para-optimizar-el-retorno-de-la-inversion/",
      },
      category: "banano-ecuador",
      tags: [
        {
          id: 1,
          name: "Aplicación en suelo",
        },
        {
          id: 2,
          name: "KNO3",
        },
        {
          id: 3,
          name: "Nitrato de potasio",
        },
        {
          id: 4,
          name: "Prilado",
        },
      ],
    },
    {
      id: 3,
      image: "https://dev.cms-sqmnutrition.somosforma.dev/wp-content/uploads/essays/220338488286.png",
      title: "Aplicación de Ultrasol®ine K Plus mejoró la calidad del fruto y el rendimiento total de pepinos en Turquía",
      link: {
        url: "https://dev.cms-sqmnutrition.somosforma.dev/essays/aplicacion-de-ultrasoline-k-plus-mejoro-la-calidad-del-fruto-y-el-rendimiento-total-de-pepinos-en-turquia/",
      },
      category: "pepino",
      tags: [
        {
          id: 1,
          name: "KNO3",
        },
        {
          id: 2,
          name: "Nitrato de Potasio + Yodo",
        },
        {
          id: 3,
          name: "Pepino",
        },
        {
          id: 4,
          name: "Turquía",
        },
        {
          id: 5,
          name: "Ultrasol®ine",
        },
        {
          id: 6,
          name: "Yodo",
        },
      ],
    },
    {
      id: 4,
      image: "https://dev.cms-sqmnutrition.somosforma.dev/wp-content/uploads/essays/170108604912.png",
      title: "Nitrato de potasio, características y beneficios del producto",
      link: {
        url: "https://dev.cms-sqmnutrition.somosforma.dev/essays/nitrato-de-potasio-caracteristicas-y-beneficios-del-producto/",
      },
      category: "papa",
      tags: [
        {
          id: 1,
          name: "Aplicación en suelo",
        },
        {
          id: 2,
          name: "Fertirriego",
        },
        {
          id: 3,
          name: "KNO3",
        },
        {
          id: 4,
          name: "Nitrato de potasio",
        },
        {
          id: 5,
          name: "Papa",
        },
        {
          id: 6,
          name: "Tubérculo",
        },
      ],
    },
    {
      id: 5,
      image: "https://dev.cms-sqmnutrition.somosforma.dev/wp-content/uploads/essays/210449737352.png",
      title: "Ultrasol® K Plus y Qrop® KS ayuda a aumentar los rendimientos en papa",
      link: {
        url: "https://dev.cms-sqmnutrition.somosforma.dev/essays/ultrasol-k-plus-y-qrop-ks-ayuda-a-aumentar-los-rendimientos-en-papa/",
      },
      category: "papa",
      tags: [
        {
          id: 1,
          name: "Aplicación en suelo",
        },
        {
          id: 2,
          name: "KNO3",
        },
        {
          id: 3,
          name: "Nitrato de potasio",
        },
        {
          id: 4,
          name: "Papa",
        },
        {
          id: 5,
          name: "Prilado",
        },
      ],
    },
    {
      id: 6,
      image: "https://dev.cms-sqmnutrition.somosforma.dev/wp-content/uploads/essays/132046807773.png",
      title: "Ultrasol®ine K Plus para una calidad de fruta mejorada y mayor cantidad de calcio y antioxidantes en frutos de tomate cherry",
      link: {
        url: "https://dev.cms-sqmnutrition.somosforma.dev/essays/ultrasoline-k-plus-para-una-calidad-de-fruta-mejorada-y-mayor-cantidad-de-calcio-y-antioxidantes-en-frutos-de-tomate-cherry/",
      },
      category: "tomate",
      tags: [
        {
          id: 1,
          name: "España",
        },
        {
          id: 2,
          name: "KNO3",
        },
        {
          id: 3,
          name: "Nitrato de potasio",
        },
        {
          id: 4,
          name: "Nitrato de Potasio + Yodo",
        },
        {
          id: 5,
          name: "Tomate",
        },
        {
          id: 6,
          name: "Ultrasol®ine",
        },
        {
          id: 7,
          name: "Yodo",
        },
      ],
    },
    {
      id: 7,
      image: "https://dev.cms-sqmnutrition.somosforma.dev/wp-content/uploads/essays/153516671315.png",
      title: "Ultrasol®ine K Plus para un mejor desarrollo de las raíces y un crecimiento más rápido en lechugas",
      link: {
        url: "https://dev.cms-sqmnutrition.somosforma.dev/essays/ultrasoline-k-plus-para-un-mejor-desarrollo-de-las-raices-y-un-crecimiento-mas-rapido-en-lechugas/",
      },
      category: "lechuga",
      tags: [
        {
          id: 1,
          name: "KNO3",
        },
        {
          id: 2,
          name: "Lechuga",
        },
        {
          id: 3,
          name: "Nitrato de Potasio + Yodo",
        },
        {
          id: 4,
          name: "Ultrasol®ine",
        },
        {
          id: 5,
          name: "Yodo",
        },
      ],
    },
    {
      id: 8,
      image: "https://dev.cms-sqmnutrition.somosforma.dev/wp-content/uploads/essays/210909724348.png",
      title: "Aumento del 24% en el rendimiento del arroz por la aplicación de Qrop® KS",
      link: {
        url: "https://dev.cms-sqmnutrition.somosforma.dev/essays/aumento-del-24-en-el-rendimiento-del-arroz-por-la-aplicacion-de-qrop-ks/",
      },
      category: "arroz",
      tags: [
        {
          id: 1,
          name: "Aplicación en suelo",
        },
        {
          id: 2,
          name: "Arroz",
        },
        {
          id: 3,
          name: "China",
        },
        {
          id: 4,
          name: "Nitrato de potasio",
        },
      ],
    },
  ];

  return (
    <main>
      <TitleWithImageBanner image={data.banner.image} title={data.banner.title} />

      <section className="container py-4">
        <div>
          <h2 className="text-md-center fw-bold text-lg lg:text-xl ">Nuestros pilares</h2>
          <PilaresNavigation items={data.pilars} />
        </div>
      </section>
      <div className="container py-5 ">
        <hr className="border" />

        <section className={style.content}>
          {parse(`
          ${data.firstContent}
        `)}
        </section>
      </div>
      <section className="bg-gray py-56 lg:py-96 position-relative">
        <div className="container">
          <Title level={2} className="text-2xl lg:text-5xl color-02 mb-4">
            {data.carousel.title}
          </Title>

          {/* carousel */}
          <ImproveCarousel items={data.carousel.items} />
        </div>
      </section>
      <section className=" py-5">
        <div className="container">
          <Title level={2} className="text-2xl lg:text-5xl color-02 mb-4">
            Se recomienda colocar un título previo al acordeon
          </Title>

          <AccordionCustom items={data.accordion.items} />
        </div>
      </section>
      {/* <section className="py-56 lg:py-96 position-relative bg-gray">
        <div className="container">
          <Title level={2} align="center" className="text-2xl lg:text-5xl max-with-588 pb-4">
            {data.accordion.title}
          </Title>

          <ArticlesCarousel articles={articles} />

          <p className="text-center">
            <Button variant="solid" color="blue" href={"/articulos"} target="_blank">
              Ver más artículos de interés
            </Button>
          </p>
        </div>
      </section> */}
    </main>
  );
}
