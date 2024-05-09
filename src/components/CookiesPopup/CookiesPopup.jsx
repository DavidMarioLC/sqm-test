"use client";

import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsInfoCircleFill } from "react-icons/bs";
import { Button } from "../Button";
import { getCookie, setCookie } from "cookies-next";

export const CookiesPopup = () => {
  const [show, setShow] = React.useState(false);
  const locale = useLocale();
  const handleClose = () => setShow(false);

  const saveCookie = () => {
    setCookie("cookies-policy", true);
    handleClose();
  };

  React.useEffect(() => {
    if (getCookie("cookies-policy")) {
      handleClose();
    } else {
      setShow(true);
    }
  }, []);

  return (
    <Offcanvas show={show} placement="bottom" backdrop="static">
      <Offcanvas.Body>
        <div className="container pt-4" style={{ maxWidth: 900 }}>
          <div className="d-flex flex-column  flex-md-row gap-2 gap-md-4">
            <BsInfoCircleFill color="#0033A1" size={37} className="mb-2" />
            <p className="pb-4">
              Este sitio utiliza cookies para ofrecer una mejor experiencia de navegación. Mas
              información sobre{" "}
              <Link
                locale={locale}
                href={"/politicas-de-cookies"}
                className=" text-decoration-underline color-02"
              >
                cómo utilizamos las cookies
              </Link>
            </p>
          </div>
          <div className="d-flex flex-column gap-3 flex-md-row">
            <Button variant="solid" color="blue" onClick={saveCookie}>
              Aceptar todas las cookies
            </Button>
            <Button variant="outline" color="blue" className="px-3" onClick={saveCookie}>
              Aceptar solo las cookies esenciales
            </Button>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
