import { useRef, useState } from "react";

import HeaderComponent from "../components/Header/Component";
import MainComponent from "../components/Main";
import FooterComponent from "../components/Footer/Component";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const linkRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const careerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const moveAboutScroll = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const moveSkillScroll = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  const moveLinkScroll = () => {
    linkRef.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  const moveProjectScroll = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  const moveCareerScroll = () => {
    careerRef.current?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  const toggleFunc = () => {
    setOpen((state) => !state);
  };

  return (
    <div>
      <HeaderComponent
        moveAboutScroll={moveAboutScroll}
        moveSkillScroll={moveSkillScroll}
        moveLinkScroll={moveLinkScroll}
        moveProjectScroll={moveProjectScroll}
        moveCareerScroll={moveCareerScroll}
        open={open}
        setOpen={setOpen}
        toggleFunc={toggleFunc}
      />
      <MainComponent
        aboutRef={aboutRef}
        skillRef={skillRef}
        linkRef={linkRef}
        projectRef={projectRef}
        careerRef={careerRef}
        moveAboutScroll={moveAboutScroll}
      />
      <FooterComponent />
    </div>
  );
}
