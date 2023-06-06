import styled from "styled-components";

import Github from "./Github/Component";
import Notion from "./Notion/Component";
import Tistory from "./Tistory/Component";

const Link = ({ linkRef }: { linkRef: any }) => {
  return (
    <LinkContainer>
      <div>
        <div ref={linkRef}>Link</div>
        <div>
          <Github />
          <Notion />
          <Tistory />
        </div>
      </div>
    </LinkContainer>
  );
};

export default Link;

const LinkContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  color: white;
  & > div {
    padding: 35px 0;
    width: 75%;
    margin: 0 auto;
    & > div:first-child {
      width: fit-content;
      margin: 0 auto;
      font-size: 2.5rem;
      font-weight: 850;
      border-bottom: 1px solid lightgray;
    }
    & > div:last-child {
      display: flex;
      justify-content: space-between;
      color: black;
      @media only screen and (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
      }
      img {
        width: 40px;
        height: auto;
        padding: 0 10px 0 0;
      }
      & > div {
        width: 30%;
        margin: 20px 0 10px 0;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 2px 2px 2px 2px white;
        padding: 3% 0;
        @media only screen and (max-width: 768px) {
          width: 55%;
        }
        @media only screen and (max-width: 320px) {
          width: 80%;
        }
        & > div {
          width: 90%;
          margin: 0 auto;
        }
        & > div:first-child {
          width: 90%;
          display: flex;
          align-items: center;
          padding: 20px 0;
          color: black;
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0 auto;
        }
        & > div:nth-child(2) {
          & > a,
          & > a:visited {
            color: blue;
            text-decoration: none;
          }
          & > p {
            padding: 10px 0;
            font-weight: 850;
          }
        }
      }
    }
  }
`;
