import React from "react";

import style from "./filterButton.module.css";

export const FilterButton = ({ className, onClick, children }) => {
  return (
    <button onClick={onClick} className={`${style.button} ${className}`}>
      {children}
    </button>
  );
};
