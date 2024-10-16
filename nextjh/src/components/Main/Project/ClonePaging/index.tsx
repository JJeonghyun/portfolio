import Link from "next/link";
import MainFunc from "./Func/MainFunc";
import Image from "next/image";
import MondayKizImg from "/public/imgs/ClonePaging/MondayKiz.jpg";

const MondayKiz = () => {
  return (
    <>
      <div>
        <div>MondayKiz Clone Paging</div>
        <div>2022.10.06 ~ 2022.10.13 (Personal Project)</div>
        <div>
          <div>
            <div>
              <Image src={MondayKizImg} alt="" />
            </div>
          </div>
          <div>
            <ul>
              <li>평소에 팬이였던 MondayKiz 소속 페이지를 Clone 해보자!!</li>
            </ul>
            <MainFunc />
          </div>
        </div>
      </div>
    </>
  );
};

export default MondayKiz;
