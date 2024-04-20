import { useEffect, useState } from "react";
import Calendar from "../Calendar/Calendar";
import Events from "../Events/Events";

import css from "./App.module.css";
import Modal from "../Modal/Modal";

function App() {
  const [arrTermin, setArrTermin] = useState(() => {
    const savedTermins = window.localStorage.getItem("saved-termins");
    if (savedTermins !== null) {
      return JSON.parse(savedTermins);
    }
    return [
      {
        id: 1,
        terminTitle: "Some termin",
        terminTime: "14:00",
        terminPlace: "Job center",
        terminDate: "14.04.2024",
        highlightedDate: new Date(2024, 3, 14),
      },
      {
        id: 2,
        terminTitle: "The termin",
        terminTime: "15:00",
        terminPlace: "doc",
        terminDate: "15.04.2024",
        highlightedDate: new Date(2024, 3, 15),
      },
    ];
  });

  useEffect(() => {
    window.localStorage.setItem(
      "saved-termins",
      JSON.stringify([...arrTermin])
    );
  }, [arrTermin]);

  const addTermin = (newTermin) => {
    setArrTermin((arrTermin) => [...arrTermin, newTermin]);
  };

  const [onAddTermin, setOnAddTermin] = useState(false);
  const onOffModal = () => {
    if (onAddTermin) {
      setOnAddTermin(false);
    } else {
      setOnAddTermin(true);
    }
  };

  const delTermin = (id) => {
    const savedTermins = JSON.parse(
      window.localStorage.getItem("saved-termins")
    );
    const filteredTermins = savedTermins.filter((termin) => termin.id !== id);
    window.localStorage.setItem(
      "saved-termins",
      JSON.stringify([...filteredTermins])
    );
    setArrTermin([...filteredTermins]);
  };

  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  const [eventShow, setEventShow] = useState(`${day}.${month}.${year}`);

  const handleEventShow = (date) => {
    setEventShow(date);
  };

  const [notFormattedDate, setNotFormattedDate] = useState([
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate(),
  ]);
  const resetNotFormattedDate = (newDate) => {
    setNotFormattedDate(newDate);
  };

  return (
    <div className={css.box}>
      <div className={css.container}>
        <Calendar
          arrTermin={arrTermin}
          handleEventShow={handleEventShow}
          resetNotFormattedDate={resetNotFormattedDate}
        />
        <Events
          arrTermin={arrTermin}
          eventShow={eventShow}
          onOffModal={onOffModal}
          delTermin={delTermin}
        />
      </div>
      <div className={css.modal}>
        {onAddTermin && (
          <Modal
            className={css.modal}
            addTermin={addTermin}
            eventChosed={eventShow}
            onOffModal={onOffModal}
            arrTermin={arrTermin}
            notFormattedDate={notFormattedDate}
          />
        )}
      </div>
    </div>
  );
}

export default App;
