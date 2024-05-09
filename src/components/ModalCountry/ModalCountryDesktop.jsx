"use client";

import React from "react";
import style from "./modalCountryDesktop.module.css";
import { BsChevronDown } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

export const ModalCountryDesktop = ({ activeCountry, continents }) => {
  // modal
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();
  const [cookies, setCookie] = useCookies();

  function handleChangeCountry(value) {
    setCookie("country", value.code, {
      expires: 0,
      path: "/",
    });
    handleClose();
    router.refresh();
  }

  return (
    <React.Fragment>
      <button className={style.buttonCountry} onClick={handleShow}>
        <img src={activeCountry?.flag} alt={`Bandera de ${activeCountry?.name}`} />
        {activeCountry?.name}
        <BsChevronDown />
      </button>

      <Modal show={show} fullscreen={true} onHide={handleClose}>
        <div className="container">
          <Modal.Header closeButton className="border-0 pt-4">
            <Modal.Title hidden>Selecciona tu ubicación</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2 className={style.modalCountriesTitle}>Selecciona tu ubicación</h2>
            <div className="row">
              <div className="col">
                {/* north america */}
                {
                  <div className={style.northAmerica}>
                    <h3 className={style.continentName}>{continents[0]?.name}</h3>
                    <ul className="d-flex flex-column gap-2 list-unstyled mb-4">
                      {continents[0].countries.map((country) => (
                        <li
                          onClick={() => handleChangeCountry(country)}
                          className={`${style.country} ${activeCountry.name === country.name ? style.activeCountry : ""}`}
                          key={country.id}
                        >
                          <img src={country.flag} alt={country.name} />
                          <span>{country.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                }
                {/* Centroamérica y el Caribe */}
                <div className={style.centroAmerica}>
                  <h3 className={style.continentName}>{continents[1]?.name}</h3>
                  <ul className="d-flex flex-column gap-2 list-unstyled mb-4">
                    {continents[1].countries.map((country) => (
                      <li
                        onClick={() => handleChangeCountry(country)}
                        className={`${style.country} ${activeCountry.name === country.name ? style.activeCountry : ""}`}
                        key={country.id}
                      >
                        <img src={country.flag} alt={country.name} />
                        <span>{country.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col">
                {/* Sur América */}
                <div className={style.southAmerica}>
                  <h3 className={style.continentName}>{continents[2]?.name}</h3>
                  <ul className="d-flex flex-column gap-2 list-unstyled mb-4">
                    {continents[2].countries.map((country) => (
                      <li
                        onClick={() => handleChangeCountry(country)}
                        className={`${style.country} ${activeCountry.name === country.name ? style.activeCountry : ""}`}
                        key={country.id}
                      >
                        <img src={country.flag} alt={country.name} />
                        <span>{country.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col">
                {/* Europa */}
                <div className={style.europe}>
                  <h3 className={style.continentName}>{continents[3]?.name}</h3>
                  <ul className="d-flex flex-column gap-2 list-unstyled mb-4">
                    {continents[3].countries.map((country) => (
                      <li
                        onClick={() => handleChangeCountry(country)}
                        className={`${style.country} ${activeCountry.name === country.name ? style.activeCountry : ""}`}
                        key={country.id}
                      >
                        <img src={country.flag} alt={country.name} />
                        <span>{country.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* África  */}
                <div className={style.africa}>
                  <h3 className={style.continentName}>{continents[4]?.name}</h3>
                  <ul className="d-flex flex-column gap-2 list-unstyled mb-4">
                    {continents[4].countries.map((country) => (
                      <li
                        onClick={() => handleChangeCountry(country)}
                        className={`${style.country} ${activeCountry.name === country.name ? style.activeCountry : ""}`}
                        key={country.id}
                      >
                        <img src={country.flag} alt={country.name} />
                        <span>{country.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col">
                {/* Oceanía */}
                <div className={style.oceania}>
                  <h3 className={style.continentName}>{continents[5]?.name}</h3>
                  <ul className="d-flex flex-column gap-2 list-unstyled mb-4">
                    {continents[5].countries.map((country) => (
                      <li
                        onClick={() => handleChangeCountry(country)}
                        className={`${style.country} ${activeCountry.name === country.name ? style.activeCountry : ""}`}
                        key={country.id}
                      >
                        <img src={country.flag} alt={country.name} />
                        <span>{country.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Medio Oriente */}
                <div className={style.middleEast}>
                  <h3 className={style.continentName}>{continents[6]?.name}</h3>
                  <ul className="d-flex flex-column gap-2 list-unstyled mb-4">
                    {continents[6].countries.map((country) => (
                      <li
                        onClick={() => handleChangeCountry(country)}
                        className={`${style.country} ${activeCountry.name === country.name ? style.activeCountry : ""}`}
                        key={country.id}
                      >
                        <img src={country.flag} alt={country.name} />
                        <span>{country.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </React.Fragment>
  );
};
