import MainFunc from "./Func/MainFunc";
import Image from "next/image";

import Main from "/public/imgs/Initiative/main.png";
import Authentication from "/public/imgs/Initiative/authentication.png";

const Initiative = () => {
  const scrollToUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div>
        <div>ST.Initiative</div>
        <div>2023.07 ~ 2024.10 (Blog Platform)</div>
        <div>
          <div>
            <div>
              <Image src={Main} alt="" />
              <Image src={Authentication} alt="" />
            </div>
          </div>
          <div>
            <ul>
              <li>STO 관련 시장형성 시황분석</li>
              <li>국내외 STO 법률∙현안∙제도∙규제에 대한 정보 공유</li>
              <li>전반적인 API 설계 및 개발 수행</li>
            </ul>
            <MainFunc />
          </div>
        </div>
      </div>
    </>
  );
};

export default Initiative;
