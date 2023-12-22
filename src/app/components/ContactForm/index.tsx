"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Form } from "./styles";
import { SubmissionData, FieldValues } from "@formspree/core";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqkrzewn");

  const onSubmit = async (
    data: React.FormEvent<HTMLFormElement> | SubmissionData<FieldValues>
  ) => {
    await handleSubmit(data);
    window.alert("Form sent!");
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
