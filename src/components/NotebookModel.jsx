import { Clone, useGLTF } from "@react-three/drei";

export default function NotebookModel({ position, rotation, scale, onClick }) {
  const gltf = useGLTF("/models/Notebook.glb");

  return (
    <>
      <group position={position} rotation={rotation} scale={scale} onClick={onClick}>
        <Clone object={gltf.scene} />
      </group>
    </>
  );
}
