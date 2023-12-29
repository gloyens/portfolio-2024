import PageWrapper from "../components/PageWrapper";

interface Props {
  handleBack: () => void;
}

const GetIntoGizz = ({ handleBack }: Props) => {
  return (
    <PageWrapper>
      <button onClick={handleBack}>Back</button>
      <h1>GetIntoGizz</h1>
      <p>Lorem ipsum</p>
    </PageWrapper>
  );
};

export default GetIntoGizz;
