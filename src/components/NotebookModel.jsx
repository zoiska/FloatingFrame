import { useGLTF } from "@react-three/drei";

export default function NotebookModel({ position, rotation, scale }) {
  const gltf = useGLTF("/models/Notebook.glb");

  return (
    <>
      <group position={position} rotation={rotation} scale={scale}>
        <primitive object={gltf.scene} />
      </group>
    </>
  );
}
