import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Knot = () => {
  const brickTexture = useLoader(
    TextureLoader,
    "https://threejs.org/examples/textures/brick_diffuse.jpg",
  );

  return (
    <group position={[0, 0, 0]}>
      <Float speed={5} rotationIntensity={5} floatIntensity={2}>
        <mesh>
          <torusKnotGeometry args={[2, 0.6, 10, 10]} />
          <meshStandardMaterial
            color="#2ecc71"
            roughness={0}
            metalness={1}
            map={brickTexture}
          />
        </mesh>
      </Float>
    </group>
  );
};

export default Knot;
