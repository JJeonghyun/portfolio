import Link from "next/link";

const MainFunc = () => {
  return (
    <>
      <div>
        <div>주요기능</div>
        <div>
          <div>플랫폼 게시물 CRUD 기능 개발</div>
          <div>게시물 페이지네이션 기능 개발</div>
          <div>게시물 검색 기능 개발</div>
          <div>게시물 날짜 필터 기능 개발</div>
          <div>
            openAPI ( 당일 코스피 정보, 환율정보, 상위 국내증시정보 ) 도입 및
            개발
          </div>
          <div>회원가입 / 로그인 기능 설계 및 구현</div>
          <div>간편(SNS) 가입 및 로그인 기능 설계 및 구현</div>
          <div>본인인증 (Nice 솔루션) 도입 및 개발</div>
        </div>
      </div>
      <div>
        <div>Link</div>
        <div>
          <Link href={`https://initiative.stiim.co.kr/`} passHref>
            <div>Initiative</div>
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
