"use client";

import React from "react";
import { Button } from "@/components/Button";
import { BsDownload } from "react-icons/bs";

//   const response = await fetch(
//   `${process.env.SQM_API_URL}/pdf/pdf-blogs?blog=${slug}&wpml_language=${language}`
// );

export const ButtonDownload = ({ slug, language }) => {
  return (
    <React.Fragment>
      <Button variant="outline" color="blue" isOnlyIcon href={url} download="nombre_de_archivo">
        <BsDownload size={18} />
      </Button>
      <p>Descargar</p>
    </React.Fragment>
  );
};
