import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import gitHubImg from "/public/imgs/github.png";
import tistoryWhiteImg from "/public/imgs/tistoryWhite.png";
import notionWhiteImg from "/public/imgs/notionWhite.jpg";
import instagramWhiteImg from "/public/imgs/instagramWhite.png";
import linkedinWhiteImg from "/public/imgs/linkedinWhite.png";

const FooterComponent = () => {
  return (
    <FooterContainer>
      <div>
        <div>
          <Link href={`https://github.com/JJeonghyun`} passHref>
            <Image src={gitHubImg} alt="" />
          </Link>
        </div>
        <div>
          <Link href={`https://developerjjh.tistory.com`} passHref>
            <Image src={tistoryWhiteImg} alt="" />
          </Link>
        </div>
        <div>
          <Link
            href={`https://faithful-robe-ebf.notion.site/Portfolio-6015e8c66c534d97b482722d8c6ef96an`}
            passHref
          >
            <Image src={notionWhiteImg} alt="" />
          </Link>
        </div>
        <div>
          <Link href={`https://www.instagram.com/jhninano/`} passHref>
            <Image src={instagramWhiteImg} alt="" />
          </Link>
        </div>
        <div>
          <Link href={`https://www.linkedin.com/in/정현-장-8807a4260`} passHref>
            <Image src={linkedinWhiteImg} alt="" />
          </Link>
        </div>
      </div>
      <div>Copyright ©2023, Jeong Hyun Jang All Rights Reserved.</div>
    </FooterContainer>
  );
};

export default FooterComponent;

const FooterContainer = styled.div`
  background-color: rgba(0, 0, 0, 1);
  color: white;
  padding: 7% 0;
  & > div {
    width: fit-content;
    margin: 0 auto;
  }
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    padding: 0 0 15px 0;
    & > div {
      width: 50px;
      & > a {
        width: 100%;

        & > img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  & > div:last-child {
    font-size: 1.2rem;
  }
`;
