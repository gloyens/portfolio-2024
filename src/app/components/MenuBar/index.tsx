"use client";

import { useState } from "react";
import { MenuBarWrapper, Modal, Tab } from "./styles";
import { useAppContext } from "@/app/utils/context";
import { handleKeyPress } from "@/app/utils/accessibility";

interface Props {
  setIsEditable: (isEditable: boolean) => void;
}

const MenuBar = ({ setIsEditable }: Props) => {
  const [editing, setEditing] = useState(false);
  const [openModal, setOpenModal] = useState("");
  const { openList, setOpenList, setActive } = useAppContext();

  const [viewText, setViewText] = useState("Do nothing");
  const [counter, setCounter] = useState(1);

  const handleModal = (name: string) => {
    openModal === name ? setOpenModal("") : setOpenModal(name);
  };

  const handleOpen = (name: string) => {
    openList.includes(name)
      ? setOpenList(openList)
      : setOpenList([...openList, name]);
    setActive(name);
  };

  const handleEdit = (editing: boolean) => {
    setIsEditable(editing);
    setEditing(editing);
  };

  const handleDoNothing = () => {
    switch (true) {
      case counter >= 1 && counter < 5:
        setViewText("Did nothing 👍");
        break;
      case counter >= 5 && counter < 10:
        setViewText("Still did nothing 👍");
        break;
      case counter >= 10 && counter < 25:
        setViewText("Continued to do nothing 👍");
        break;
      case counter >= 25:
        setViewText("Ok, fine!");
        break;
      default:
        setViewText("Do nothing");
        break;
    }

    setCounter(counter + 1);
  };

  return (
    <MenuBarWrapper editing={editing}>
      <li>
        <p
          onClick={() => handleModal("File")}
          tabIndex={0}
          onKeyDown={(e) => handleKeyPress(e, () => handleModal("File"))}
        >
          File
        </p>
        <Modal open={openModal === "File"}>
          <Tab onClick={() => handleOpen("Notepad")} tabIndex={0}>
            New
          </Tab>
        </Modal>
      </li>
      <li>
        <p
          onClick={() => handleModal("Edit")}
          tabIndex={0}
          onKeyDown={(e) => handleKeyPress(e, () => handleModal("Edit"))}
        >
          Edit
        </p>
        <Modal open={openModal === "Edit"}>
          <Tab onClick={() => handleEdit(!editing)} tabIndex={0}>
            {editing ? "Stop editing" : "Edit content"}
          </Tab>
        </Modal>
      </li>
      <li>
        <p
          onClick={() => handleModal("View")}
          tabIndex={0}
          onKeyDown={(e) => handleKeyPress(e, () => handleModal("View"))}
        >
          View
        </p>
        <Modal open={openModal === "View"}>
          <Tab onClick={() => handleDoNothing()} tabIndex={0}>
            {viewText}
          </Tab>
          <Tab
            hidden={counter <= 25}
            onClick={() => handleOpen("Wordle")}
            tabIndex={0}
          >
            Play Wordle
          </Tab>
        </Modal>
      </li>
    </MenuBarWrapper>
  );
};

export default MenuBar;
