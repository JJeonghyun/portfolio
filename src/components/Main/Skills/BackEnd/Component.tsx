import styled from "styled-components";

import Image from "next/image";
import nodejsImg from "public/imgs/stack/back/node js icon.png";
import mysqlImg from "public/imgs/stack/db/mysql icon.jpeg";
import nodemonImg from "public/imgs/stack/back/nodemon.png";
import pm2Img from "public/imgs/stack/back/pm2.png";
import axiosImg from "public/imgs/stack/back/axios.png";
import tsImg from "public/imgs/stack/back/ts.png";
import sequelize from "public/imgs/stack/back/sequelize.png";

const imgList = [
  nodejsImg,
  mysqlImg,
  nodemonImg,
  pm2Img,
  axiosImg,
  tsImg,
  sequelize,
];

const BackEnd = () => {
  return (
    <InnerSkills>
      <div>BackEnd</div>
      {imgList.map((item, i) => (
        <div key={`index-i-${i}`}>
          <Image src={item} alt="" key={`index-i-innerImg-${i}`} />
        </div>
      ))}
    </InnerSkills>
  );
};
export default BackEnd;

const InnerSkills = styled.div`
  width: 80%;
  margin: 20px 0 10px 0;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 2px 2px white;
  grid-area: backend;
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
  & > div:nth-child(n + 1) {
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    & > img {
      width: 80%;
      height: auto;
      padding: 20px 5px;
    }
  }

  &:hover {
    transform: translateY(-10px);
    transition: all 0.5s;
  }
`;
