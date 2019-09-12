import React from "react";
import { Field, reduxForm } from "redux-form";
// import {validate, asyncValidate} from '../formValidate';

const PassengerForm = ({ handleSubmit, pristine, submitting }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>Фамилия</label>
      <div>
        <Field name="lastName" component="input" type="text" />
      </div>
    </div>
    <div>
      <label>Имя</label>
      <div>
        <Field name="firstName" component="input" type="text" />
      </div>
    </div>
    <div>
      <label>Документ</label>
      <div>
        <Field name="document" component="select">
          <option />
          <option value="passport">Паспорт</option>
          <option value="birthCertificate">Свидетельство о рождении</option>
        </Field>
      </div>
    </div>
    <div>
      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </div>
  </form>
);

export default reduxForm({
  form: "passengerForm" // a unique identifier for this form
})(PassengerForm);
