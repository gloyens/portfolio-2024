interface Position {
  x: number;
  y: number;
}

interface DraggableProps {
  onDragStart: (position: Position) => void;
  onDrag: (position: Position) => void;
  onDragEnd: () => void;
}

export const enableDrag = (
  targetElement: HTMLElement,
  draggableElement: HTMLElement,
  { onDragStart, onDrag, onDragEnd }: DraggableProps
) => {
  let isDragging = false;
  let initialMouseOffset: Position = { x: 0, y: 0 };
  let initialElementOffset: Position = { x: 0, y: 0 };

  const handleStart = (event: MouseEvent | TouchEvent) => {
    draggableElement.style.transition = "none";

    const isTouchEvent = event instanceof TouchEvent;
    const clientX = isTouchEvent
      ? (event as TouchEvent).touches[0].clientX
      : (event as MouseEvent).clientX;
    const clientY = isTouchEvent
      ? (event as TouchEvent).touches[0].clientY
      : (event as MouseEvent).clientY;

    const targetClicked =
      event.target === targetElement ||
      targetElement.contains(event.target as Node);
    if (targetClicked) {
      isDragging = true;

      const boundingRect = draggableElement.getBoundingClientRect();
      initialMouseOffset = { x: clientX, y: clientY };
      const scrollLeft = document.documentElement.scrollLeft;
      const scrollTop = document.documentElement.scrollTop;
      initialElementOffset = {
        x: boundingRect.left - scrollLeft,
        y: boundingRect.top - scrollTop,
      };

      onDragStart(initialMouseOffset);

      const handleMove = (moveEvent: MouseEvent | TouchEvent) => {
        const moveClientX = isTouchEvent
          ? (moveEvent as TouchEvent).touches[0].clientX
          : (moveEvent as MouseEvent).clientX;
        const moveClientY = isTouchEvent
          ? (moveEvent as TouchEvent).touches[0].clientY
          : (moveEvent as MouseEvent).clientY;

        if (isDragging) {
          const maxX = window.innerWidth - boundingRect.width;
          const maxY = window.innerHeight - boundingRect.height - 36;

          let newLeft =
            moveClientX - initialMouseOffset.x + initialElementOffset.x;
          let newTop =
            moveClientY - initialMouseOffset.y + initialElementOffset.y;

          newLeft = Math.max(0, Math.min(newLeft, maxX));
          newTop = Math.max(0, Math.min(newTop, maxY));

          if (
            newLeft >= 0 &&
            newTop >= 0 &&
            newLeft <= maxX &&
            newTop <= maxY
          ) {
            onDrag({ x: newLeft, y: newTop });
          }
        }
      };

      const handleEnd = () => {
        draggableElement.style.transition = "0.2s";

        if (isDragging) {
          isDragging = false;
          onDragEnd();
          document.removeEventListener("mousemove", handleMove);
          document.removeEventListener("mouseup", handleEnd);
          document.removeEventListener("touchmove", handleMove);
          document.removeEventListener("touchend", handleEnd);
        }
      };

      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("touchmove", handleMove);
      document.addEventListener("touchend", handleEnd);
    }
  };

  draggableElement.addEventListener("mousedown", handleStart);
  draggableElement.addEventListener("touchstart", handleStart, {
    passive: false,
  });
};
