import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import "./App.css";
import { TestCourse } from "./components/TestCourse.tsx";
import { GolfCourse } from "./components/GolfCourse.tsx";
import { GolfBall } from "./components/GolfBall.tsx";

function App() {
  return (
    <div id="canvas-container">
      <Canvas
        camera={{
          position: [0, 5, -10],
          fov: 60,
        }}
      >
        <color attach="background" args={["#87CEEB"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

        <Physics>
          <group position={[5, 0, 0]}>
            <TestCourse />
          </group>
          <GolfCourse />
          <GolfBall />
        </Physics>
        <OrbitControls
          minDistance={5}
          maxDistance={20}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>
    </div>
  );
}

export default App;
