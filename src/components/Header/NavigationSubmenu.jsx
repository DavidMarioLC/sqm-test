import React from "react";
import { Button } from "@/components/Button";
import { CarouselMenuHeader } from "@/components/CarouselMenuHeader";
import { useLocale } from "next-intl";
import { Link } from "@/navigation";
import style from "./headerDesktop.module.css";
import { BsArrowRightCircle } from "react-icons/bs";
export const NavigationSubmenu = ({ showSubmenu, data }) => {
  const locale = useLocale();
  const MENU_TYPE = {
    submenu_full: style.navigationSubmenuFull,
    submenu_carousel: style.navigationSubmenuCarousel,
    submenu_vertical: style.navigationSubmenuAboutsqm,
  };

  return (
    <div className={`${style.navigationSubmenu} ${showSubmenu ? style.showSubmenu : ""} ${data.type ? MENU_TYPE[data.type] : ""}`}>
      {data.submenu.map((item) => (
        <div className={style.navigationSubmenuItem} key={item.id}>
          <h3 className="text-xl">
            {item.icon && <img src={item.icon} alt={"icono de menu"} />} {item.title}
          </h3>

          {data.type === "submenu_carousel" ? (
            <CarouselMenuHeader items={item.links} />
          ) : (
            <React.Fragment>
              {item.link.url === "marcas" ? (
                <React.Fragment>
                  <ul>
                    {item.links.map((itemChild) => (
                      <li key={itemChild.id}>
                        <Link locale={locale} href={`/${data.link.url}/${itemChild.link.url}`}>
                          {itemChild.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Button
                    color="green"
                    variant="ghost"
                    href={`/${item.link.url}`}
                    target={item.link.target}
                    className="d-flex gap-2 justify-content-start"
                  >
                    {item.link.text}
                    <BsArrowRightCircle size={18} />
                  </Button>
                </React.Fragment>
              ) : item.link.url === "categorias" ? (
                <React.Fragment>
                  <ul>
                    {item.links.map((itemChild) => (
                      <li key={itemChild.id}>
                        <Link locale={locale} href={`/${item.link.url}?categorias=${itemChild.link.url}`}>
                          {itemChild.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Button
                    color="green"
                    variant="ghost"
                    href={`/${item.link.url}`}
                    target={item.link.target}
                    className="d-flex gap-2 justify-content-start"
                  >
                    {item.link.text}
                    <BsArrowRightCircle size={18} />
                  </Button>
                </React.Fragment>
              ) : item.link.url === "aplicaciones" ? (
                <React.Fragment>
                  <ul>
                    {item.links.map((itemChild) => (
                      <li key={itemChild.id}>
                        <Link locale={locale} href={`/${item.link.url}?applicaciones=${itemChild.link.url}`}>
                          {itemChild.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Button
                    color="green"
                    variant="ghost"
                    href={`/${item.link.url}`}
                    target={item.link.target}
                    className="d-flex gap-2 justify-content-start"
                  >
                    {item.link.text}
                    <BsArrowRightCircle size={18} />
                  </Button>
                </React.Fragment>
              ) : item.link.url === "sobre-sqm" ? (
                <ul>
                  {item.links.map((itemChild) => (
                    <li key={itemChild.id}>
                      <Link locale={locale} href={`/${itemChild.link.url}`}>
                        {itemChild.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <React.Fragment>
                  <ul>
                    {item.links.map((itemChild) => (
                      <li key={itemChild.id}>
                        <Link locale={locale} href={`/${data.link.url}/${itemChild.link.url}`}>
                          {itemChild.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {data.link.url !== "sobre-sqm" && (
                    <Button
                      color="green"
                      variant="ghost"
                      href={`/${data.link.url}`}
                      target={item.link.target}
                      className="d-flex gap-2 justify-content-start"
                    >
                      {item.link.text}
                      <BsArrowRightCircle size={18} />
                    </Button>
                  )}
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </div>
      ))}
    </div>
  );
};
