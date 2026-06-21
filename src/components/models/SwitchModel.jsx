import { useGLTF } from "@react-three/drei";

export default function SwitchModel() {
  const gltf = useGLTF("/models/switchModel.glb");

  return (
    <>
      <group position={[0, 0, 1]} rotation={[1.55, 0, 0]} scale={0.008}>
        <primitive object={gltf.scene} />
      </group>
    </>
  );
}
