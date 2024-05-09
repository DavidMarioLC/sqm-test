import React, { useId } from "react";

import style from "./radio.module.css";
export const Radio = ({ value, checked, onChange, className, children }) => {
  const checkboxId = useId();
  return (
    <label className="d-flex gap-2 align-center text-white">
      <input
        value={value}
        checked={checked}
        className={`${style.radio} ${className}`}
        type="radio"
        name="lang"
        id={checkboxId}
        onChange={onChange}
      />
      {children}
    </label>
  );
};
