import styled from "styled-components";

const IntroComponent = () => {
  return (
    <IntroContainer>
      <div>
        <div>BackEnd Developer</div>
        <div>장정현</div>
      </div>
      <div>
        <div>아뇽하세요</div>
        <div>다양한 경험을 하기 위해 달리고 있는 백엔드 개발자 입니다</div>
        <div>성실함을 겸비하여 전문성을 높이고자 합니다</div>
      </div>
      <div>자세히보기</div>
    </IntroContainer>
  );
};

export default IntroComponent;

const IntroContainer = styled.div`
  background-image: url("./imgs/backGround.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 80vh;
  width: 100%;

  & > div:first-child {
    padding: 10% 0 0 0;
    & > div {
      width: fit-content;
      margin: 0 auto;
      font-size: 2.5rem;
      color: white;
      font-weight: 900;
    }
  }
  & > div:nth-child(2) {
    padding: 3% 0 0 0;
    & > div {
      width: fit-content;
      margin: 0 auto;
      font-size: 1.5rem;
      color: gray;
    }
  }
  & > div:last-child {
    width: fit-content;
    margin: 3% auto;
    padding: 15px 35px;
    font-size: 1.2rem;
    background-color: rgba(122, 33, 223, 1);
    border-radius: 10px;
    color: white;
  }
`;
