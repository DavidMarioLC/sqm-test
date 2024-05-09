"use client";
import React from "react";
import style from "./headerMobile.module.css";
import { TfiMenu } from "react-icons/tfi";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/Button";
import { Link } from "../../navigation";
import { useLocale } from "next-intl";
import { ModalCountryMobile } from "../ModalCountry";
import { Search, SearchMenuMobile } from "../Search";
import { LanguageSelectMobile } from "../LanguageSelect";

export const HeaderMobile = ({ data, activeCountry, continents, languages, activeLanguage }) => {
  // search
  const [isSearchFocus, setSearchFocus] = React.useState(false);

  const openSearch = () => setSearchFocus(true);
  const closeSearch = () => setSearchFocus(false);
  // navigation
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  React.useEffect(() => {
    if (open) {
      window.document.body.style.overflowY = "hidden";
    } else {
      window.document.body.style.overflowY = "auto";
    }
  }, [open]);

  return (
    <React.Fragment>
      <header className={`${style.header} ${isSearchFocus ? style.searchHeaderOpen : ""}`}>
        <div className="container">
          <div className={style.headerContent}>
            <img src={data.logo} alt="logo de sqm" height={40} width={80} className={style.headerLogo} />
            <div className={style.headerWrapperSearch}>
              <SearchMenuMobile openSearch={openSearch} closeSearch={closeSearch} />
            </div>
            <button className={style.openMenu} onClick={handleOpen}>
              <TfiMenu />
            </button>
          </div>
        </div>
      </header>
      <MenuPrincipal
        onClose={handleClose}
        open={open}
        data={data}
        activeCountry={activeCountry}
        continents={continents}
        languages={languages}
        activeLanguage={activeLanguage}
      />
    </React.Fragment>
  );
};

