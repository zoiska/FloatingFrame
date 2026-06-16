import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function Computerroom({ position, rotation, scale, onClick, computerEmissive = "#000000", computerEmissiveIntensity = 0, notebookEmissive = "#000000", notebookEmissiveIntensity = 0, switchEmissive = " #000000", switchEmissiveIntensity = 0, cableEmissive = "#000000", cableEmissiveIntensity = 0 }) {
  const gltf = useGLTF("/models/Computerroom.glb");

    useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        console.log(child.name);
      }
    });
  }, [gltf.scene]);

useEffect(() => {
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      const isComputer = child.name.startsWith("Cube001") || child.name.startsWith("Circle002") || child.name.startsWith("Circle003") || child.name.startsWith("Circle004") || child.name.startsWith("Circle005");
      const isNotebook = child.name.startsWith("Cube006") || child.name.startsWith("Cube007") ||child.name.startsWith("Text") || child.name.startsWith("Text001");
      const isSwitch = child.name.startsWith("Cylinder003");
      const isCable = child.name.startsWith("Cable") || child.name.startsWith("Cable001");

      if (isComputer) {
        child.material.emissive = new THREE.Color(computerEmissive);
        child.material.emissiveIntensity = computerEmissiveIntensity;
      }
      if (isNotebook) {
        child.material.emissive = new THREE.Color(notebookEmissive);
        child.material.emissiveIntensity = notebookEmissiveIntensity;
      }
      if (isSwitch) {
        child.material.emissive = new THREE.Color(switchEmissive);
        child.material.emissiveIntensity = switchEmissiveIntensity;
      }
      if (isCable) {
      child.material.emissive = new THREE.Color(cableEmissive);
      child.material.emissiveIntensity = cableEmissiveIntensity;
      }
    }
  });
}, [computerEmissive, computerEmissiveIntensity, notebookEmissive, notebookEmissiveIntensity, switchEmissive, switchEmissiveIntensity, cableEmissive, cableEmissiveIntensity, gltf.scene]);

  return (
    <group position={position} rotation={rotation} scale={scale} onClick={onClick}>
      <primitive object={gltf.scene} />
    </group>
  );
}