import React from "react";
import { MultiSelect } from "react-multi-select-component";
import "./customMultiSelect.css";

export const CustomMultiSelect = ({ ...props }) => {
  return (
    <MultiSelect
      {...props}
      className="custom-multiple-select"
      overrideStrings={{
        allItemsAreSelected: "Todos los items están seleccionados.",
        clearSearch: "Limpiar Busqueda",
        clearSelected: "Limpiar Selección",
        noOptions: "No hay Opciones",
        search: "Buscar",
        selectAll: "Seleccionar todos",
        selectSomeItems: "Seleccionar...",
      }}
    />
  );
};
