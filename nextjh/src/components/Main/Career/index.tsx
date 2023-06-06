import styled from "styled-components";

import Block7 from "./Block7/Component";

const Career = ({ careerRef }: { careerRef: any }) => {
  return (
    <CareerContainer>
      <div>
        <div ref={careerRef}>Career</div>
        <div>
          <Block7 />
        </div>
      </div>
    </CareerContainer>
  );
};
export default Career;

const CareerContainer = styled.div`
  width: 100%;
  background-color: rgba(155, 124, 186, 1);
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
      width: 100%;

      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 30px 0;
        & > div:first-child {
          width: 30%;
          & > img {
            width: 100%;
            height: auto;
          }
        }
        & > div:last-child {
          border-left: 1px solid black;
          width: 68%;
          padding: 0 0 0 35px;
          & > div:first-child {
            font-size: 2rem;
            font-weight: 900;
          }
          & > div:nth-child(2) {
            font-size: 1.2rem;
            padding: 15px 0;
          }
          & > div:nth-child(3) {
            font-size: 1.5rem;
            color: white;
          }
        }
      }
    }
  }
`;