// MENU
const MenuPrincipal = ({ onClose, open, data, activeCountry, continents, languages, activeLanguage }) => {
  const [menuProductsOpen, setMenuProducts] = React.useState(false);
  const [menuAgricultureOpen, setMenuAgriculture] = React.useState(false);
  const [menuSpecialCroopsOpen, setMenuSpecialCroops] = React.useState(false);
  const [menuAcademiaSQMOpen, setMenuAcademiaSQM] = React.useState(false);
  const [menuAboutSQMOpen, setMenuAboutSQM] = React.useState(false);

  const handleClickOpen = (itemSelected) => {
    switch (itemSelected) {
      case "productos-2":
        setMenuProducts(true);
        break;
      case "agricultura-sostenible":
        setMenuAgriculture(true);
        break;
      case "especial-cultivos":
        setMenuSpecialCroops(true);
        break;
      case "academia-sqm-nutrition":
        setMenuAcademiaSQM(true);
        break;
      case "sobre-sqm":
        setMenuAboutSQM(true);
        break;
      default:
        break;
    }
  };

  const handleClickClose = (itemSelected) => {
    switch (itemSelected) {
      case "productos-2":
        setMenuProducts(false);
        break;
      case "agricultura-sostenible":
        setMenuAgriculture(false);
        break;
      case "especial-cultivos":
        setMenuSpecialCroops(false);
        break;
      case "academia-sqm-nutrition":
        setMenuAcademiaSQM(false);
        break;
      case "sobre-sqm":
        setMenuAboutSQM(false);

        break;
      default:
        break;
    }
  };

  const locale = useLocale();
  const navigationOpenStyles = open ? style.navigationOpen : style.navigationDefault;

  return (
    <div className={` py-4 ${style.navigation} ${navigationOpenStyles}`}>
      <div className="container d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center ">
          <img src={data.logo} height={40} width={80} alt="Logo de sqm" />
          <button className={style.navigationButtonClose} onClick={onClose}>
            <IoClose size={24} />
          </button>
        </div>
        <ul className="my-4 p-0  overflow-y-auto flex-grow-1">
          {data.navigation.map((item) => (
            <React.Fragment key={item.id}>
              {item.hasOwnProperty("submenu") ? (
                <React.Fragment>
                  <li className={style.navigationItem} onClick={() => handleClickOpen(item.slug)}>
                    {item.icon && <img src={item.icon} alt={item.title} />}
                    {item.title}
                    <BsChevronRight size={24} className="ms-auto" />
                  </li>
                  {/* submenus */}
                  {item.slug === "productos-2" ? (
                    <MenuProducts
                      menuProductsOpen={menuProductsOpen}
                      handleClickClosePrincipal={() => handleClickClose(item.slug)}
                      items={item.submenu}
                      title={item.title}
                      menuPrincipalClose={onClose}
                      icon={item.icon}
                    />
                  ) : item.slug === "agricultura-sostenible" ? (
                    <MenuAgriculture
                      items={item.submenu}
                      title={item.title}
                      icon={item.icon}
                      menuAgricultureOpen={menuAgricultureOpen}
                      handleClickCloseMenuAgriculture={() => handleClickClose(item.slug)}
                      menuPrincipalClose={onClose}
                    />
                  ) : item.slug === "especial-cultivos" ? (
                    <MenuSpecialCroops
                      items={item.submenu}
                      title={item.title}
                      icon={item.icon}
                      menuSpecialCroopsOpen={menuSpecialCroopsOpen}
                      handleClickCloseMenuCroops={() => handleClickClose(item.slug)}
                      menuPrincipalClose={onClose}
                    />
                  ) : item.slug === "academia-sqm-nutrition" ? (
                    <MenuAcademySQM
                      items={item.submenu}
                      title={item.title}
                      icon={item.icon}
                      menuAcademiaSQMOpen={menuAcademiaSQMOpen}
                      handleClickCloseMenuAcademySQM={() => handleClickClose(item.slug)}
                      menuPrincipalClose={onClose}
                    />
                  ) : item.slug === "sobre-sqm" ? (
                    <MenuAboutSQM
                      items={item.submenu}
                      title={item.title}
                      icon={item.icon}
                      menuAboutSQMOpen={menuAboutSQMOpen}
                      handleClickCloseMenuAboutSQM={() => handleClickClose(item.slug)}
                      menuPrincipalClose={onClose}
                    />
                  ) : null}
                </React.Fragment>
              ) : (
                <li className={style.navigationItem}>
                  {item.icon && <img src={item.icon} alt={item.title} />}
                  <Link locale={locale} className="text-white d-block" href={`/${item.link.url}?`}>
                    {item.title}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
        <hr className="border" />
        <ModalCountryMobile activeCountry={activeCountry} continents={continents} menuPrincipalClose={onClose} />
        <LanguageSelectMobile languages={languages} activeLanguage={activeLanguage} menuPrincipalClose={onClose} />

        <Button variant="solid" color="white" href="/contacto" className="w-100 mt-5">
          Contactar
        </Button>
      </div>
    </div>
  );
};

const MenuProducts = ({ menuProductsOpen, handleClickClosePrincipal, items, title, menuPrincipalClose, icon }) => {
  const [menuBrandsOpen, setMenuBrands] = React.useState(false);
  const [menuApplicationsOpen, setMenuApplications] = React.useState(false);
  const [menuCategoriesOpen, setMenuCategories] = React.useState(false);

  const handleClickOpen = (itemSelected) => {
    switch (itemSelected) {
      case "marcas":
        setMenuBrands(true);
        break;

      case "aplicaciones":
        setMenuApplications(true);
        break;

      case "categorias":
        setMenuCategories(true);
        break;

      default:
        break;
    }
  };

  const handleClickClose = (itemSelected) => {
    switch (itemSelected) {
      case "marcas":
        setMenuBrands(false);
        break;

      case "aplicaciones":
        setMenuApplications(false);
        break;

      case "categorias":
        setMenuCategories(false);
        break;

      default:
        break;
    }
  };

  let navigationSubmenuStyles = menuProductsOpen ? style.submenuOpen : style.submenuDefault;

  return (
    <div className={` py-4  ${style.submenu} ${navigationSubmenuStyles}`}>
      <div className="container d-flex flex-column ">
        <div className="d-flex justify-content-between pb-16">
          <div className="d-flex gap-2">
            <button className={style.navigationButtonClose} onClick={handleClickClosePrincipal}>
              <BsChevronLeft size={24} />
            </button>
            <p className="mb-0 text-white fw-bold">Volver al menú principal</p>
          </div>
          <button
            className={style.navigationButtonClose}
            onClick={() => {
              handleClickClosePrincipal();
              menuPrincipalClose();
            }}
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className={style.submenuTitle}>
          {icon && <img src={icon} alt="" />}
          <h2>{title}</h2>
        </div>
        <ul className="m-0 p-0 flex-grow-1">
          {items.map((item) => (
            <React.Fragment key={item.id}>
              {item.hasOwnProperty("submenu") ? (
                <React.Fragment>
                  <li className={style.navigationItem} onClick={() => handleClickOpen(item.link.url)}>
                    {item.icon && <img src={item.icon} alt={item.title} />}
                    {item.title}
                    <BsChevronRight size={24} className="ms-auto" />
                  </li>
                  {/* submenus */}
                  {item.link.url === "marcas" ? (
                    <MenuBrands
                      menuBrandsOpen={menuBrandsOpen}
                      items={item.submenu}
                      title={items[0].title}
                      handleClickCloseBrands={() => handleClickClose(item.link.url)}
                      handleClickClosePrincipal={handleClickClosePrincipal}
                      menuPrincipalClose={menuPrincipalClose}
                    />
                  ) : item.link.url === "aplicaciones" ? (
                    <MenuApplications
                      menuApplicationsOpen={menuApplicationsOpen}
                      items={item.submenu}
                      title={items[2].title}
                      handleClickCloseApplications={() => handleClickClose(item.link.url)}
                      handleClickClosePrincipal={handleClickClosePrincipal}
                      menuPrincipalClose={menuPrincipalClose}
                    />
                  ) : item.link.url === "categorias" ? (
                    <MenuCategories
                      items={item.submenu}
                      menuCategoriesOpen={menuCategoriesOpen}
                      title={items[1].title}
                      handleClickCloseCategories={() => handleClickClose(item.link.url)}
                      handleClickClosePrincipal={handleClickClosePrincipal}
                      menuPrincipalClose={menuPrincipalClose}
                    />
                  ) : null}
                </React.Fragment>
              ) : (
                <li className={style.navigationItem}>
                  {item.icon && <img src={item.icon} alt={item.title} />}
                  <Link locale={locale} className="text-white d-block" href={`/marcas/marca/${item.link.url}?`}>
                    {item.title}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
        <Button variant="solid" color="white" href="/contacto">
          Contactar
        </Button>
      </div>
    </div>
  );
};

const MenuBrands = ({ menuBrandsOpen, handleClickCloseBrands, items, title, handleClickClosePrincipal, menuPrincipalClose }) => {
  const locale = useLocale();
  let navigationSubmenuStyles = menuBrandsOpen ? style.submenuOpen : style.submenuDefault;
  const closeAllMenus = () => {
    handleClickCloseBrands();
    handleClickClosePrincipal();
    menuPrincipalClose();
  };
  return (
    <div className={` py-4  ${style.submenu} ${navigationSubmenuStyles}`}>
      <div className="container d-flex flex-column">
        <div className="d-flex justify-content-between pb-16">
          <div className="d-flex gap-2">
            <button className={style.navigationButtonClose} onClick={handleClickCloseBrands}>
              <BsChevronLeft size={24} />
            </button>
            <p className="mb-0 text-white fw-bold">Volver a Productos</p>
          </div>
          <button className={style.navigationButtonClose} onClick={closeAllMenus}>
            <IoClose size={24} />
          </button>
        </div>
        <div className={style.submenuTitle}>
          <h2>{title}</h2>
        </div>
        <ul className="my-4 p-0  overflow-y-auto flex-grow-1">
          {items.map((item) => (
            <MenuBrandItem key={item.id} item={item} closeAllMenus={closeAllMenus} />
          ))}
          <Link className="text-white d-block py-4 fw-bold" locale={locale} href={`/marcas`}>
            Todos las marcas
          </Link>
        </ul>

        <Button variant="solid" color="white" href="/contacto">
          Contactar
        </Button>
      </div>
    </div>
  );
};

const MenuBrandItem = ({ item, closeAllMenus }) => {
  const locale = useLocale();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <li className={style.navigationItem} onClick={handleClick}>
        <span>{item.title}</span>
        <BsChevronRight size={24} className="ms-auto" />
      </li>
      <div className={` py-4  ${style.submenu} ${open ? style.submenuOpen : style.submenuDefault}`}>
        <div className="d-flex flex-column container">
          <div className="d-flex justify-content-between pb-16">
            <div className="d-flex gap-2">
              <button className={style.navigationButtonClose} onClick={handleClose}>
                <BsChevronLeft size={24} />
              </button>
              <p className="mb-0 text-white fw-bold">Volver a Marcas</p>
            </div>
            <button
              className={style.navigationButtonClose}
              onClick={() => {
                handleClose();
                closeAllMenus();
              }}
            >
              <IoClose size={24} />
            </button>
          </div>
          <div className={style.submenuTitle}>
            <h2>{item.title}</h2>
          </div>
          <ul className="my-4 p-0  overflow-y-auto flex-grow-1">
            {item.submenu.map((itemChild) => (
              <li key={itemChild.id} className={style.navigationItem}>
                {itemChild.icon && <img src={itemChild.icon} alt={itemChild.title} />}
                <Link locale={locale} className="text-white d-block" href={`/marcas/${item.link.url}/${itemChild.link.url}?`}>
                  {itemChild.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="text-white d-block py-4 fw-bold" locale={locale} href={`/marcas/${item.link.url}`}>
            Todos los productos
          </Link>
          <Button variant="solid" color="white" href="/contacto">
            Contactar
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

const MenuApplications = ({ items, title, menuApplicationsOpen, handleClickCloseApplications, handleClickClosePrincipal, menuPrincipalClose }) => {
  let navigationSubmenuStyles = menuApplicationsOpen ? style.submenuOpen : style.submenuDefault;
  const locale = useLocale();
  return (
    <div className={` py-4  ${style.submenu} ${navigationSubmenuStyles}`}>
      <div className="container d-flex flex-column">
        <div className="d-flex justify-content-between pb-16">
          <div className="d-flex gap-2">
            <button className={style.navigationButtonClose} onClick={handleClickCloseApplications}>
              <BsChevronLeft size={24} />
            </button>
            <p className="mb-0 text-white fw-bold">Volver al menú principal</p>
          </div>
          <button
            className={style.navigationButtonClose}
            onClick={() => {
              handleClickCloseApplications();
              handleClickClosePrincipal();
              menuPrincipalClose();
            }}
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className={style.submenuTitle}>
          <h2>{title}</h2>
        </div>
        <ul className=" my-4 p-0  overflow-y-auto flex-grow-1">
          {items.map((item) => (
            <li key={item.id} className={style.navigationItem}>
              <Link locale={locale} className="text-white d-block" href={`/aplicaciones?application=${item.link.url}?`}>
                {item.title}
              </Link>
            </li>
          ))}
          <Link className="text-white d-block py-4 fw-bold" locale={locale} href={`/aplicaciones`}>
            Todos las aplicaciones
          </Link>
        </ul>

        <Button variant="solid" color="white" href="/contacto">
          Contactar
        </Button>
      </div>
    </div>
  );
};

const MenuCategories = ({ items, menuCategoriesOpen, handleClickCloseCategories, title, handleClickClosePrincipal, menuPrincipalClose }) => {
  let navigationSubmenuStyles = menuCategoriesOpen ? style.submenuOpen : style.submenuDefault;
  const locale = useLocale();
  return (
    <div className={` py-4  ${style.submenu} ${navigationSubmenuStyles}`}>
      <div className="container d-flex flex-column">
        <div className="d-flex justify-content-between pb-16">
          <div className="d-flex gap-2">
            <button className={style.navigationButtonClose} onClick={handleClickCloseCategories}>
              <BsChevronLeft size={24} />
            </button>
            <p className="mb-0 text-white fw-bold">Volver al menú principal</p>
          </div>
          <button
            className={style.navigationButtonClose}
            onClick={() => {
              handleClickCloseCategories();
              handleClickClosePrincipal();
              menuPrincipalClose();
            }}
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className={style.submenuTitle}>
          <h2>{title}</h2>
        </div>
        <ul className=" my-4 p-0  overflow-y-auto flex-grow-1">
          {items.map((item) => (
            <li key={item.id} className={style.navigationItem}>
              <Link locale={locale} className="text-white d-block" href={`/categorias?categorias=${item.link.url}?`}>
                {item.title}
              </Link>
            </li>
          ))}
          <Link className="text-white d-block py-4 fw-bold" locale={locale} href={`/categorias`}>
            Todos las categorias
          </Link>
        </ul>

        <Button variant="solid" color="white" href="/contacto">
          Contactar
        </Button>
      </div>
    </div>
  );
};

const MenuAgriculture = ({ menuAgricultureOpen, handleClickCloseMenuAgriculture, items, title, icon, menuPrincipalClose }) => {
  let navigationSubmenuStyles = menuAgricultureOpen ? style.submenuOpen : style.submenuDefault;
  const locale = useLocale();
  return (
    <div className={` py-4  ${style.submenu} ${navigationSubmenuStyles}`}>
      <div className="container d-flex flex-column">
        <div className="d-flex justify-content-between pb-16">
          <div className="d-flex gap-2">
            <button className={style.navigationButtonClose} onClick={handleClickCloseMenuAgriculture}>
              <BsChevronLeft size={24} />
            </button>
            <p className="mb-0 text-white fw-bold">Volver al menú principal</p>
          </div>
          <button
            className={style.navigationButtonClose}
            onClick={() => {
              menuPrincipalClose();
              handleClickCloseMenuAgriculture();
            }}
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className={style.submenuTitle}>
          {icon && <img src={icon} alt="Icon" />}
          <h2>{title}</h2>
        </div>
        <ul className=" my-4 p-0  flex-grow-1 overflow-y-auto">
          {items.map((item) => (
            <li key={item.id} className={style.navigationItem}>
              {item.icon && <img src={item.icon} alt={item.title} />}
              <Link locale={locale} className="text-white d-block" href={`/agricultura-sostenible/${item.link.url}?`}>
                {item.title}
              </Link>
            </li>
          ))}
          <Link className="text-white d-block py-4 fw-bold" locale={locale} href={`/agricultura-sostenible`}>
            Ver todo agricultura sostenible
          </Link>
        </ul>

        <Button variant="solid" color="white" href="/contacto">
          Contactar
        </Button>
      </div>
    </div>
  );
};

const MenuSpecialCroops = ({ menuSpecialCroopsOpen, handleClickCloseMenuCroops, items, title, icon, menuPrincipalClose }) => {
  let navigationSubmenuStyles = menuSpecialCroopsOpen ? style.submenuOpen : style.submenuDefault;
  const locale = useLocale();
  return (
    <div className={` py-4  ${style.submenu} ${navigationSubmenuStyles}`}>
      <div className="container d-flex flex-column">
        <div className="d-flex justify-content-between pb-16">
          <div className="d-flex gap-2">
            <button className={style.navigationButtonClose} onClick={handleClickCloseMenuCroops}>
              <BsChevronLeft size={24} />
            </button>
            <p className="mb-0 text-white fw-bold">Volver al menú principal</p>
          </div>
          <button
            className={style.navigationButtonClose}
            onClick={() => {
              handleClickCloseMenuCroops();
              menuPrincipalClose();
            }}
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className={style.submenuTitle}>
          {icon && <img src={icon} alt="Icon cultivos especiales" />}
          <h2>{title}</h2>
        </div>
        <ul className=" my-4 p-0  overflow-y-auto">
          {items[0].submenu.map((item) => (
            <li key={item.id} className={style.navigationItem}>
              <Link locale={locale} className="text-white d-block" href={`/cultivo-especial/${item.link.url}?`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Button variant="solid" color="white" href="/contacto">
          Contactar
        </Button>
      </div>
    </div>
  );
};

const MenuAcademySQM = ({ menuAcademiaSQMOpen, handleClickCloseMenuAcademySQM, items, title, icon, menuPrincipalClose }) => {
  let navigationSubmenuStyles = menuAcademiaSQMOpen ? style.submenuOpen : style.submenuDefault;
  const locale = useLocale();
  return (
    <div className={` py-4  ${style.submenu} ${navigationSubmenuStyles}`}>
      <div className="container d-flex flex-column">
        <div className="d-flex justify-content-between pb-16">
          <div className="d-flex gap-2">
            <button className={style.navigationButtonClose} onClick={handleClickCloseMenuAcademySQM}>
              <BsChevronLeft size={24} />
            </button>
            <p className="mb-0 text-white fw-bold">Volver al menú principal</p>
          </div>
          <button
            className={style.navigationButtonClose}
            onClick={() => {
              handleClickCloseMenuAcademySQM();
              menuPrincipalClose();
            }}
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className={style.submenuTitle}>
          {icon && <img src={icon} alt="Icon" />}
          <h2>{title}</h2>
        </div>
        <ul className="my-4 p-0  overflow-y-auto flex-grow-1">
          {items.map((item) => (
            <li key={item.id} className={style.navigationItem}>
              {item.icon && <img src={item.icon} alt={item.title} />}
              <Link locale={locale} className="text-white d-block" href={`/academia-sqm/${item.link.url}?`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="text-white d-block py-4 fw-bold" locale={locale} href={`/academia-sqm`}>
          Todo Academia SQM Nutrition
        </Link>
        <Button variant="solid" color="white" href="/contacto">
          Contactar
        </Button>
      </div>
    </div>
  );
};

const MenuAboutSQM = ({ menuAboutSQMOpen, handleClickCloseMenuAboutSQM, items, title, icon, menuPrincipalClose }) => {
  let navigationSubmenuStyles = menuAboutSQMOpen ? style.submenuOpen : style.submenuDefault;
  const locale = useLocale();
  return (
    <div className={` py-4  ${style.submenu} ${navigationSubmenuStyles}`}>
      <div className="container d-flex flex-column">
        <div className="d-flex justify-content-between pb-16">
          <div className="d-flex gap-2">
            <button className={style.navigationButtonClose} onClick={handleClickCloseMenuAboutSQM}>
              <BsChevronLeft size={24} />
            </button>
            <p className="mb-0 text-white fw-bold">Volver al menú principal</p>
          </div>
          <button
            className={style.navigationButtonClose}
            onClick={() => {
              handleClickCloseMenuAboutSQM();
              menuPrincipalClose();
            }}
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className={style.submenuTitle}>
          {icon && <img src={icon} alt="Icon" />}
          <h2>{title}</h2>
        </div>
        <ul className="my-4 p-0  overflow-y-auto flex-grow-1">
          {items.map((item) => (
            <li key={item.id} className={style.navigationItem}>
              {item.icon && <img src={item.icon} alt={item.title} />}
              <Link locale={locale} className="text-white d-block" href={`/${item.link.url}?`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <Button variant="solid" color="white" href="/contacto">
          Contactar
        </Button>
      </div>
    </div>
  );
};
