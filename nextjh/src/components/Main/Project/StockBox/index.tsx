import MainFunc from "./Func/MainFunc";
import Image from "next/image";

import main from "/public/imgs/StockBox/Main.png";
import Login from "/public/imgs/StockBox/Login.png";
import Strategy from "/public/imgs/StockBox/Strategy.png";
import Payment from "/public/imgs/StockBox/Payment.png";

const StockBox = () => {
  return (
    <>
      <div>
        <div>주식박스</div>
        <div>2024.08 ~ 2024.10 (Stock Platform)</div>
        <div>
          <div>
            <div>
              <Image src={main} alt="" />
              <Image src={Login} alt="" />
              <Image src={Strategy} alt="" />
              <Image src={Payment} alt="" />
            </div>
          </div>
          <div>
            <ul>
              <li>주식 및 증권정보를 쉽고 간편하게 접근할 수 있는 플랫폼</li>
              <li>일반/간편 회원가입 및 로그인 구현</li>
              <li>본인인증 모듈 도입</li>
              <li>PG사 결제 시스템 도입</li>
            </ul>
            <MainFunc />
          </div>
        </div>
      </div>
    </>
  );
};

export default StockBox;
