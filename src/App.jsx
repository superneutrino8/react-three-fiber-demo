import React from "react";
import { Canvas } from "react-three-fiber";

import "./App.scss";

function App() {
  return <>
    <Canvas>
      <mesh>
        <boxBufferGeometry attach="geometry" args={[2,2,1]} />
        <meshStandardMaterial attach="material" />
      </mesh>
    </Canvas>
  </>;
}

export default App;
