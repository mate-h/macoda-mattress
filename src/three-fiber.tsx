import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Model from "./mattress-model";

function Box(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<MeshProps | undefined>();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current!.rotation.x += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export function Fiber() {
  return (
    <Canvas dpr={window.devicePixelRatio}>
      <Suspense fallback={null}>
        <OrbitControls
          addEventListener={undefined}
          hasEventListener={undefined}
          removeEventListener={undefined}
          dispatchEvent={undefined}
        />
        <Environment preset="sunset" background />
        {/* <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} /> */}
        <Model />
      </Suspense>
    </Canvas>
  );
}
