"use client";

import { useMousePosition } from "@/context/MouseContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const MouseTrail = () => {
  const { x, y } = useMousePosition();
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>(
    []
  );

  useEffect(() => {
    const id = Date.now();
    setTrail((prev) => [...prev.slice(-7), { x, y, id }]);
  }, [x, y]);

  return (
    <>
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="pointer-events-none fixed z-[9999] rounded-full"
          style={{
            width: `${16 - index}px`,
            height: `${16 - index}px`,
            left: point.x - (16 - index) / 2,
            top: point.y - (16 - index) / 2,
            background:
              "radial-gradient(circle, rgba(56,132,219,0.8) 0%, rgba(3,25,48,0) 70%)",
            boxShadow: `0 0 ${8 + index * 2}px rgba(56,132,219,0.8)`,
            filter: "blur(1px)",
          }}
          initial={{ opacity: 0.8, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 + index * 0.05 }}
        />
      ))}
    </>
  );
};
