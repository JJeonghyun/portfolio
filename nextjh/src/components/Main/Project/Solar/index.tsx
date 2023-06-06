import Link from "next/link";
import MainFunc from "./Func/MainFunc";
import Image from "next/image";
import defiScanImg from "/public/imgs/solar/defiScan.jpg";
import responseImg from "/public/imgs/solar/response.jpg";

const Solar = () => {
  return (
    <>
      <div>
        <div>SolarProject</div>
        <div>2022.08 ~ 2023.05 (기업협약 프로젝트)</div>
        <div>
          <div>
            <div>
              <Image src={defiScanImg} alt="" />
            </div>
            <div>
              <Image src={responseImg} alt="" />
            </div>
          </div>
          <div>
            <ul>
              <li>
                Defi Scan 사이트를 통해 사용자들이 수많은 Defi들을 통합하여서
                편하게 필터링 할 수 있으며, 한 개의 사이트내에서 수많은
                메인넷들의 Defi들을 비교해 볼 수 있기에 편리해진다
              </li>
              <li>
                Auto-Compounding vaults 기능으로 수동으로 Claim을 한 후에 다시
                Deposit을 하지 않아도 됨으로 굉장히 편리해진다
              </li>
              <li>
                또한 트랜잭션이 일어날 때 마다 일정량의 Scan사이트에서 자체
                발행한 Token을 Airdrop 해줌으로써 적절한 보상이 이루어질 수 있다
              </li>
            </ul>
            <div>
              <Link
                href={`https://github.com/JJeonghyun/SolarProject`}
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

export default Solar;
