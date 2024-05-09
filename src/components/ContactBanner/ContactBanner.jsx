import React from "react";
import style from "./style.module.css";
import { Button } from "@/components/Button";

export const ContactBanner = ({ data }) => {
  const { image, title, link } = data;

  return (
    <section
      style={{ backgroundImage: `url('${image}')` }}
      className={style.banner}
    >
      <div className="container position-relative">
        <div className={style.card}>
          <h2 className={`fw-bold text-2xl lg:text-5xl mb-48 ${style.title}`}>
            {" "}
            {title}
          </h2>
          <p className="d-grid col-12 col-md-6">
            <Button
              variant="outline"
              color="white"
              href={`/contacto`}
              target={link?.target}
            >
              {link?.text}
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
};
