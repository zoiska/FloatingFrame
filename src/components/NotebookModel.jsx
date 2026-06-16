import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function NotebookModel({ position, rotation, scale, onClick, emissive = "#000000", emissiveIntensity = 0 }) {
  const gltf = useGLTF("/models/Notebook.glb");

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material.emissive = new THREE.Color(emissive);
        child.material.emissiveIntensity = emissiveIntensity;
      }
    });
  }, [emissive, emissiveIntensity, gltf.scene]);

  return (
    <group
      position={position}
      rotation={rotation}
      scale={scale}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      <primitive object={gltf.scene} />
    </group>
  );
}