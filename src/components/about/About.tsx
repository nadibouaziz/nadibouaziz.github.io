import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <h3>Hey, It&lsquo;s Me</h3>
        <h1>Nadi Bouaziz</h1>
        <h3>
          And I&lsquo;m a <span>Sofware Engineer</span>
        </h3>
        <p>
          I&lsquo;m originally from France. I lived abroad for 2 years during my studies ( Montreal and Beijing ) and I currently live in Hong Kong.
        </p>

        <p>With a background in computer science, I&lsquo;m a backend developer. I work on the invisible but very important side of every application. I&lsquo;m a problem solver at heart and love taking on complex and challenging projects. I&lsquo;m great at quickly getting up to speed and breaking down tricky business requirements for industry-specific systems. My curiosity, however, reaches beyond the boundaries of conventional development; I&lsquo;ve a great interest in the the fascinating world of DevOps and Cloud.</p>
        
        <p>Outside of work, I practice martial arts and bodyweight workouts, which help me maintain focus and discipline in both my personal and professional life. I am always eager to embrace new challenges and grow both personally and professionally.</p>
        <div className={styles.socialMedia}>
          <a href="#">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="#">
            <i className="bx bxl-github"></i>
          </a>
          
        </div>

        <a href="/resume.pdf" className="resume">
          Download CV
        </a>
        
      </div>
      <div className={styles.aboutImg}>
        <Image 
            src="/img/profile-pic.png" 
            alt="Mon image" 
            width={400} 
            height={400} 
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ width: '100%', height: 'auto' }}
          />
      </div>
    </section>
  );
};

export default About;

