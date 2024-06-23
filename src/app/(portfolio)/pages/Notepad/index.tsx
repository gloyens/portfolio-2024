import PageWrapper from "@/app/(portfolio)/components/PageWrapper";
import { NotepadPage, TextArea } from "./styles";

const Notepad = () => {
  return (
    <NotepadPage>
      <PageWrapper>
        <h2>Notepad</h2>
        <TextArea contentEditable placeholder="Write something nice..." />
      </PageWrapper>
    </NotepadPage>
  );
};

export default Notepad;
