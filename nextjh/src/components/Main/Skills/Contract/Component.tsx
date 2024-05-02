import styled from "styled-components";

import Image from "next/image";
import solidityImg from "public/imgs/stack/contract/solidity.png";
import remixImg from "public/imgs/stack/contract/remix.png";

const imgList=  [solidityImg, remixImg];

const Contract = () => {
  return (
    <InnerSkills>
      <div>Contract</div>
      {imgList.map((item)=>(
         <div>
         <Image src={item} alt="" />
       </div>
      ))}
    </InnerSkills>
  );
};
export default Contract;

const InnerSkills = styled.div`
  width: 90%;
  // height:fit-content;
  margin: 20px 0 10px 0;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 2px 2px white;
  grid-area:contract;
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
    width: 80%;
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