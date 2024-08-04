import { Float } from "@react-three/drei";

const Donut = () => {
  return (
    <group position={[2, -2, 3]}>
      <Float speed={5} rotationIntensity={5} floatIntensity={5}>
        <mesh>
          <torusGeometry args={[0.6, 0.25, 16, 32]} />
          <meshStandardMaterial color="#f1c40f" roughness={0.4} />
        </mesh>
      </Float>
    </group>
  );
};

export default Donut;
