import { Float } from "@react-three/drei";

const Pill = () => {
  return (
    <group position={[-3, -2, 2]}>
      <Float speed={5} rotationIntensity={4} floatIntensity={1}>
        <mesh>
          <capsuleGeometry args={[0.5, 1.6, 2, 4]} />
          <meshStandardMaterial color="#ad1313" roughness={0.3} />
        </mesh>
      </Float>
    </group>
  );
};

export default Pill;
