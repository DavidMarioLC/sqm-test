import React, { useId } from "react";
import style from "./checkbox.module.css";

export const Checkbox = ({
  value,
  name = "",
  checked,
  onChange,
  children,
  className,
}) => {
  const checkboxId = useId();
  return (
    <label className={style.checkboxLabel} htmlFor={checkboxId}>
      <input
        type="checkbox"
        id={checkboxId}
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e)}
        className={`${style.checkbox} ${className}`}
      />
      {children}
    </label>
  );
};
