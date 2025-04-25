import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import {LINK_DATA} from './contant';

const LinkComponent = ({
  linkRef,
}: {
  linkRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <LinkContainer>
      <div>
        <div ref={linkRef}>Link</div>
        <div>
          {LINK_DATA.map((item, index) => (
            <div key={`outer-${index}`}>
              <div key={`img-outer-${index}`}>
                <Image key={`img-${index}`} src={item.img} alt="" width={100} />
              </div>
              <div key={`text-outer-${index}`}>
                <Link key={`link-${index}`} href={item.link} passHref>
                  {item.linkText}
                </Link>
                <p key={`p-${index}`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LinkContainer>
  );
};

export default LinkComponent;

const LinkContainer = styled.div`
  width: 100%;
  background-color: #fffacd;
  & > div {
    padding: 35px 0;
    width: 75%;
    margin: 0 auto;

    & > div:first-child {
      color: #dda0dd;
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
      @media only screen and (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
      }
      img {
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
          width: 90%;
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
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0 auto;
        }
        & > div:nth-child(2) {
          & > a,
          & > a:visited {
            color: #495057;
            text-decoration: none;
          }
          & > p {
            padding: 10px 0;
            color: #495057;
            font-weight: 850;
          }
        }
      }
    }
  }
`;
