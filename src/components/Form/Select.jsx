import React from "react";
import style from "./select.module.css";

export const Select = ({ className, defaultValue, onChange, options, ...props }) => {
  return (
    <React.Fragment>
      <select value={defaultValue} onChange={(e) => onChange(e.target.value)} className={`${style.select} ${className}`} {...props}>
        {options.map((item) => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};
