"use client";

import { useState } from "react";
import { MenuBarWrapper, Modal } from "./styles";
import { useAppContext } from "@/app/utils/context";

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
    console.log(counter, viewText);

    switch (true) {
      case counter >= 1 && counter < 5:
        setViewText("Did nothing 👍");
        break;
      case counter >= 5 && counter < 10:
        setViewText("Still did nothing 👍");
        break;
      case counter >= 10:
        setViewText("Continued to do nothing 👍");
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
        <Modal open={openModal === "File"}>
          <button onClick={() => handleOpen("Notepad")}>New</button>
        </Modal>
        <p onClick={() => handleModal("File")}>File</p>
      </li>
      <li>
        <Modal open={openModal === "Edit"}>
          <button onClick={() => handleEdit(!editing)}>
            {editing ? "Stop editing" : "Edit content"}
          </button>
        </Modal>
        <p onClick={() => handleModal("Edit")}>Edit</p>
      </li>
      <li>
        <Modal open={openModal === "View"}>
          <button onClick={() => handleDoNothing()}>{viewText}</button>
        </Modal>
        <p onClick={() => handleModal("View")}>View</p>
      </li>
    </MenuBarWrapper>
  );
};

export default MenuBar;
