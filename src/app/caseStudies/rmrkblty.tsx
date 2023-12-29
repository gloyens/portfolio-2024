import PageWrapper from "../components/PageWrapper";

interface Props {
  handleBack: () => void;
}

const Rmrkblty = ({ handleBack }: Props) => {
  return (
    <PageWrapper>
      <button onClick={handleBack}>Back</button>
      <h1>Rmrkblty</h1>
      <p>Lorem ipsum</p>
    </PageWrapper>
  );
};

export default Rmrkblty;
