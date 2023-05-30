import styled from "styled-components";

import Solar from "./Solar";
import NFTMarket from "./NFTMarket";

const Project = () => {
  return (
    <ProjectContainer>
      <div>
        <div>Project</div>
        <div>
          <Solar />
          <NFTMarket />
        </div>
      </div>
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.div`
  width: 100%;
  background-color: rgba(35, 134, 170, 1);
  color: white;
  & > div {
    padding: 35px 0;
    width: 60%;
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
      flex-wrap: wrap;
      & > div {
        width: 100%;
        margin: 20px 0 0 0;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 2px 2px 2px 2px white;
        & > div {
          width: fit-content;
          margin: 0 auto;
        }
        & > div:first-child {
          padding: 20px 0 15px 0;
          font-size: 2rem;
          font-weight: 800;
        }
        & > div:nth-child(2) {
          font-size: 0.9rem;
          color: gray;
          padding: 0 0 10px 0;
        }
        & > div:last-child {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          padding: 50px 0;
          & > div {
            width: 48%;
            & > div {
              & > img {
                width: 100%;
              }
              &:last-child {
                width: 50%;
                margin: 0 auto;
                img {
                  width: 100%;
                }
              }
            }
            & li {
              padding: 5px 0;
            }
            &:last-child > div:nth-child(2) {
              width: fit-content;
              background-color: rgba(0, 0, 0, 1);
              color: white;
              margin: 10px 0 0 0;
              padding: 10px 20px;
              border-radius: 10px;
              & > a {
                text-decoration: none;
                color: white;
                &:visited {
                  color: white;
                }
              }
            }
            &:last-child > div:nth-child(3) {
              width: 95%;
              margin: 10px 0 0 0;
              border-top: 1px solid black;
              padding: 10px 0 0 0;
              display: flex;
              align-items: flex-start;
              & > div:first-child {
                width: 20%;
              }
              & > div:last-child {
                width: 80%;
                & > div {
                  padding: 0 0 10px 0;
                }
              }
            }
            &:last-child > div:nth-child(4),
            &:last-child > div:nth-child(5),
            &:last-child > div:nth-child(6),
            &:last-child > div:nth-child(7),
            &:last-child > div:nth-child(8),
            &:last-child > div:nth-child(9) {
              width: 95%;
              margin: 10px 0 0 0;
              padding: 10px 0 0 0;
              display: flex;
              align-items: center;
              & > div:first-child {
                width: 20%;
              }
              & > div:last-child {
                width: 80%;
                & > a {
                  padding: 5px 0;
                  text-decoration: none;
                  &:visited {
                    color: black;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
