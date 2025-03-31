import styled from 'styled-components';

import Image from 'next/image';
import solidityImg from 'public/imgs/stack/contract/solidity.png';
import remixImg from 'public/imgs/stack/contract/remix.png';

const imgList = [solidityImg, remixImg];

const Contract = () => {
  return (
    <InnerSkills>
      <div>Contract</div>
      <div>
        {imgList.map((item, i) => (
          <Image src={item} alt="" key={`index-i-innerImg-${i}`} />
        ))}
      </div>
    </InnerSkills>
  );
};
export default Contract;

const InnerSkills = styled.div`
  width: auto; /* width 값 조정 */
  margin: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8); /* 배경색 변경 */
  box-shadow: 2px 2px 2px 2px white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  transition: transform 0.3s ease; /* 부드러운 전환 효과 */

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
      width: 50px; /* 이미지 크기 조정 */
      height: auto;
      padding: 5px;
    }
  }

  & > div:first-child {
    width: 100%;
    padding: 5px 0;
    border-bottom: 1px solid black;
    color: orange;
    font-size: 1.2rem;
    font-weight: 800;
    margin: 0 auto 10px; /* 제목 아래 간격 추가 */
    text-align: center; /* 텍스트 가운데 정렬 */
  }

  &:hover {
    transform: translateY(-5px); /* hover 시 살짝 위로 이동 */
    box-shadow: 3px 3px 3px 3px lightgray; /* 그림자 효과 변경 */
  }
`;
