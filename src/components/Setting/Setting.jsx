import { useState } from "react";
import css from "./Setting.module.css";
import { GoPlus } from "react-icons/go";
export default function Setting({ onOffModal }) {
  return (
    <div className={css.box}>
      <button type="button" className={css.btn} onClick={onOffModal}>
        <GoPlus className={css.icon} size="24" />
      </button>
    </div>
  );
}
