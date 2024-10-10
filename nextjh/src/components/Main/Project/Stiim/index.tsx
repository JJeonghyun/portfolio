import Link from "next/link";
import MainFunc from "./Func/MainFunc";
import Image from "next/image";

import main from "/public/imgs/Stiim/main.png";
import Login from "/public/imgs/Stiim/Login.png";

const Stiim = () => {
  const scrollToUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div>
        <div>STIIM</div>
        <div>2023.08 ~ 2024.10 (STO Platform)</div>
        <div>
          <div>
            <div>
              <Image src={main} alt="" />
              <Image src={Login} alt="" />
            </div>
          </div>
          <div>
            <ul>
              <li>
                STO 토큰증권에 대한 투자지표 정보를 지도를 통해 접근할 수 있는
                플랫폼
              </li>
              <li>지도에 나타낼 행정구역 데이터 최적화</li>
              <li>STO 상품 정보 CRUD 기능 및 API 개발</li>
            </ul>
            <MainFunc />
          </div>
        </div>
      </div>
    </>
  );
};

export default Stiim;
