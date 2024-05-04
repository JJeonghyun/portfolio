import styled from "styled-components";

import Image from "next/image";
import trelloImg from "public/imgs/stack/etc/trello.png";
import notionImg from "public/imgs/stack/etc/notion.png";
import sheetsImg from "public/imgs/stack/etc/sheets.png";
import discordImg from "public/imgs/stack/etc/disocrd.png";
import slackImg from "public/imgs/stack/etc/slack.png";

const imgList = [trelloImg,notionImg,sheetsImg,slackImg,discordImg];

const Communication = () => {
  return (
    <InnerSkills>
      <div>Communication</div>
      {imgList.map((item,i)=>(
           <div key={`index-i-${i}`}>
           <Image src={item} alt="" key={`index-i-innerImg-${i}`} />
       </div>
      ))}
    </InnerSkills>
  );
};
export default Communication;

const InnerSkills = styled.div`
  width: 90%;
  margin: 20px 0 10px 0;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 2px 2px white;
  grid-area:communication;
  @media only screen and (max-width: 768px) {
    width: 45%;
  }
  @media only screen and (max-width: 426px) {
    width: 80%;
  }
  & > div {
    width: 90%;
    margin: 0 auto;
  }
  & > div:first-child {
    width: 90%;
    padding: 5px 0;
    border-bottom: 1px solid black;
    color: orange;
    font-size: 1.2rem;
    font-weight: 800;
    margin: 0 auto;
  }
  & > div:nth-child(n+1){
    display: flex;
    width: 70%;
    justify-content: center;
    align-items: center;
    & > img {
      width: 100%;
      height: auto;
      padding: 20px 5px;
    }
  }
  &:hover {
    transform: translateY(-10px);
    transition: all 0.5s;
  }
`