import Link from "next/link";
import MainFunc from "./Func/MainFunc";

const MondayKiz = () => {
  return (
    <>
      <div>
        <div>MondayKiz Clone Paging</div>
        <div>2022.10.06 ~ 2022.10.13 (Personal Project)</div>
        <div>
          <div>
            <div>
              <img src="/imgs/ClonePaging/MondayKiz.jpg" alt="" />
            </div>
          </div>
          <div>
            <ul>
              <li>평소에 팬이였던 MondayKiz 소속 페이지를 Clone 해보자!!</li>
            </ul>
            <div>
              <Link href={`https://github.com/JJeonghyun/SideProject`} passHref>
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

export default MondayKiz;
