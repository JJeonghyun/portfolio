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
  background-color: rgba(167, 64, 86, 1);
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
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: colunm;
      @media only screen and (max-width: 426px) {
        justify-content: center;
      }
      & > div {
        width: 30%;
        margin: 20px 0 10px 0;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 2px 2px 2px 2px white;
        @media only screen and (max-width: 768px) {
          width: 45%;
        }
        @media only screen and (max-width: 426px) {
          width: 80%;
        }
        & > div {
          width: 90%;
          margin: 0 auto;
        }
        & > div:first-child {
          width: 90%;
          padding: 5px 0;
          border-bottom: 1px solid black;
          color: orange;
          font-size: 1.2rem;
          font-weight: 800;
          margin: 0 auto;
        }
        & > div:nth-child(2),
        & > div:nth-child(3),
        & > div:nth-child(4) {
          display: flex;
          width: 30%;
          justify-content: center;
          align-items: center;
          & > img {
            width: 100%;
            height: auto;
            padding: 20px 5px;
          }
        }
        &:hover {
          transform: translateY(-10px);
          transition: all 0.5s;
        }
      }
    }
  }
`;
