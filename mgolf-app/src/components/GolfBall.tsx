import { useRef, useState } from "react";
import { RigidBody, RapierRigidBody } from "@react-three/rapier";

export function GolfBall() {
  const ballRef = useRef<RapierRigidBody>(null);
  const [isHitting, setIsHitting] = useState(false);

  const hitBall = () => {
    if (ballRef.current) {
      setIsHitting(true);
      // Apply impulse to the ball
      ballRef.current.applyImpulse({ x: 0, y: 0, z: 10 }, true);
      setTimeout(() => setIsHitting(false), 1000);
    }
  };

  return (
    <RigidBody
      ref={ballRef}
      position={[0, 3.5, 2]}
      restitution={0.9}
      friction={0.5}
      colliders="ball"
    >
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </RigidBody>
  );
}
