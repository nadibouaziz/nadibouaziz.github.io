import About from "@/components/profile/Profile";
import Experience from "@/components/experiences/Experience";
import Skills from "@/components/skills/Skills";

export default function Page() {
  return (
    <div className="main">
      <About />
      <Experience />
      <Skills />
    </div>
  );
}
