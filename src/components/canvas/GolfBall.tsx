import { Decal, Float, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type GolfBallProps = {
  iconUrl: string;
};

const GolfBall = ({ iconUrl }: GolfBallProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [decal] = useTexture([iconUrl]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* scale of the golf ball */}
      <mesh scale={3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff" flatShading />
        {/* Scale of the picture */}
        <Decal
          scale={1}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

export default GolfBall;
