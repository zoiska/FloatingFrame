import { useGLTF } from "@react-three/drei";
import modell from "../assets/office.glb";

export default function OfficeModel() {
  const { scene } = useGLTF(modell);
  return <primitive object={scene} />;
}