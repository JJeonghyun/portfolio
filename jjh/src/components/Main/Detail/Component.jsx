import styled from "styled-components";
import ItemComponent from "./Item/Component";

const DetailComponent = () => {
  return (
    <AboutMeContainer>
      <div>about me</div>
      <div>
        <ItemComponent />
      </div>
      <div>연락은 DM으로</div>
    </AboutMeContainer>
  );
};

export default DetailComponent;

const AboutMeContainer = styled.div`
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
  & > div:nth-child(2) {
    width: 90%;
    margin: 0 auto;
    padding: 15px 0;
  }
  & > div:last-child {
    width: 100%;
    background-color: hotpink;
    text-align: center;
    padding: 15px 0;
    font-size: 1.2rem;
    font-weight: 750;
  }
`;
