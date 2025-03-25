import { Base, Geometry, Subtraction } from "@react-three/csg";

export function Cross() {
  return (
    <mesh position={[0, 2.5, 0]}>
      <meshStandardMaterial />
      <Geometry>
        <Base scale={[2, 0.5, 0.5]}>
          <boxGeometry />
        </Base>
        <Subtraction scale={[0.5, 2, 0.5]}>
          <boxGeometry />
        </Subtraction>
      </Geometry>
    </mesh>
  );
}
