"use client";

import { Canvas } from "@react-three/fiber";
import { skills } from "../../constants/skills";
import GolfBall from "../canvas/GolfBall";
import { Environment, OrbitControls, Preload } from "@react-three/drei";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skillSection}>
      <h2 className="sectionHeadText textCenter">Skills</h2>

      <div className={styles.canvasWrapper}>
        {skills.map((skill) => (
          <div className={styles.skillCard} key={skill.name}>
            <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
              <OrbitControls enableZoom={false} enablePan={false} />
              <GolfBall iconUrl={skill.icon} />
              <Environment preset="studio" />
            </Canvas>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
