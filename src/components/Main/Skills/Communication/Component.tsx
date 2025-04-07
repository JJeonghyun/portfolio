import styled from 'styled-components';

import Image from 'next/image';
import trelloImg from 'public/imgs/stack/etc/trello.png';
import notionImg from 'public/imgs/stack/etc/notion.png';
import sheetsImg from 'public/imgs/stack/etc/sheets.png';
import slackImg from 'public/imgs/stack/etc/slack.png';

const imgList = [trelloImg, notionImg, sheetsImg, slackImg];

const Communication = () => {
  return (
    <InnerSkills>
      <div>
        <div>Communication</div>
        {imgList.map((item, i) => (
          <Image src={item} alt="" key={`index-i-innerImg-${i}`} />
        ))}
      </div>
    </InnerSkills>
  );
};
export default Communication;

const InnerSkills = styled.div`
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
      width: 80px;
      height: auto;
      padding: 5px;
    }
    & > div:first-child {
      width: 200px;
      padding: 5px 10px;
      color: orange;
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
`;
