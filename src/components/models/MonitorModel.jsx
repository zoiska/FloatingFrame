import { useGLTF } from "@react-three/drei";

export default function MonitorModel() {
  const gltf = useGLTF("/models/monitorModel.glb");

  return (
    <>
      <group position={[0, -0.6, 1.5]} rotation={[0, 0, 0]} scale={3}>
        <primitive object={gltf.scene} />
      </group>
    </>
  );
}
