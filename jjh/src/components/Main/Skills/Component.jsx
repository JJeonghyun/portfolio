import styled from "styled-components";

import FrontEnd from "./FrontEnd/Component";
import BackEnd from "./BackEnd/Component";
import Database from "./Database/Component";

const SkillsComponent = () => {
  return (
    <SkillsContainer>
      <div>SKILLS</div>
      <div>
        <FrontEnd />
        <BackEnd />
        <Database />
      </div>
    </SkillsContainer>
  );
};
export default SkillsComponent;

const SkillsContainer = styled.div`
  padding: 35px 0;
  width: 60%;
  margin: 0 auto;
  & > div:first-child {
    width: fit-content;
    margin: 0 auto;
    font-size: 2.5rem;
    font-weight: 850;
    border-bottom: 1px solid lightgray;
  }
  & > div:last-child {
    display: flex;
    justify-content: flex-start;
  }
`;
