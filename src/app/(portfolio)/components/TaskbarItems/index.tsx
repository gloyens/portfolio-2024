import { useAppContext } from "@/app/(portfolio)/utils/context";
import { TaskbarItemsWrapper, TaskbarItem } from "./styles";
import { useEffect, useState } from "react";

interface IconData {
  name: string;
  src: string;
  alt: string;
}

const TaskbarItems = () => {
  const { openList, minimisedList, setMinimisedList, active, setActive } =
    useAppContext();

  const handleMinimise = (title: string) => {
    if (active === title) {
      {
        if (minimisedList.includes(title)) {
          setMinimisedList(minimisedList.filter((item) => item !== title));
          setActive(title);
        } else {
          setMinimisedList([...minimisedList, title]);
          setActive("");
        }
      }
    } else {
      setMinimisedList(minimisedList.filter((item) => item !== title));
      setActive(title);
    }
  };

  return (
    <TaskbarItemsWrapper>
      {openList.map((item, index) => (
        <TaskbarItem
          key={index}
          active={active === item}
          onClick={() => handleMinimise(item)}
        >
          {item}
        </TaskbarItem>
      ))}
    </TaskbarItemsWrapper>
  );
};

export default TaskbarItems;
