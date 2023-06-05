import styled from "styled-components";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <FooterContainer>
      <div>
        <div>
          <Link href={`https://github.com/JJeonghyun`} passHref>
            <img src="/imgs/github.png" alt="" />
          </Link>
        </div>
        <div>
          <Link href={`https://developerjjh.tistory.com`} passHref>
            <img src="/imgs/tistoryWhite.png" alt="" />
          </Link>
        </div>
        <div>
          <Link
            href={`https://faithful-robe-ebf.notion.site/Portfolio-6015e8c66c534d97b482722d8c6ef96an`}
            passHref
          >
            <img src="/imgs/notionWhite.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link href={`https://www.instagram.com/jhninano/`} passHref>
            <img src="/imgs/instagramWhite.png" alt="" />
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
        }
      }
    }
  }
  & > div:last-child {
    font-size: 1.2rem;
  }
`;
