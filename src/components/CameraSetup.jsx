import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

export default function CameraSetup() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 3, 8);
    camera.lookAt(0, -0.5, 0);
  }, [camera]);

  return null;
}
