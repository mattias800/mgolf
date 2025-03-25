import * as React from "react";
import { RigidBody } from "@react-three/rapier";
import { Base, Geometry, Subtraction } from "@react-three/csg";

export interface TestCourseProps {}

export const TestCourse: React.FC<TestCourseProps> = () => {
  const r = 2;

  return (
    <group>
      {/* Main Course Path */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh>
          <meshStandardMaterial color="#3a7" />
          <Geometry>
            <Base>
              <boxGeometry args={[4, 0.2, 4]} />
            </Base>
            <Subtraction scale={[0.3, 1, 0.3]}>
              <cylinderGeometry args={[1, 1, 1]} />
            </Subtraction>
          </Geometry>
        </mesh>
      </RigidBody>
    </group>
  );
};
