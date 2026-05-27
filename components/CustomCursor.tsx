"use client";

import { useEffect, useMemo, useState } from "react";

const interactiveSelector = "a, button, input, textarea, select, [role='button']";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  const style = useMemo(
    () => ({
      left: `${position.x}px`,
      top: `${position.y}px`,
    }),
    [position],
  );

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handlePointerOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest(interactiveSelector)) {
        setActive(true);
      }
    };

    const handlePointerOut = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest(interactiveSelector)) {
        setActive(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("pointerover", handlePointerOver, true);
    document.body.addEventListener("pointerout", handlePointerOut, true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("pointerover", handlePointerOver, true);
      document.body.removeEventListener("pointerout", handlePointerOut, true);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        style={style}
        className={`pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 rounded-full border border-text/20 bg-text/10 transition-all duration-200 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        } ${active ? "h-5 w-5 border-accent bg-accent/20" : "h-3 w-3"}`}
      />
    </div>
  );
}
