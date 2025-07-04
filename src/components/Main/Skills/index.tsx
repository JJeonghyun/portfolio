import styled from 'styled-components';
import Image from 'next/image';

import {STACK_LIST} from '../../../utils/contants/stack';

const SkillsComponent = ({
  skillRef,
}: {
  skillRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <SkillsContainer>
      <div>
        <div ref={skillRef}>SKILLS</div>
        <div>
          {STACK_LIST.map((item, i) => (
            <div key={`index-outer-stackList-${i}`}>
              <div key={`index-i-stackList-${i}`}>
                <div key={`index-stackList-title-${i}`}>{item.title}</div>
                {item.imgList.map((img, j) => (
                  <Image src={img.src} alt="" key={`index-j-img-${j}`}  width={120} height={50}/>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SkillsContainer>
  );
};
export default SkillsComponent;

const SkillsContainer = styled.div`
  width: 100%;
  background-color: #f1f3f5;

  & > div {
    padding: 35px 0;
    width: 75%;
    margin: 0 auto;
    color: #007bff;
    & > div:first-child {
      width: fit-content;
      margin: 0 auto;
      font-size: 2.5rem;
      font-weight: 850;
      border-bottom: 1px solid lightgray;
    }
    & > div:last-child {
      padding: 20px;
      width: 100%;

      @media only screen and (max-width: 426px) {
        justify-content: center;
      }
      & > div {
        width: auto;
        margin: 10px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: 2px 2px 2px 2px white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        transition: transform 0.3s ease;

        @media only screen and (max-width: 768px) {
          width: 150px;
        }
        @media only screen and (max-width: 426px) {
          width: 120px;
        }

        & > div {
          width: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 5px;
          & > img {
            width: 120px;
            height: auto;
            padding: 5px;
          }
          & > div:first-child {
            width: 200px;
            padding: 5px 10px;
            color: #007bff;
            border-right: 1px solid lightgray;
            font-size: 1.2rem;
            font-weight: 800;
            text-align: center;
          }
        }

        &:hover {
          transform: translateY(-5px);
          box-shadow: 3px 3px 3px 3px lightgray;
        }
      }
    }
  }
`;
