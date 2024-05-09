"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useClickAway } from "@uidotdev/usehooks";
import { useRouter, usePathname } from "@/navigation";
import { useLocale } from "next-intl";
import { BsChevronDown } from "react-icons/bs";
import style from "./languageSelectDesktop.module.css";
import { Checkbox } from "../Form";

export const LanguageSelectDesktop = ({ languages, activeLanguage }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const [language, setLanguage] = React.useState(activeLanguage);

  const handleChange = (e) => {
    router.replace({ pathname, params }, { locale: e.target.value });
    setIsOpen(false);
  };
  const modalRef = React.useRef(null);
  const toogleModal = () => setIsOpen(!isOpen);

  return (
    <div className={style.selectLanguageWrapper}>
      <button className={style.languageSelected} onClick={toogleModal}>
        {language.code} <BsChevronDown color="#008809" />
      </button>
      <ul ref={modalRef} className={`${style.listLanguages} ${isOpen ? style.openMenuLanguage : style.defaultMenuLanguage}`}>
        {languages.map((item) => (
          <Checkbox key={item.id} checked={language.code === item.code} onChange={handleChange} value={item.code}>
            {item.translated_name}
          </Checkbox>
        ))}
      </ul>
    </div>
  );
};
