import styled from "styled-components";

import FrontEnd from "./FrontEnd/Component";
import BackEnd from "./BackEnd/Component";
import Communication from "./Communication/Component";
import Contract from "./Contract/Component";
import Tools from "./Tools/Component";
import Deployment from "./Deploy/Component";

const SkillsComponent = ({ skillRef }: { skillRef: any }) => {
  return (
    <SkillsContainer>
      <div>
        <div ref={skillRef}>SKILLS</div>
        <div>
          <FrontEnd />
          <BackEnd />
          <Contract />
          <Communication />
          <Tools />
          <Deployment />
        </div>
      </div>
    </SkillsContainer>
  );
};
export default SkillsComponent;

const SkillsContainer = styled.div`
  width: 100%;
  background-color:  rgba(255, 111, 97, 0.8);
 
  & > div {
    padding: 35px 0;
    width: 75%;
    margin: 0 auto;
    & > div:first-child {
      width: fit-content;
      margin: 0 auto;
      font-size: 2.5rem;
      font-weight: 850;
      border-bottom: 1px solid lightgray;
    }
    & > div:last-child {
      display:grid;
      justify-items: center;
      grid-template-areas:
      'backend deploy tool'
      'backend deploy tool'
      'backend frontend tool'
      'backend frontend communication'
      'backend contract communication'
      'backend contract communication'
      'backend ... communication';
      
      @media only screen and (max-width: 426px) {
        justify-content: center;
      }
      
    }
  }
`;
