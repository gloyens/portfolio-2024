import PageWrapper from "@/app/components/PageWrapper";
import { ContactPage } from "./styles";

import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
  return (
    <ContactPage>
      <PageWrapper>
        <h2>Contact</h2>
        <p>
          For icon-related enquiries, message me on{" "}
          <a href="https://twitter.com/RhosGFX" target="_blank">
            Twitter
          </a>
          .
        </p>
        <p>
          Otherwise you can <a href="mailto:georgegloyens@gmail.com">email</a>{" "}
          me, contact me on{" "}
          <a href="https://linkedin.com/in/gloyens" target="_blank">
            LinkedIn
          </a>
          , or fill out the form below.
        </p>
        <ContactForm />
      </PageWrapper>
    </ContactPage>
  );
};

export default Contact;
