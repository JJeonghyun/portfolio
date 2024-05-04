import styled from "styled-components";

import Image from "next/image";
import HTMLImg from "public/imgs/stack/front/HTML icon.png";
import CSSImg from "public/imgs/stack/front/CSS icon.png";
import JSImg from "public/imgs/stack/front/JS icon.png";
import reduxImg from "public/imgs/stack/front/redux.png";
import reactImg from "public/imgs/stack/front/react.png";
import nextjsImg from "public/imgs/stack/front/nextjs.jpg";

const imgList=  [reactImg,reduxImg, nextjsImg];

const FrontEnd = () => {
  return (
    <InnerSkills>
      <div>FrontEnd</div>
      <div>
        <Image src={HTMLImg} alt="" />
        <Image src={CSSImg} alt="" />
        <Image src={JSImg} alt="" />
      </div>
      {imgList.map((item,i)=>(
        <div key={`index-i-${i}`}>
          <Image src={item} alt="" className="main" key={`index-i-innerImg-${i}`} />
      </div>
      ))}
    </InnerSkills>
  );
};
export default FrontEnd;

const InnerSkills = styled.div`
  width: 90%;
  margin: 20px 0 10px 0;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 2px 2px white;
  grid-area:frontend;
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
  & > div:nth-child(2){
    display: flex;
    width: 30%;
    justify-content: center;
    align-items: center;
    & > img {
      width: 100%;
      height: auto;
      padding: 20px 5px;
    }
  }
  & > div:nth-child(3),
  & > div:nth-child(4),
  & > div:nth-child(5) {
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
