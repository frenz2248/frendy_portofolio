"use client";

import { createContext, useContext, useEffect, useState } from "react";

type MousePosition = { x: number; y: number };
const MouseContext = createContext<MousePosition>({ x: 0, y: 0 });

export function MouseProvider({ children }: { children: React.ReactNode }) {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <MouseContext.Provider value={mousePos}>{children}</MouseContext.Provider>
  );
}

export function useMousePosition() {
  return useContext(MouseContext);
}
