import { useState } from "react";

import Calendary from "react-calendar";
import "react-calendar/dist/Calendar.css";

import css from "./Calendar.module.css";

export default function Calendar({
  arrTermin,
  handleEventShow,
  resetNotFormattedDate,
}) {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

  const onClickDay = (ev) => {
    const dateLine = `${String(ev.getDate()).padStart(2, "0")}.${String(
      ev.getMonth() + 1
    ).padStart(2, "0")}.${ev.getFullYear()}`;
    const notFormattedDateLine = [
      ev.getFullYear(),
      ev.getMonth() + 1,
      ev.getDate(),
    ];
    handleEventShow(dateLine);
    resetNotFormattedDate(notFormattedDateLine);
  };

  const classAccent = css.classAccent;

  const tileClassName = ({ date }) => {
    return arrTermin.filter(
      (termin) => new Date(termin.highlightedDate).getTime() === date.getTime()
    ).length > 0
      ? classAccent
      : null;
  };

  return (
    <div className={css.box}>
      <Calendary
        className={css.calendar}
        tileClassName={tileClassName}
        onChange={onChange}
        value={date}
        locale="en-EN"
        onClickDay={onClickDay}
      />
    </div>
  );
}
