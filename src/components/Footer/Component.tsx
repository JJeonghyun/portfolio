import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import {FOOTER_ITEM} from './../../utils/contants/footer';

const FooterComponent = () => {
  return (
    <FooterContainer>
      <div>
        {FOOTER_ITEM.map((item, index) => (
          <div>
            <Link
              href={item.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={item.img} alt={item.alt} />
            </Link>
          </div>
        ))}
      </div>
      <div>Copyright ©2025, Jeong Hyun Jang All Rights Reserved.</div>
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
