import React from "react";
import style from "./languageSelectMobile.module.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/Button";
import { useParams } from "next/navigation";
import { useRouter, usePathname } from "@/navigation";
import { Radio } from "@/components/Form";
export const LanguageSelectMobile = ({ languages, activeLanguage, menuPrincipalClose }) => {
  const [languagesOpen, setLanguagesOpen] = React.useState(false);
  const handleClick = () => setLanguagesOpen(true);
  const handleClose = () => setLanguagesOpen(false);
  let navigationSubmenuStyles = languagesOpen ? style.submenuOpen : style.submenuDefault;

  const [language, setLanguage] = React.useState(activeLanguage);

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleChange = (e) => {
    router.replace({ pathname, params }, { locale: e.target.value });
    handleClose(false);
  };

  const closeAllMenus = () => {
    handleClose();
    menuPrincipalClose();
  };
  return (
    <React.Fragment>
      <button className={style.buttonLanguage} onClick={handleClick}>
        {activeLanguage.code.toUpperCase()} (Cambiar idioma)
        <BsChevronRight size={24} />
      </button>
      <div className={` py-4  ${style.submenu} ${navigationSubmenuStyles}`}>
        <div className="container d-flex flex-column">
          <div className="d-flex justify-content-between pb-16">
            <div className="d-flex gap-2">
              <button className={style.navigationButtonClose} onClick={handleClose}>
                <BsChevronLeft size={24} />
              </button>
              <p className="mb-0 text-white fw-bold">Volver al menú principal</p>
            </div>
            <button className={style.navigationButtonClose} onClick={closeAllMenus}>
              <IoClose size={24} />
            </button>
          </div>
          <div className={style.submenuTitle}>
            <h2>Configuración idioma</h2>
          </div>
          <ul className="my-4 p-0  overflow-y-auto flex-grow-1 d-flex flex-column gap-4">
            {languages.map((item) => (
              <Radio key={item.id} checked={language.code === item.code} onChange={handleChange} value={item.code} className={style.checkboxMobile}>
                {item.translated_name}
              </Radio>
            ))}
          </ul>
          <Button variant="solid" color="white" href="/contacto" className="w-100 mt-5">
            Contactar
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};
