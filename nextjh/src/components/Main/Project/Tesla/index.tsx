import Link from "next/link";
import MainFunc from "./Func/MainFunc";
import Image from "next/image";
import teslaImg from "public/imgs/tesla/tesla.jpg";

const Tesla = () => {
  return (
    <>
      <div>
        <div>JJJJ</div>
        <div>2022.12.09 ~ 2022.12.30 (React TeamProject)</div>
        <div>
          <div>
            <div>
              <Image src={teslaImg} alt="" />
            </div>
          </div>
          <div>
            <ul>
              <li>
                Front기반의 React와 Back기반의 Node.js (Express) 및 DB를 결합한
                웹페이지 개발
              </li>
            </ul>
            <MainFunc />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tesla;
