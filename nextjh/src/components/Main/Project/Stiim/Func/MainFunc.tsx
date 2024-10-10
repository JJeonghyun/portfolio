import Link from "next/link";

const MainFunc = () => {
  return (
    <>
      <div>
        <div>주요기능</div>
        <div>
          <div>STO 상품 정보 CRUD 기능 및 API 개발</div>
          <div>STO 상품, 행정구역(지역)명, 지하철역 등 검색 기능 개발</div>
          <div>회원가입 / 로그인 기능 설계 및 구현</div>
          <div>간편(SNS) 가입 및 로그인 기능 설계 및 구현</div>
          <div>일반 / 간편 회원정보 통합 기능 설계 및 구현</div>
          <div>본인인증 (Nice 솔루션) 도입 및 개발</div>
          <div>GitHub Actions를 통한 빌드 및 배포 자동화</div>
          <div>Apache를 통한 Certbot 사용 및 AWS Certificate Manager 경험</div>
        </div>
      </div>
      <div>
        <div>Link</div>
        <div>
          <Link href={`https://stiim.co.kr/`} passHref>
            <div>STIIM</div>
          </Link>
        </div>
      </div>
      <div>
        <div>BackEnd</div>
        <div>NodeJS, Typescript ,MySQL, SequelizeORM</div>
      </div>
      <div>
        <div>Deployed</div>
        <div>AWS EC2, AWS Route 53, GitHub Action, AWS CodeDeploy, PM2</div>
      </div>
    </>
  );
};

export default MainFunc;
