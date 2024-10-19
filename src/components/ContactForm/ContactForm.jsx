import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    id: "",
    name: "",
    number: "",
  };

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact({
      name: values['name'],
      number: values['number']
    }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form_body}>
        <div>
          <div className={css.form_field}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field type="text" name="name" id={nameFieldId} />
            <ErrorMessage name="name" component="span" />
          </div>

          <div className={css.form_field}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field type="text" name="number" id={numberFieldId} />
            <ErrorMessage name="number" component="span" />
          </div>
        </div>
        <div className={css.button_plane}>
          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
}
