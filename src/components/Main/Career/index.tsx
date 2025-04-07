import styled from 'styled-components';

import Block7 from './Block7/Component';
import CrossCheck from './CrossCheck/Components';
import QuantumData from './QuantumData/Components';
import SmartShine from './SmartShine/Component';

const Career = ({careerRef}: {careerRef: any}) => {
  return (
    <CareerContainer>
      <div>
        <div ref={careerRef}>Career</div>
        <div>
          <SmartShine />
          <QuantumData />
          <CrossCheck />
          <Block7 />
        </div>
      </div>
    </CareerContainer>
  );
};
export default Career;

const CareerContainer = styled.div`
  width: 100%;
  background-color: #f0f8ff;
  & > div {
    padding: 35px 0;
    width: 75%;
    margin: 0 auto;
    & > div:first-child {
      color: #0056b3;
      width: fit-content;
      margin: 0 auto;
      font-size: 2.5rem;
      font-weight: 850;
      border-bottom: 1px solid lightgray;
    }
    & > div:last-child {
      width: 100%;
      color: #343a40;
      & > div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding: 30px 0;
        & > div:first-child {
          width: 20%;
          & > img {
            width: 100%;
            height: auto;
          }
        }
        & > div:last-child {
          border-left: 1px solid black;
          width: 73%;
          padding: 0 0 0 35px;
          & > div:first-child {
            font-size: 1.5rem;
            font-weight: 900;
          }
          & > div:nth-child(2) {
            font-size: 1.1rem;
            padding: 15px 0;
            color: grey;
          }
          & > div:nth-child(3) {
          }
          & > div:nth-child(4) {
            padding: 20px 0px;
            font-size: 0.9rem;
            font-weight: 650;
            & > div:nth-child(2) {
              padding: 10px 0px;
            }
            & > div:nth-child(3) {
              padding: 0px 20px;
              line-height: 40px;
              & > div {
                padding: 0px 10px;
                font-weight: 500;
              }
            }
          }
        }
      }
    }
  }
`;
