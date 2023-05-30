import IntroComponent from "./Intro/Component";
import DetailComponent from "./Detail/Component";
import SkillsComponent from "./Skills/Component";
import Link from "./Link";
import Project from "./Project";

const MainComponent = () => {
  return (
    <div>
      <IntroComponent />
      <DetailComponent />
      <SkillsComponent />
      <Link />
      <Project />
    </div>
  );
};

export default MainComponent;
