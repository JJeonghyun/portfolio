import Link from "next/link";
import MainFunc from "./Func/MainFunc";
import Image from "next/image";
import PortfolioImg from "/public/imgs/portfolio/portfolio.jpg";

const Portfolio = () => {
  const scrollToUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div>
        <div>포트폴리오 웹사이트</div>
        <div>2023.05.29 ~ 2023.06.07 (Personal Project)</div>
        <div>
          <div>
            <div>
              <Image src={PortfolioImg} alt="" />
            </div>
          </div>
          <div>
            <ul>
              <li>포트폴리오를 위해서 진행한 웹사이트</li>
              <li>
                기존에 배웠던 React로 익숙한 환경이 아니라 NextJS라는
                프레임워크를 사용해서 제작
              </li>
              <li>
                그 과정에서 SSR환경에서의 환경에 맞춰서 정적인 웹사이트를
                계획에서 배포까지 경험
              </li>
            </ul>
            <div
              onClick={() => {
                scrollToUp();
              }}
            >
              <Link href={`#`} passHref>
                <div>자세히 보러가기</div>
              </Link>
            </div>
            <MainFunc />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
