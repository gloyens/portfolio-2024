"use client";

import { useEffect, useState } from "react";
import { TaskbarWrapper, StartButton } from "./styles";
import TaskbarItems from "@/app/components/TaskbarItems";

const Taskbar = () => {
  const [currentTime, setCurrentTime] = useState(
  new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString(
        [], {hour: '2-digit', minute:'2-digit'}
      ));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TaskbarWrapper>
      <StartButton>Start</StartButton>
      <TaskbarItems />
      <time>{currentTime}</time>
    </TaskbarWrapper>
  )
}

export default Taskbar;
