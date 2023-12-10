import PageWrapper from "@/app/components/PageWrapper";
import { CVPage } from "./styles";

const CV = () => {
  return (
    <CVPage>
      <PageWrapper>
        <h2>CV</h2>
        <p>
          Below you&apos;ll find my CV. If it&apos;s hard to read, you can
          either{" "}
          <a href="/george-gloyens-cv.pdf" download>
            download it
          </a>{" "}
          or{" "}
          <a href="/george-gloyens-cv.pdf" target="_blank">
            open it in a new tab
          </a>
          .
        </p>
      </PageWrapper>
      <embed
        src="/george-gloyens-cv.pdf#view=FitH"
        type="application/pdf"
        height="600"
        width="100%"
      ></embed>
    </CVPage>
  );
};

export default CV;
