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

  const handleMouseDown = (event: MouseEvent) => {
    draggableElement.style.transition = "none";

    const targetClicked =
      event.target === targetElement ||
      targetElement.contains(event.target as Node);
    if (targetClicked) {
      isDragging = true;

      const boundingRect = draggableElement.getBoundingClientRect();
      initialMouseOffset = { x: event.clientX, y: event.clientY };
      const scrollLeft = document.documentElement.scrollLeft;
      const scrollTop = document.documentElement.scrollTop;
      initialElementOffset = {
        x: boundingRect.left - scrollLeft,
        y: boundingRect.top - scrollTop,
      };

      onDragStart(initialMouseOffset);

      const handleMouseMove = (event: MouseEvent) => {
        if (isDragging) {
          const maxX = window.innerWidth - boundingRect.width;
          const maxY = window.innerHeight - boundingRect.height - 36;

          // Calculate the new position within the viewport boundaries
          let newLeft =
            event.clientX - initialMouseOffset.x + initialElementOffset.x;
          let newTop =
            event.clientY - initialMouseOffset.y + initialElementOffset.y;

          // Ensure the window stays within the viewport
          newLeft = Math.max(0, Math.min(newLeft, maxX));
          newTop = Math.max(0, Math.min(newTop, maxY));

          // Update the window position if within the viewport
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

      const handleMouseUp = () => {
        draggableElement.style.transition = "0.2s";

        if (isDragging) {
          isDragging = false;
          onDragEnd();
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        }
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  draggableElement.addEventListener("mousedown", handleMouseDown);
};
