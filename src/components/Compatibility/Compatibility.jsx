"use client";
import React from "react";
import style from "./style.module.css";
import { Button } from "../Button";
import { BsRCircle, BsCheckCircle, BsXCircle } from "react-icons/bs";

import dynamic from "next/dynamic";
import { getCompatibilityResults } from "@/services/api";
import { Loading } from "../Skeleton";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

// import Select from "react-select";

const leyend = {
  C: <BsCheckCircle className={`flex-shrink-0 ${style.compatible}`} size={18} />,
  N: <BsXCircle className={`flex-shrink-0 ${style.notSupported}`} size={18} />,
  R: <BsRCircle className={`flex-shrink-0 ${style.withRestrictions}`} size={18} />,
};

export const Compatibility = ({ productSlug, productName, productImage, options, country, language }) => {
  let dataOptions = options.map((option) => ({
    label: option.name,
    value: option.slug,
  }));

  const [productsSelected, setProductsSelected] = React.useState("");
  const [select, setSelected] = React.useState([]);

  const [results, setResults] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  function handleSelect(option) {
    setSelected(option);
    const value = option.map((option) => option.value).join(",");
    setProductsSelected(value);
  }

  async function verifyCompatibility() {
    setLoading(true);
    setResults("");
    const response = await getCompatibilityResults(productSlug, country, language, productsSelected);
    if (response) {
      setLoading(false);
      setResults(response);
    }
  }

  const resetCompatibility = () => {
    setSelected([]);
  };

  return (
    <section className={`${style.compatibility} py-56`}>
      <div className="container">
        <section className={style.card}>
          <figure className={style.cardWrapperImage}>
            <img className={style.cardImage} src={productImage} alt={productName} />
          </figure>
          <div className={style.divider}></div>
          <div className={style.cardBody}>
            <h2 className={`text-xl lg:text-3xl text-center fw-bold mb-24 text-md-start ${style.cardTitle}`}>Averigua la compatibilidad</h2>
            <h3 className={`text-xl lg:text-3xl text-center mt-24 mb-16 text-md-start ${style.cardProductName}`}>{productName}</h3>
            <p className={style.cardDescription}>Utiliza el selector para añadir productos y verificar su compatibilidad con el producto</p>
            {/* <SelectRef
            /> */}
            <Select
              value={select}
              instanceId={"compatibility-select"}
              placeholder="Seleccionar productos"
              isMulti
              name="compatibility-products"
              options={dataOptions}
              className="basic-multi-select mb-24"
              classNamePrefix="select"
              onChange={handleSelect}
            />
            <div className=" pb-4 d-flex gap-3 flex-column justify-content-center align-items-center justify-content-md-between flex-md-row">
              <Button variant="solid" color="blue" disabled={productsSelected ? false : true} onClick={verifyCompatibility}>
                Comprobar compatibilidad
              </Button>
              <Button variant="ghost" color="green" onClick={resetCompatibility}>
                Borrar todo
              </Button>
            </div>
            {loading && <Loading />}
            {results && (
              <div className={`${style.results} mb-24`}>
                <h4 className={`text-lg md:text-xl fw-semibold`}>Resultado de compatibilidad de los productos seleccionados con {productName}</h4>
                <ul className={` list-unstyled ${style.resultList}`}>
                  {results.map((result) => (
                    <li key={result.id} className="d-flex  gap-2  align-items-center">
                      {leyend[result.compatibility.code]}
                      {result.name}
                    </li>
                  ))}
                </ul>
                <div className={`${style.references}`}>
                  <h4 className="text-md  fw-bold">Referencias</h4>
                  <ul className=" list-unstyled d-flex flex-column gap-2">
                    <li className="d-flex  gap-2  align-items-center">
                      <BsCheckCircle className={`flex-shrink-0 ${style.compatible}`} size={18} />
                      Producto 100% compatible.
                    </li>
                    <li className="d-flex  gap-2  align-items-center">
                      <BsXCircle className={`flex-shrink-0 ${style.notSupported}`} size={18} />
                      Productos que nunca deben mezclarse en el estanque de disolución.
                    </li>
                    <li className="d-flex  gap-2  align-items-center">
                      <BsRCircle className={`flex-shrink-0 ${style.withRestrictions}`} size={18} />
                      Mezcla con restricciones, a altas concentraciones pueden ocurrir precipitados.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
};
