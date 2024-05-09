"use client";

import React from "react";
import { Title } from "../Title";
import style from "./style.module.css";
import { Button } from "../Button";
import { GoLinkExternal } from "react-icons/go";
import parse from "html-react-parser";
export const BookSingle = ({ data }) => {
  const [collapse, setCollapse] = React.useState(true);
  return (
    <React.Fragment>
      <p className="lg:text-lg color-22">Año {data.year}</p>
      <h1 className="text-2xl lg:text-6xl color-02 fw-bold">{data.title}</h1>
      <p className="fw-bold lg:text-xl mb-1">Autor: </p>
      <p className="lg:text-xl">{data.autor}</p>
      <hr className="border" />
      {/* download and shared */}
      <section className="py-4">
        {data.content.length > 900 ? (
          <React.Fragment>
            <div className={`${collapse ? style.collapse : style.collapsed}`}>
              <Title level={2} className="text-xl lg:text-2xl ">
                Resumen
              </Title>
              {parse(`${data.content}`)}
            </div>
            <button className={style.buttonCollapse} onClick={() => setCollapse(!collapse)}>
              {collapse ? "Seguir leyendo" : "Ver menos"}
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>{parse(`${data.content}`)}</React.Fragment>
        )}
      </section>
      <hr className="border" />
      <p className="d-grid col-12 col-md-3">
        <Button variant="solid" color="blue" href={data.pdf} target="_blank">
          Leer libro en PDF <GoLinkExternal />
        </Button>
      </p>
    </React.Fragment>
  );
};
