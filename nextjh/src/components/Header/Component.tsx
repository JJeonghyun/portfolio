import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import appImg from "/public/imgs/app.png";

import Category from "./Category/Component";

const HeaderComponent = ({
  moveAboutScroll,
  moveSkillScroll,
  moveLinkScroll,
  moveProjectScroll,
  moveCareerScroll,
  open,
  toggleFunc,
}: {
  moveAboutScroll: any;
  moveSkillScroll: any;
  moveLinkScroll: any;
  moveProjectScroll: any;
  moveCareerScroll: any;
  open: any;
  toggleFunc: any;
}) => {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(0);
  const scrollToUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const changeScroll = () => {
    setCurrentScroll(window.scrollY || document.documentElement.scrollTop);
  };
  const changeWidth = () => {
    setCurrentWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeScroll);
    window.addEventListener("resize", changeWidth);
  });
  return (
    <>
      <HeaderContainer
        className={
          currentScroll > 0 || currentWidth < 426 ? "changeScroll" : ""
        }
      >
        <div  className={
          currentScroll > 0 ? "changeScroll" : ""
        }>
          <div
            onClick={() => {
              scrollToUp();
            }}
            className={
              currentScroll > 0 ? "changeScroll" : ""
            }
          >
            JJH&#39;s Portfolio
          </div>
          <Category
            moveAboutScroll={moveAboutScroll}
            moveSkillScroll={moveSkillScroll}
            moveLinkScroll={moveLinkScroll}
            moveProjectScroll={moveProjectScroll}
            moveCareerScroll={moveCareerScroll}
            currentScroll={currentScroll}
          />
          <div
            onClick={() => {
              toggleFunc();
            }}
          >
            <Image src={appImg} alt="" />
          </div>
        </div>
        {open ? (
          <Category
            moveAboutScroll={moveAboutScroll}
            moveSkillScroll={moveSkillScroll}
            moveLinkScroll={moveLinkScroll}
            moveProjectScroll={moveProjectScroll}
            moveCareerScroll={moveCareerScroll}
          />
        ) : (
          <></>
        )}
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
  z-index: 5;
  background-color : rgba(255,255,255,0);
  .changeScroll {
    background-color : rgba(255,255,255,1);
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15px 10%;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 1);
    .changeScroll {
      color: rgba(0, 0, 0, 1);
    }
    @media only screen and (max-width: 426px) {
      justify-content: space-between;
    }
    &:nth-child(2) {
      align-items: flex-start;
      flex-direction: column;
      & > div {
        padding: 5px 0;
      }
    }

    & > div:first-child {
      width: fit-content;
      margin: 0 35% 0 0;
      cursor: pointer;
      &:hover {
        color: rgba(0, 0, 0, 1);
      }
      @media only screen and (max-width: 1024px) {
        margin: 0 25% 0 0;
      }
      @media only screen and (max-width: 426px) {
        font-size: 2rem;
      }
    }
    & > div:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      @media only screen and (max-width: 426px) {
        display: none;
      }
      & > div {
        cursor: pointer;
        padding: 0 10px;
        margin: 0 5px;
        font-size: 1.2rem;
        &:hover {
          color: rgba(0, 0, 0, 1);
        }
        @media only screen and (max-width: 1024px) {
          margin: 0;
          padding: 0 5px;
        }
      }
    }
    & > div:last-child {
      display: none;
      @media only screen and (max-width: 426px) {
        display: block;
        width: 30px;
        & > img {
          width: 100%;
          height: auto;
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
