// Add apps that don't appear on the desktop in this file.

import DesktopApp from "@/app/components/DesktopApp";
import Notepad from "@/app/pages/Notepad";
import Wordle from "@/app/pages/Wordle";

const AppList = () => {
  return (
    <ul>
      <DesktopApp index={0} name="Notepad">
        <Notepad />
      </DesktopApp>
      <DesktopApp index={1} name="Wordle">
        <Wordle />
      </DesktopApp>
    </ul>
  );
};
export default AppList;
