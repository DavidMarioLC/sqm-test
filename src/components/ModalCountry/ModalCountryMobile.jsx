"use client";
import React from "react";
import style from "./modalCountryMobile.module.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/Button";
import { useLocale } from "next-intl";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export const ModalCountryMobile = ({ activeCountry, continents, menuPrincipalClose }) => {
  const [continentsOpen, setContinentsOpen] = React.useState(false);
  const handleClick = () => setContinentsOpen(true);
  const handleClose = () => setContinentsOpen(false);

  let navigationSubmenuStyles = continentsOpen ? style.submenuOpen : style.submenuDefault;

  const closeAllMenus = () => {
    handleClose();
    menuPrincipalClose();
  };
  return (
    <React.Fragment>
      <button className={style.buttonCountry} onClick={handleClick}>
        <img width={16} height={12} src={activeCountry?.flag} alt="flag image" />
        {activeCountry.name} (Cambiar país)
        <BsChevronRight size={24} className="ms-auto" />
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
            <h2>Ingresa por continente</h2>
          </div>
          <ul className="my-4 p-0  overflow-y-auto flex-grow-1">
            {continents.map((item) => (
              <MenuContinentSelected key={item.id} item={item} closeAllMenus={closeAllMenus} />
            ))}
          </ul>
          <Button variant="solid" color="white" href="/contacto">
            Contactar
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

const MenuContinentSelected = ({ item, closeAllMenus }) => {
  const [cookies, setCookie] = useCookies();
  const router = useRouter();
  const locale = useLocale();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  function handleChangeCountry(value) {
    setCookie("country", value.code, {
      expires: 0,
      path: "/",
    });
    router.refresh();
    handleClose();
  }

  return (
    <React.Fragment>
      <li className={style.navigationItem} onClick={handleClick}>
        <span>{item.name}</span>
        <BsChevronRight size={24} className="ms-auto" />
      </li>
      <div className={` py-4  ${style.submenu} ${open ? style.submenuOpen : style.submenuDefault}`}>
        <div className="d-flex flex-column container">
          <div className="d-flex justify-content-between pb-16">
            <div className="d-flex gap-2">
              <button className={style.navigationButtonClose} onClick={handleClose}>
                <BsChevronLeft size={24} />
              </button>
              <p className="mb-0 text-white fw-bold">Volver a seleccionar continente</p>
            </div>
            <button className={style.navigationButtonClose} onClick={closeAllMenus}>
              <IoClose size={24} />
            </button>
          </div>
          <div className={style.submenuTitle}>
            <h2>{item.name}</h2>
          </div>
          <ul className="my-4 p-0  overflow-y-auto flex-grow-1">
            {item.countries.map((itemChild) => (
              <li
                key={itemChild.id}
                className={style.navigationItem}
                onClick={() => handleChangeCountry(itemChild)}
              >
                {itemChild.flag && (
                  <img src={itemChild.flag} width={16} height={12} alt={itemChild.name} />
                )}
                <p className="text-white d-block mb-0">{itemChild.name}</p>
              </li>
            ))}
          </ul>

          <Button variant="solid" color="white" href="/contacto">
            Contactar
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};
