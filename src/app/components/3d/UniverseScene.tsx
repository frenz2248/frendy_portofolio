"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";
import Planet from "./Planet";

type Props = {
  mousePos: { x: number; y: number };
};

export default function UniverseScene({ mousePos }: Props) {
  // Konversi posisi mouse ke koordinat 3D
  const normalized = useMemo(() => {
    if (typeof window === "undefined") return { x: 0, y: 0 };

    return {
      x: (mousePos.x - window.innerWidth / 2) / 300,
      y: -(mousePos.y - window.innerHeight / 2) / 300,
    };
  }, [mousePos]);

  return (
    <Canvas className="absolute inset-0 z-0">
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        {/* Planet utama */}
        <Planet
          position={[normalized.x, normalized.y, 0]}
          textureUrl="/planet/moon.jpeg"
          size={1.2}
        />

        {/* Planet kedua, diam atau offset */}
        <Planet
          position={[normalized.x + 2, normalized.y - 1, -2]}
          textureUrl="/planet/Sun.jpeg"
          size={0.8}
        />
      </Suspense>
    </Canvas>
  );
}
