"use client";
import React from "react";
import style from "./filterModal.module.css";
import { CgClose } from "react-icons/cg";

export const FilterModal = ({ open, onClose, children }) => {
  React.useEffect(() => {
    if (open) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
  }, [open]);
  return (
    <div
      className={`${style.modal} ${open ? style.modalOpen : style.modalClose}`}
    >
      <button className={style.modalCloseButton} onClick={onClose}>
        <CgClose size={24} />
      </button>

      {children}
    </div>
  );
};

export const FilterModalHeader = ({ children }) => {
  return <div className={style.modalHeader}>{children}</div>;
};

export const FilterModalContent = ({ children }) => {
  return <div className={style.modalContent}>{children}</div>;
};

export const FilterModalFooter = ({ children }) => {
  return <div className={style.modalFooter}>{children}</div>;
};

export const ButtonClear = ({ children }) => {
  return <button className={style.modalButtonClear}>{children}</button>;
};

export const ButtonShowResult = ({ children }) => {
  return <button className={style.modalButtonShowResult}>{children}</button>;
};
