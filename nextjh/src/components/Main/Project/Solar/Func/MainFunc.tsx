import Link from "next/link";

const MainFunc = () => {
  return (
    <>
      <div>
        <div>주요기능</div>
        <div>
          <div>다양한 지갑들의 Connect Wallet 기능</div>
          <div>Defi API 연동에서 제공</div>
          <div>Staking 기능 Scan 사이트에서 발행한 Token Airdrop 기능</div>
          <div>
            Defi에 사용자가 일정 수수료가 발생하면 사용자에게 보상 Airdrop되는
            기능
          </div>
          <div>메인넷 별 Deif 상품들에 대한 필터링 기능</div>
          <div>원하는 LP의 이름이나 CA를 검색 기능</div>
        </div>
      </div>
      <div>
        <div>Github</div>
        <div>
          <Link href={`https://github.com/JJeonghyun/SolarProject`} passHref>
            <div>https://github.com/JJeonghyun/SolarProject</div>
          </Link>
        </div>
      </div>
      {/* <div>
        <div>Link</div>
        <div>
          <Link href={`https://defiscan.unyieldingsoul.com`} passHref>
            <div>SolarProject</div>
          </Link>
        </div>
      </div> */}
      <div>
        <div>FrontEnd</div>
        <div>
          React, Redux, JavaScript, Web3js, Figma, aws-amplify,
          styled-components, thressjs
        </div>
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
        <div>AWS EC2, AWS Route 53, Filezilla</div>
      </div>
    </>
  );
};

export default MainFunc;
