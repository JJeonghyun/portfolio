import Image from 'next/image';
import styled from 'styled-components';

import {INFO} from '../../../utils/contant';

const DetailComponent = ({
  aboutRef,
}: {
  aboutRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <AboutMeContainer>
      <div ref={aboutRef}>ABOUT ME</div>
      <div>
        <div>
          {INFO.map((item, index) => (
            <div key={`item-outer-${index}`}>
              <div key={`first-item-${index}`}>
                <Image src={item.img} alt="" key={`item-img-${index}`} />
              </div>
              <div key={`second-item-outer-${index}`}>
                <div key={`first-inner-item-${index}`}>{item.name}</div>
                <div key={`second-inner-item-${index}`}>{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>연락은 편하게 언제든지 메일, DM 및 TISTORY로 부탁드립니다.</div>
    </AboutMeContainer>
  );
};

export default DetailComponent;

const AboutMeContainer = styled.div`
  padding: 35px 0;
  width: 75%;
  margin: 0 auto;
  & > div:first-child {
    width: fit-content;
    margin: 0 auto;
    font-size: 2.5rem;
    font-weight: 800;
    border-bottom: 1px solid lightgray;
  }
  & > div:nth-child(2) {
    width: 90%;
    margin: 0 auto;
    padding: 15px 0;
    & > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      @media only screen and (max-width: 426px) {
        justify-content: center;
      }
      & > div {
        width: 30%;
        display: flex;
        padding: 15px 0;
        @media only screen and (max-width: 768px) {
          width: 50%;
        }
        @media only screen and (max-width: 426px) {
          width: 80%;
        }
        & > div {
          width: 49%;
          margin: 0 auto;
          &:first-child {
            width: 50px;
            margin: 0;
            & > img {
              width: 100%;
              height: auto;
            }
          }
          & > div {
            width: 100%;
          }
        }
      }
    }
  }
  & > div:last-child {
    width: 100%;
    background-color: pink;
    text-align: center;
    padding: 15px 0;
    font-size: 1.2rem;
    font-weight: 750;
  }
`;
