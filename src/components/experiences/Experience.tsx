"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Image from "next/image";

import "react-vertical-timeline-component/style.min.css";

import styles from "./experience.module.css";
import { experiences } from "../../constants/experiences";

interface ExperienceItem {
  date: string;
  iconBg: string;
  icon: string;
  title: string;
  company_name: string;
  points: string[];
}

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className={styles.iconWrapper}>
        <Image
          src={experience.icon}
          alt={experience.company_name}
          width={60}
          height={60}
          className={styles.iconImage}
          style={{borderRadius: "30px"}}
        />
      </div>
    }
    visible={true}
  >
    <h3 className={styles.experienceTitle}>{experience.title}</h3>
    <p className={styles.experienceCompany}>{experience.company_name}</p>

    <ul className={styles.experienceList}>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className={styles.experiencePoint}
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <section>
      <div>
        <h2 className="sectionHeadText textCenter" >
          Work Experience
        </h2>
      </div>

      <div className={styles.timelineWrapper}>
        <VerticalTimeline lineColor="">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
