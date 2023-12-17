"use client";

import { useEffect, useState } from "react";
import { TaskbarWrapper, StartButton } from "./styles";
import TaskbarItems from "@/app/components/TaskbarItems";
import StartMenu from "@/app/components/StartMenu";

const Taskbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TaskbarWrapper>
      <StartMenu isOpen={isOpen} />
      <StartButton onClick={() => setIsOpen(!isOpen)} isActive={isOpen}>
        Start
      </StartButton>
      <TaskbarItems />
      <time>{currentTime}</time>
    </TaskbarWrapper>
  );
};

export default Taskbar;
