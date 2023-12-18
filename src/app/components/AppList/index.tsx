import DesktopApp from "@/app/components/DesktopApp";
import Notepad from "@/app/pages/Notepad";

const AppList = () => {
  return (
    <>
      <DesktopApp index={0} name="Notepad">
        <Notepad />
      </DesktopApp>
    </>
  );
};
export default AppList;
