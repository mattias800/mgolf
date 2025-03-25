import { Base, Geometry, Subtraction } from "@react-three/csg";
import { RigidBody } from "@react-three/rapier";
import * as React from "react";

export function GolfCourse() {
  return (
    <group rotation={[0.05, 0, 0]}>
      {/* Ground/Course Base */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh rotation-x={-Math.PI / 2} position={[0, -0.1, 0]}>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="#4a9" />
        </mesh>
      </RigidBody>

      {/* Main Course Path */}
      <RigidBody type="fixed" colliders="trimesh">
        <mesh>
          <meshStandardMaterial color="#3a7" />
          <Geometry>
            <Base>
              <boxGeometry args={[4, 0.2, 20]} />
            </Base>
            <Subtraction scale={[0.3, 1, 0.3]} position={[0, 0, 8]}>
              <cylinderGeometry args={[1, 1, 1]} />
            </Subtraction>
          </Geometry>
        </mesh>
      </RigidBody>

      {/* Course Borders */}
      <group>
        {/* Left Border */}
        <RigidBody type="fixed" colliders="cuboid">
          <mesh position={[-2.1, 0.15, 0]}>
            <boxGeometry args={[0.2, 0.3, 20]} />
            <meshStandardMaterial color="#fff" />
          </mesh>
        </RigidBody>
        {/* Right Border */}
        <RigidBody type="fixed" colliders="cuboid">
          <mesh position={[2.1, 0.15, 0]}>
            <boxGeometry args={[0.2, 0.3, 20]} />
            <meshStandardMaterial color="#fff" />
          </mesh>
        </RigidBody>
        {/* Back Border */}
        <RigidBody type="fixed" colliders="cuboid">
          <mesh position={[0, 0.15, 10]}>
            <boxGeometry args={[4.4, 0.3, 0.2]} />
            <meshStandardMaterial color="#fff" />
          </mesh>
        </RigidBody>
        {/* Front Border */}
        <RigidBody type="fixed" colliders="cuboid">
          <mesh position={[0, 0.15, -10]}>
            <boxGeometry args={[4.4, 0.3, 0.2]} />
            <meshStandardMaterial color="#fff" />
          </mesh>
        </RigidBody>
      </group>
    </group>
  );
}
