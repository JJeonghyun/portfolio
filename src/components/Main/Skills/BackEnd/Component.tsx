import styled from 'styled-components';

import Image from 'next/image';
import axiosImg from 'public/imgs/stack/back/axios.png';
import nodejsImg from 'public/imgs/stack/back/node js icon.png';
import sequelize from 'public/imgs/stack/back/sequelize.png';
import tsImg from 'public/imgs/stack/back/ts.png';
import mysqlImg from 'public/imgs/stack/db/mysql.png';

const imgList = [nodejsImg, mysqlImg, axiosImg, tsImg, sequelize];

const BackEnd = () => {
  return (
    <InnerSkills>
      <div>
        <div>BackEnd</div>
        {imgList.map((item, i) => (
          <Image src={item} alt="" key={`index-i-innerImg-${i}`} />
        ))}
      </div>
    </InnerSkills>
  );
};
export default BackEnd;

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
