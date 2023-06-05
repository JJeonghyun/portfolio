import IntroComponent from "./Intro/Component";
import DetailComponent from "./Detail/Component";
import SkillsComponent from "./Skills/Component";
import Link from "./Link";
import Project from "./Project";

const MainComponent = ({ aboutRef, skillRef, linkRef, projectRef }) => {
  return (
    <div>
      <IntroComponent />
      <DetailComponent aboutRef={aboutRef} />
      <SkillsComponent skillRef={skillRef} />
      <Link linkRef={linkRef} />
      <Project projectRef={projectRef} />
    </div>
  );
};

export default MainComponent;
