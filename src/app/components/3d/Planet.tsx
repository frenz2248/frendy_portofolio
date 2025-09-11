"use client";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";
import { Mesh } from "three";

type Props = {
  position: [number, number, number];
  textureUrl: string;
  size?: number;
};

export default function Planet({ position, textureUrl, size = 1 }: Props) {
  const planetRef = useRef<Mesh>(null);
  const texture = useLoader(TextureLoader, textureUrl);

  return (
    <mesh position={position} ref={planetRef}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
