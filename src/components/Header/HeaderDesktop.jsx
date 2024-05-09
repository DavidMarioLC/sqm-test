"use client";

import React from "react";
import style from "./headerDesktop.module.css";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

import { ModalCountryDesktop } from "../ModalCountry";
import { LanguageSelectDesktop } from "../LanguageSelect";
import { Search } from "@/components/Search";
import { NavigationItem } from "./NavigationItem";

const SocialsIcons = {
  Facebook: <FaFacebookF />,
  Linkedin: <FaLinkedinIn />,
  Instagram: <FaInstagram />,
  Youtube: <FaYoutube />,
  twitter: <FaTwitter />,
};

export const HeaderDesktop = ({ data, activeCountry, continents, languages, activeLanguage }) => {
  const locale = useLocale();

  return (
    <React.Fragment>
      <header>
        <div className={style.superheader}>
          <div className="container px-lg-0">
            <div className={style.superheaderContent}>
              <div className={style.buttonCountryAndLanguage}>
                <ModalCountryDesktop activeCountry={activeCountry} continents={continents} />
                <LanguageSelectDesktop languages={languages} activeLanguage={activeLanguage} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.subheader}>
          <div className="container px-lg-0">
            <div className="d-flex justify-content-between">
              <Link locale={locale} href="/">
                {" "}
                <img width={88} height={46} src={data.logo} alt="sqm nutrition" />
              </Link>
              <div className="d-flex align-items-center gap-4">
                <div style={{ width: "328px" }}>
                  <Search />
                </div>
                <div className={`d-flex gap-4 ${style.socials}`}>
                  {data?.socials?.map((item, idx) => (
                    <Link key={item.id} href={item.link.url} target={item.link.target} aria-label="Icono de redes sociales">
                      {SocialsIcons[item.name]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navigation items={data.navigation} />
      </header>
    </React.Fragment>
  );
};

const Navigation = ({ items }) => {
  return (
    <div className={style.navigation}>
      <div className="container px-lg-0">
        <ul className={style.navigationContent}>
          {items.map((item) => (
            <NavigationItem key={item.id} data={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
