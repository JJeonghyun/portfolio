import Link from "next/link";
import MainFunc from "./Func/MainFunc";
import Image from "next/image";
import u2vibeImg from "public/imgs/u2vibe/u2vibe main.jpg";
import faviconImg from "public/imgs/u2vibe/u2vibefavicon.png";

const U2vibe = () => {
  return (
    <>
      <div>
        <div>U2VIBE</div>
        <div>2022.11.03 ~ 2022.11.15 (Nodejs TeamProject)</div>
        <div>
          <div>
            <div>
              <Image src={u2vibeImg} alt="" />
              <Image src={faviconImg} alt="" />
            </div>
          </div>
          <div>
            <ul>
              <li>
                사용자들이 음원들을 등록하고 들을 수 있는 음원 스트리밍 홈페이지
              </li>
            </ul>
            <MainFunc />
          </div>
        </div>
      </div>
    </>
  );
};

export default U2vibe;
