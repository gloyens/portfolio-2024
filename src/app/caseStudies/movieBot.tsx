import PageWrapper from "../components/PageWrapper";

interface Props {
  handleBack: () => void;
}

const MovieBot = ({ handleBack }: Props) => {
  return (
    <PageWrapper>
      <button onClick={handleBack}>Back</button>
      <h1>MovieBot</h1>
      <p>Lorem ipsum</p>
    </PageWrapper>
  );
};

export default MovieBot;
