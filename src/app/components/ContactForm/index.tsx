"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Form } from "./styles";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqkrzewn");

  const onSubmit = () => {
    handleSubmit;
    window.alert("Thank you for your submission!");
  };

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </Form>
  );
};

export default ContactForm;
