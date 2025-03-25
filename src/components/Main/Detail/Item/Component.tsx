import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import userImg from "/public/imgs/user.png";
import calendarImg from "/public/imgs/calendar.png";
import locationImg from "/public/imgs/location.png";
import telephoneCallImg from "/public/imgs/telephone-call.png";
import emailImg from "/public/imgs/email.png";
import graduationHatImg from "/public/imgs/graduation-hat.png";

const ItemComponent = () => {
  const [info, _] = useState([
    {
      img: userImg,
      name: "이름",
      text: "장정현",
    },
    {
      img: calendarImg,
      name: "생년월일",
      text: "94.02.14",
    },
    {
      img: locationImg,
      name: "주소",
      text: "위례신도시",
    },
    {
      img: telephoneCallImg,
      name: "연락처",
      text: "010-2052-9649",
    },
    {
      img: emailImg,
      name: "이메일",
      text: "ghkdwja9649@gmail.com",
    },
    {
      img: graduationHatImg,
      name: "학력",
      text: "대진대학교",
    },
  ]);
  return (
    <InfoContainer>
      {info?.map((item, index) => (
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
    </InfoContainer>
  );
};
export default ItemComponent;

const InfoContainer = styled.div`
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
`;
