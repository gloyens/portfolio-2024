import PageWrapper from "../components/PageWrapper";

interface Props {
  handleBack: () => void;
}

const Portfolio = ({ handleBack }: Props) => {
  return (
    <PageWrapper>
      <button onClick={handleBack}>Back</button>
      <h1>Portfolio</h1>
      <p>Lorem ipsum</p>
    </PageWrapper>
  );
};

export default Portfolio;
