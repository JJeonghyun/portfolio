import styled from 'styled-components';

import Frame from './Frame';

import {PROJECT_LIST} from '../../../utils/contant';

const Project = ({
  projectRef,
}: {
  projectRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <ProjectContainer>
      <div>
        <div ref={projectRef}>Project</div>
        <div>
          {PROJECT_LIST.map((item, index) => (
            <>
              <Frame
                key={`frame-index-${index}`}
                title={item.title}
                period={item.peroid}
                imgs={item.imgs}
                description={item.description}
                mainFunction={item.mainFunction}
                link={item.link}
                stack={item.stack}
              />
            </>
          ))}
        </div>
      </div>
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.div`
  width: 100%;
  background-color: #fff5ee;
  color: #e85d04;
  & > div {
    padding: 35px 0;
    width: 80%;
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
      color: #495057;
      flex-wrap: wrap;
      @media only screen and (max-width: 768px) {
        justify-content: center;
      }
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
          font-size: 1.2rem;
          color: gray;
          padding: 0 0 10px 0;
        }
        & > div:last-child {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          padding: 50px 0;

          @media only screen and (max-width: 768px) {
            flex-wrap: wrap;
            justify-content: center;
          }
          & > div {
            width: 48%;
            @media only screen and (max-width: 768px) {
              width: 80%;
            }
            & > div {
              width: 75%;
              margin: 0 auto;
              & > img:nth-child(1) {
                width: 100%;
                height: auto;
              }
              & > img:nth-child(n + 1) {
                width: 85%;
                height: auto;
              }
            }
            & li {
              padding: 15px 0;
              font-weight: 850;
              color: #343a40;
            }
            &:last-child > div:nth-child(2) {
              width: 95%;
              margin: 10px 0 0 0;
              border-top: 1px solid black;
              padding: 10px 0 0 0;
              display: flex;
              align-items: flex-start;
              font-size: 1rem;
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
            &:last-child > div:nth-child(3),
            &:last-child > div:nth-child(4),
            &:last-child > div:nth-child(5),
            &:last-child > div:nth-child(6),
            &:last-child > div:nth-child(7),
            &:last-child > div:nth-child(8) {
              width: 95%;
              margin: 10px 0 0 0;
              padding: 10px 0 0 0;
              display: flex;
              align-items: center;
              font-size: 1rem;

              & > div:first-child {
                width: 20%;
              }
              & > div:last-child {
                width: 80%;
                & > a {
                  padding: 5px 0;
                  text-decoration: none;
                  &:visited {
                    color: blue;
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
