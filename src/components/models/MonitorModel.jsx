import { useGLTF } from "@react-three/drei";

export default function MonitorModel() {
  const gltf = useGLTF("/models/monitorModel.glb");

  return (
    <>
      <group position={[0, -0.6, 1.5]} rotation={[0, -1.57, 0]} scale={3.5}>
        <primitive object={gltf.scene} />
      </group>
    </>
  );
}
