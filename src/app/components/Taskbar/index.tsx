"use client";

import { useEffect, useRef, useState } from "react";
import { TaskbarWrapper, StartButton } from "./styles";
import TaskbarItems from "@/app/components/TaskbarItems";
import StartMenu from "@/app/components/StartMenu";

const Taskbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  const taskbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        taskbarRef.current &&
        !taskbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
    <TaskbarWrapper ref={taskbarRef}>
      <StartButton onClick={() => setIsOpen(!isOpen)} isActive={isOpen}>
        Start
      </StartButton>
      <StartMenu isOpen={isOpen} />
      <TaskbarItems />
      <time>{currentTime}</time>
    </TaskbarWrapper>
  );
};

export default Taskbar;
