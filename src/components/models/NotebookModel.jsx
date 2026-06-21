import { useGLTF } from "@react-three/drei";

export default function NotebookModel() {
  const gltf = useGLTF("/models/notebookModel.glb");

  return (
    <>
      <group position={[0, -0.6, 1.8]} rotation={[0, 0, 0]} scale={0.7}>
        <primitive object={gltf.scene} />
      </group>
    </>
  );
}
