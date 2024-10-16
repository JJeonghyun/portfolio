import Link from "next/link";
import MainFunc from "./Func/MainFunc";
import Image from "next/image";
import mintingImg from "public/imgs/nftmarket/minting.jpg";
import detailImg from "public/imgs/nftmarket/detail.jpg";

const NFTMarket = () => {
  return (
    <>
      <div>
        <div>NFTMarket</div>
        <div>2023.03.20 ~ 2023.03.31 (Block Team Project)</div>
        <div>
          <div>
            <div>
              <Image src={mintingImg} alt="" />
              <Image src={detailImg} alt="" />
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
            <MainFunc />
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTMarket;
