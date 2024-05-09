import Link from "next/link";
import style from "./style.module.css";
import { GoLinkExternal } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { getFooter } from "@/services/api";

export const Footer = async ({ country, language }) => {
  const data = await getFooter(country, language);

  const SocialsIcons = {
    Facebook: <FaFacebookF />,
    Linkedin: <FaLinkedinIn />,
    Instagram: <FaInstagram />,
    Youtube: <FaYoutube />,
  };

  return (
    <footer className={style.footer}>
      <div className="container ">
        <div className={style.footerContent}>
          <div className={style.footerLogo}>
            <img width={206} height={108} src={data.logo} alt="Logo de sqm" />
          </div>
          {data?.socials?.length > 0 && (
            <div className={`${style.footerSocial} d-lg-none`}>
              <p>Síguenos en</p>
              <ul>
                {data?.socials?.map((item) => (
                  <li key={item.id}>
                    <Link href={item.link} target={item.target} rel="noopener noreferrer">
                      {SocialsIcons[item.name]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data?.linksSection1?.length > 0 && (
            <ul className={style.footerLink}>
              {data?.linksSection1?.map((item) => (
                <li key={item.id}>
                  <Link href={item.url} target={item.target} rel="noopener noreferrer">
                    {item.title} {item.target === "_blank" ? <GoLinkExternal /> : ""}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {data?.linksSection2?.length > 0 && (
            <ul className={style.footerLink}>
              {data?.linksSection2?.map((item) => (
                <li key={item.id}>
                  <Link href={item.url} target={item.target} rel="noopener noreferrer">
                    {item.title} {item.target === "_blank" ? <GoLinkExternal /> : ""}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {data?.linksSection3?.length > 0 && (
            <ul className={style.footerLink}>
              {data?.linksSection3?.map((item) => (
                <li key={item.id}>
                  <Link href={item.url} target={item.target} rel="noopener noreferrer">
                    {item.title} {item.target === "_blank" ? <GoLinkExternal /> : ""}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {data?.socials?.length > 0 && (
        <div className={`${style.footerSocial} d-none d-lg-flex flex-column align-items-center`}>
          <p>{data?.bottomFooter?.titleRedes}</p>
          <ul>
            {data?.socials?.map((item) => (
              <li key={item.id}>
                <Link href={item.link} target="_blank" rel="noopener noreferrer" aria-label="Icono de red social">
                  {SocialsIcons[item.name]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className={style.footerCopy}>
        <p className="text-xs mb-0">Copyright © {new Date().getFullYear()}. Todos los derechos reservados.</p>
        <p className="text-xs mb-0">
          {data?.bottomFooter?.titleCopy}{" "}
          <Link href="#" target="_blank" rel="noopener noreferrer">
            {data?.bottomFooter?.titleForma}
          </Link>
        </p>
      </div>
    </footer>
  );
};
