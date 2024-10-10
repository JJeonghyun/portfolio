import Link from "next/link";

const MainFunc = () => {
  return (
    <>
      <div>
        <div>주요기능</div>
        <div>
          <div>협업 파트너 회사 API ( 외부 API ) 연동 및 개발</div>
          <div>전략 리스트 정보 조회 API 개발</div>
          <div>특정 전략 상세정보 조회 API 개발 </div>
          <div>전략명, 증시명 검색 기능 개발</div>
          <div>기간별 특정 데이터에 대한 차트 이미지화 기능 개발</div>
          <div>회원가입 / 로그인 기능 설계 및 구현</div>
          <div>간편(SNS) 가입 및 로그인 기능 설계 및 구현</div>
          <div>일반 / 간편 회원정보 통합 기능 설계 및 구현</div>
          <div>본인인증 (Nice 솔루션) 도입 및 개발</div>
          <div>결제 PG사 솔루션 도입</div>
          <div>GitHub Actions를 통한 빌드 및 배포 자동화</div>
          <div>Apache를 통한 Certbot 사용 및 AWS Certificate Manager 경험</div>
        </div>
      </div>
      <div>
        <div>Link</div>
        <div>
          <Link href={`https://xn--bh3b03j3e14v.com/`} passHref>
            <div>주식박스</div>
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
