import Link from "next/link";
import MainFunc from "./Func/MainFunc";

const U2vibe = () => {
  return (
    <>
      <div>
        <div>U2VIBE</div>
        <div>2022.11.03 ~ 2022.11.15 (Nodejs TeamProject)</div>
        <div>
          <div>
            <div>
              <img src="/imgs/u2vibe/u2vibe main.jpg" alt="" />
              <img src="/imgs/u2vibe/u2vibefavicon.png" alt="" />
            </div>
          </div>
          <div>
            <ul>
              <li>
                사용자들이 음원들을 등록하고 들을 수 있는 음원 스트리밍 홈페이지
              </li>
            </ul>
            <div>
              <Link
                href={`https://github.com/JJeonghyun/NodejsProject`}
                passHref
              >
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

export default U2vibe;
