import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function SpinningBox() {
  const meshRef = useRef<THREE.Mesh>(null!);

  // Rotate the cube every frame
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = elapsed * 0.5;
      meshRef.current.rotation.y = elapsed * 0.7;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6366f1" roughness={0.4} metalness={0.7} />
    </mesh>
  );
}

export default function ThreeDCube() {
  return (
    <div style={{ width: "200px", height: "200px", margin: "1rem auto" }}>
      <Canvas camera={{ position: [3, 3, 3], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <SpinningBox />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
