import "./scene.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Center,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Lion from "../../../public/Lion.jsx";
import Model from "../../../public/Lion.jsx";

function Scene() {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <OrbitControls enableZoom />
        <Suspense fallback={null}>
          <Model />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}

export default Scene;
