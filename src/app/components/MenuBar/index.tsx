"use client";

import { useState } from "react";
import { MenuBarWrapper, Modal, Tab } from "./styles";
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
        <Modal open={openModal === "File"}>
          <Tab onClick={() => handleOpen("Notepad")}>New</Tab>
        </Modal>
        <p onClick={() => handleModal("File")}>File</p>
      </li>
      <li>
        <Modal open={openModal === "Edit"}>
          <Tab onClick={() => handleEdit(!editing)}>
            {editing ? "Stop editing" : "Edit content"}
          </Tab>
        </Modal>
        <p onClick={() => handleModal("Edit")}>Edit</p>
      </li>
      <li>
        <Modal open={openModal === "View"}>
          <Tab onClick={() => handleDoNothing()}>{viewText}</Tab>
          <Tab hidden={counter <= 25} onClick={() => handleOpen("Wordle")}>
            Play Wordle
          </Tab>
        </Modal>
        <p onClick={() => handleModal("View")}>View</p>
      </li>
    </MenuBarWrapper>
  );
};

export default MenuBar;
