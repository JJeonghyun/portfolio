import styled from "styled-components";
import TypeWriter, { Options } from "typewriter-effect";

const stackArr: string[] = [
  "백엔드 개발자",
  "서버 개발자",
  "웹 백엔드 개발자",
  "DevOps",
];

const IntroComponent = ({ moveAboutScroll }: { moveAboutScroll: any }) => {
  const options: Options = {
    strings: stackArr,
    autoStart: true,
    loop: true,
    delay: 150,
  };

  return (
    <IntroContainer>
      <div>
        <div>
          <TypeWriter options={options} />
        </div>
        <div>장정현</div>
      </div>
      <div>
        <div>안녕하세요!</div>
        <div>매일 성장하는 것을 목표로 하는 웹 백엔드 개발자입니다.</div>
        <div>새로운 기술을 배우는 것에 흥미를 느끼고 있습니다.</div>
      </div>
      <div
        onClick={() => {
          moveAboutScroll();
        }}
      >
        더 알아보기 ▼
      </div>
    </IntroContainer>
  );
};

export default IntroComponent;

const IntroContainer = styled.div`
  background-image: url("./imgs/notebook.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 80vh;
  width: 100%;
  @media only screen and (max-width: 768px) {
    background-size: cover;
  }
  & > div:first-child {
    padding: 10% 0 0 0;
    @media only screen and (max-width: 768px) {
      padding: 30% 0 0 0;
    }
    @media only screen and (max-width: 426px) {
      padding: 45% 0 0 0;
    }
    & > div {
      width: fit-content;
      margin: 0 auto;
      font-size: 3rem;
      color: white;
      font-weight: 900;
      @media only screen and (max-width: 768px) {
        color: black;
      }
    }
    & > div:first-child {
      display: flex;
      justify-content: center;
    }
  }
  & > div:nth-child(2) {
    padding: 3% 0 0 0;
    & > div {
      width: fit-content;
      margin: 0 auto;
      font-size: 1.2rem;
      color :white;
    }
  }
  & > div:last-child {
    background-color: rgba(122, 33, 223, 1);
    padding: 15px 35px;
    border-radius: 50px;
    cursor: pointer;
    color: white;
    width: fit-content;
    margin: 3% auto;
    font-size: 1.2rem;
  }
`;
