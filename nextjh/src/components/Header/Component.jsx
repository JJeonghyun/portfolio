import { useState, useEffect } from "react";
import styled from "styled-components";

const HeaderComponent = ({
  moveAboutScroll,
  moveSkillScroll,
  moveLinkScroll,
  moveProjectScroll,
}) => {
  const [currentScroll, setCurrentScroll] = useState(0);
  const scrollToUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const changeScroll = () => {
    setCurrentScroll(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
  });
  return (
    <>
      <HeaderContainer className={currentScroll > 0 ? "changeScroll" : ""}>
        <div>
          <div
            onClick={() => {
              scrollToUp();
            }}
          >
            JJH
          </div>
          <div>
            <div
              onClick={() => {
                moveAboutScroll();
              }}
            >
              about me
            </div>
            <div
              onClick={() => {
                moveSkillScroll();
              }}
            >
              Skills
            </div>
            <div
              onClick={() => {
                moveLinkScroll();
              }}
            >
              Link
            </div>
            <div
              onClick={() => {
                moveProjectScroll();
              }}
            >
              projects
            </div>
            <div>career</div>
          </div>
        </div>
      </HeaderContainer>
      {currentScroll > 0 ? (
        <ToUpBnt
          onClick={() => {
            scrollToUp();
          }}
        >
          ▲
        </ToUpBnt>
      ) : (
        <></>
      )}
    </>
  );
};

export default HeaderComponent;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 0 15%;
    padding: 15px 0;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.75);

    & > div:first-child {
      width: fit-content;
      margin: 0 45% 0 0;
      cursor: pointer;
      &:hover {
        color: rgba(0, 0, 0, 1);
      }
    }
    & > div:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      & > div {
        cursor: pointer;
        padding: 0 10px;
        margin: 0 5px;
        &:hover {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
`;
const ToUpBnt = styled.div`
  position: fixed;
  right: 2%;
  bottom: 5%;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: black;
  }
`;
