import Image from "next/image";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import { getPageNotFound } from "@/services/api";
export default async function NotFound() {
  const locale = useLocale();

  const language = locale;

  const { data } = await getPageNotFound(language);

  const titles = data?.titulo?.split(" ");
  const descriptions = data.texto.split(" ");

  const stringError = titles[0];
  const stringNotFound = titles[1];
  const stringUps = titles[2];
  // description
  const stringPageNotFound = `${descriptions[0]} ${descriptions[1]} ${descriptions[2]}`;
  const stringRecomends = `${descriptions[3]} ${descriptions[4]} ${descriptions[5]} ${descriptions[6]} ${descriptions[7]} ${descriptions[8]} ${descriptions[9]} ${descriptions[10]}`;
  return (
    <div className="container d-flex  flex-column flex-md-row align-items-center justify-content-center gap-5 py-56 lg:py-105 notfound">
      <div className=" order-md-2">
        <Image className="notfound__image" src={data.imagen} width={384} height={384} alt="notfound image" />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center justify-content-md-start align-items-md-start">
        <h1 className="notfound__title">
          {stringError} {stringNotFound}
        </h1>
        <h2 className="notfound__subtitle">{stringUps}</h2>
        <p className="notfound__first-paragraph fw-bold">{stringPageNotFound}</p>
        <p className="notfound__second-paragraph ">{stringRecomends}</p>
        {data.enlaces.length > 0 && (
          <ul className="d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-start list-unstyled gap-4 ">
            {data.enlaces.map((item) => (
              <li key={crypto.randomUUID()}>
                <Link locale={locale} href={item.url} className="notfound__link">
                  {item.titulo}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
