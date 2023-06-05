import { useRef } from "react";

import HeaderComponent from "../components/Header/Component";
import MainComponent from "../components/Main";
import FooterComponent from "../components/Footer/Component";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const linkRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);

  const moveAboutScroll = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const moveSkillScroll = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const moveLinkScroll = () => {
    linkRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const moveProjectScroll = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <HeaderComponent
        moveAboutScroll={moveAboutScroll}
        moveSkillScroll={moveSkillScroll}
        moveLinkScroll={moveLinkScroll}
        moveProjectScroll={moveProjectScroll}
      />
      <MainComponent
        aboutRef={aboutRef}
        skillRef={skillRef}
        linkRef={linkRef}
        projectRef={projectRef}
      />
      <FooterComponent />
    </div>
  );
}
