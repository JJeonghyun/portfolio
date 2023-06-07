import Link from "next/link";

const MainFunc = () => {
  return (
    <>
      <div>
        <div>주요기능</div>
        <div>
          <div>메인 페이지 (”/”)</div>
          <div>NFT 상세정보 페이지 (”/detail”)</div>
          <div>민팅 페이지 (”/minting”)</div>
          <div>마이 페이지 (”/mypage”)</div>
        </div>
      </div>
      <div>
        <div>Github</div>
        <div>
          <Link href={`https://github.com/yesla-yeom/MintchoNFT`} passHref>
            <div>https://github.com/yesla-yeom/MintchoNFT</div>
          </Link>
        </div>
      </div>
      <div>
        <div>Link</div>
        <div>
          <Link href={`https://mintcho.unyieldingsoul.com/`} passHref>
            <div>MintchoNFT</div>
          </Link>
        </div>
      </div>
      <div>
        <div>FrontEnd</div>
        <div>React, JavaScript, Web3js, styled-components</div>
      </div>
      <div>
        <div>BackEnd</div>
        <div>Nodejs, mySQL, PM2, Sequelize, TypeScript, nodemon</div>
      </div>
      <div>
        <div>Contract</div>
        <div>Solidity, Remix</div>
      </div>
      <div>
        <div>Deployed</div>
        <div>AWS EC2, AWS Route 53, Filezilla, Ubuntu</div>
      </div>
    </>
  );
};

export default MainFunc;
