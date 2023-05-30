import Link from "next/link";
import MainFunc from "./Func/MainFunc";

const NFTMarket = () => {
  return (
    <>
      <div>
        <div>NFTMarket</div>
        <div>2023.03.20 ~ 2023.03.31 (Block Team Project)</div>
        <div>
          <div>
            <div>
              <img src="/imgs/nftmarket/minting.jpg" alt="" />
            </div>
            <div>
              <img src="/imgs/nftmarket/detail.jpg" alt="" />
            </div>
          </div>
          <div>
            <ul>
              <li>
                누구나 쉽고, 즐겁게, 안전하게 NFT를 사고 팔 수 있는 홈페이지
                제작
              </li>
              <li>
                React, Node.js(express), DB 활용 및 Metamask & Geth & Pinata
                등을 결합한 BlockChain 거래소 코딩으로 이전에 학습한 내용 복습
              </li>
            </ul>
            <div>
              <Link href={`https://github.com/yesla-yeom/MintchoNFT`} passHref>
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

export default NFTMarket;
