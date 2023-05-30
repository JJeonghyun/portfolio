import Link from "next/link";

const MainFunc = () => {
  return (
    <>
      <div>
        <div>주요기능</div>
        <div>
          <div>회원가입, 로그인, 로그아웃 페이지 구현</div>
          <div>장바구니 페이지</div>
          <div>상품 상세 페이지</div>
          <div>검색 결과 페이지</div>
          <div>구매내역 및 사용자 마이페이지</div>
          <div>관리자 페이지</div>
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
      <div>
        <div>Link</div>
        <div>
          <Link href={`https://solar.jaeko.block7.errorcode.help`} passHref>
            <div>SolarProject</div>
          </Link>
        </div>
      </div>
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
