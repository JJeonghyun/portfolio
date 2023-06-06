import IntroComponent from "./Intro/Component";
import DetailComponent from "./Detail/Component";
import SkillsComponent from "./Skills";
import Link from "./Link";
import Project from "./Project";
import Career from "./Career";

const MainComponent = ({
  aboutRef,
  skillRef,
  linkRef,
  projectRef,
  careerRef,
  moveAboutScroll,
}) => {
  return (
    <div>
      <IntroComponent moveAboutScroll={moveAboutScroll} />
      <DetailComponent aboutRef={aboutRef} />
      <SkillsComponent skillRef={skillRef} />
      <Link linkRef={linkRef} />
      <Project projectRef={projectRef} />
      <Career careerRef={careerRef} />
    </div>
  );
};

export default MainComponent;
