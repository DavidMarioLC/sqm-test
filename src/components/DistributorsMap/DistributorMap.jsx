"use client";

import React from "react";
import style from "./style.module.css";
import { Select } from "../Form/Select";
import { DistributorCard } from "../DistributorCard";
import { getDistributors } from "@/services/api";

export const DistributorMap = ({ country, cities, language, initialDistribuitors, initialActiveDistribuitor }) => {
  const cityOptions = cities.map((city) => ({ id: city.id, label: city.name, value: city.slug }));
  const allOptions = [{ id: crypto.randomUUID(), label: "Todos", value: "all" }, ...cityOptions];

  const [distributors, setDistributors] = React.useState(initialDistribuitors);
  const [activeDistributor, setActiveDistributor] = React.useState(initialActiveDistribuitor);

  const changeCity = async (city) => {
    const response = await getDistributors(country.code, city, language);
    setDistributors(response);
    setActiveDistributor(response[0]);
  };

  const changeUbication = (distribuitor) => {
    setActiveDistributor(distribuitor);
  };

  return (
    <section className="pb-5">
      <div className={`row ${style.maxWidthFilters} py-24 pt-md-5 pb-md-4 g-4`}>
        <div className="col-12 col-lg-6">
          <p className={style.label}>País seleccionado</p>
          <div className={style.countrySelected}>
            <img className={style.countrySelectedImage} src={country.flag} width={16} height={12} alt="" />
            <span className={style.countrySelectedName}>{country.name}</span>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <p className={style.label}>Ciudad</p>
          <Select label={"Ciudad"} className={style.countryCities} options={allOptions} onChange={changeCity} />
        </div>
      </div>
      <div className="row">
        <React.Fragment>
          <div className="col-12 col-lg-5">
            <article className={style.listDistributors}>
              {distributors.map((distributor) => (
                <DistributorCard
                  key={distributor.id}
                  name={distributor.title}
                  direction={distributor.direction}
                  phone={distributor.phone}
                  mail={distributor.mail}
                  website={distributor.web}
                  latitud={distributor.latitud}
                  longitud={distributor.longitud}
                  changeUbication={() => changeUbication(distributor)}
                  className={`${activeDistributor.id === distributor.id ? style.activeDistribuitor : ""}`}
                />
              ))}
            </article>
          </div>
          <div className="col-12 col-lg-7">
            <h2 className={style.titleMap}>Localiza al distribuidor en el mapa</h2>
            <iframe
              className={style.iframeMap}
              allowFullScreen="allowfullscreen"
              src={`https://www.google.com/maps/embed/v1/place?q=${activeDistributor.latitud},${activeDistributor.longitud}&key=AIzaSyBnLLEvvhLM2ieoAYB3Bwp2tuUK4QtEa5M`}
            ></iframe>
          </div>
        </React.Fragment>
      </div>
    </section>
  );
};
