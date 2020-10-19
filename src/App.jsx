import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

import "./App.scss";

const SpiningBox = ({ position, args, color }) => {
  const mesh = useRef(null);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <SpiningBox position={[0, 1, 0]} args={[3, 2, 1]} color="lightblue" />
        <SpiningBox position={[-2, 1, -5]} color="lightpink" />
        <SpiningBox position={[5, 1, -2]} color="lightpink" />
      </Canvas>
    </>
  );
}

export default App;
