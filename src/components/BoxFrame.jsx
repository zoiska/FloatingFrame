export default function BoxFrame({ rotation, color }) {
  /**
   * Rotation angegeben in radians kann aus Grad berechnet werden mit z.B. 90 / (180 / PI) = 1.5708
   */
  return (
    <group rotation={[0, rotation, 0]}>
      <mesh position={[0, -1, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[3, 0.3, 3]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[1.5, 0.35, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.3, 3, 3]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position={[0, 0.35, -1.5]} rotation={[0, 1.5708, 0]}>
        <boxGeometry args={[0.3, 3, 3]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}
