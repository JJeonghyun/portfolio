import { useState } from "react";
import styled from "styled-components";

const ItemComponent = () => {
  const [info, setInfo] = useState([
    {
      img: "",
      name: "",
    },
  ]);
  return (
    <InfoContainer>
      <div>
        <div>사진</div>
        <div>
          <div>이름</div>
          <div>장정현</div>
        </div>
      </div>
      <div>
        <div>사진</div>
        <div>
          <div>이름</div>
          <div>장정현</div>
        </div>
      </div>
      <div>
        <div>사진</div>
        <div>
          <div>이름</div>
          <div>장정현</div>
        </div>
      </div>
      <div>
        <div>사진</div>
        <div>
          <div>이름</div>
          <div>장정현</div>
        </div>
      </div>
    </InfoContainer>
  );
};
export default ItemComponent;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-startl;
  align-items: center;
  flex-wrap: wrap;
  & > div {
    width: 33%;
    display: flex;
  }
`;
