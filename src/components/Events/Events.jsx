import Setting from "../Setting/Setting";
import { GoHorizontalRule } from "react-icons/go";

import css from "./Events.module.css";

export default function Events({
  arrTermin,
  eventShow,
  onOffModal,
  delTermin,
}) {
  const event = arrTermin.filter((item) => {
    return item.terminDate === eventShow;
  });

  return (
    <div className={css.box}>
      <div>
        <h2>Events</h2>
        <p>{eventShow}</p>
      </div>
      <ul className={css.terminList}>
        {event.length !== 0 ? (
          event.map((item) => {
            return (
              <li key={item.id} className={css.terminListItem}>
                <h3>{item.terminTitle}</h3>
                <p>{item.terminTime}</p>
                <p>{item.terminPlace}</p>
                <button
                  type="button"
                  className={css.btn}
                  onClick={() => delTermin(item.id)}
                >
                  <GoHorizontalRule className={css.icon} size="24" />
                </button>
              </li>
            );
          })
        ) : (
          <li>Empty</li>
        )}
      </ul>
      <Setting onOffModal={onOffModal} />
    </div>
  );
}
