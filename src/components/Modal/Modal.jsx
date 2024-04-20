import css from "./Modal.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { GoX } from "react-icons/go";

export default function Modal({
  addTermin,
  eventChosed,
  onOffModal,
  arrTermin,
  notFormattedDate,
}) {
  const terminTitleId = useId();
  const terminTimeId = useId();
  const terminPlaceId = useId();
  const onSubmit = (ev) => {
    const newTermin = {};
    newTermin.id = arrTermin.length + 1;
    newTermin.terminDate = eventChosed;
    newTermin.terminTitle = ev.terminTitle;
    newTermin.terminTime = ev.terminTime;
    newTermin.terminPlace = ev.terminPlace;
    newTermin.highlightedDate = new Date(notFormattedDate);
    addTermin(newTermin);
  };

  const initialValues = {
    terminTitle: "",
    terminTime: "",
    terminPlace: "",
  };

  return (
    <div className={css.modal}>
      <h3 className={css.modalTitle}>Add termin</h3>
      <button type="button" className={css.iconClose} onClick={onOffModal}>
        <GoX size="24" />
      </button>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={css.form}>
          <label htmlFor={terminTitleId}>Title</label>
          <Field
            className={css.input}
            id={terminTitleId}
            name="terminTitle"
          ></Field>
          <ErrorMessage name="terminTitle"></ErrorMessage>
          <label htmlFor={terminTimeId}>Time</label>
          <Field
            className={css.input}
            id={terminTimeId}
            name="terminTime"
          ></Field>
          <ErrorMessage name="terminTime"></ErrorMessage>
          <label htmlFor={terminPlaceId}>Place</label>
          <Field
            className={css.input}
            id={terminPlaceId}
            name="terminPlace"
          ></Field>
          <ErrorMessage name="terminPlace"></ErrorMessage>
          <button type="submit" className={css.btnSubmit}>
            ADD
          </button>
        </Form>
      </Formik>
    </div>
  );
}
