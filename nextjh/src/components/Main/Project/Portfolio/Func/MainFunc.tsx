import Link from "next/link";

const MainFunc = () => {
  return (
    <>
      <div>
        <div>주요기능</div>
        <div>
          <div>간단한 자기소개 및 인적사항</div>
          <div>기술 스택&#40;FrontEnd, BackEnd, Contract, ETC&#41;</div>
          <div>GitHub, Tistory, Notion 각 Link</div>
          <div>진행 했던 프로젝트</div>
          <div>기타 경력 사항과 Footer</div>
        </div>
      </div>
      <div>
        <div>Link</div>
        <div>
          <Link href={`https://portfolio.unyieldingsoul.com/`} passHref>
            <div>Portfolio</div>
          </Link>
        </div>
      </div>
      <div>
        <div>FrontEnd</div>
        <div>NextJS, typeScript</div>
      </div>
      <div>
        <div>Deployed</div>
        <div>AWS EC2, AWS Route 53, Filezilla</div>
      </div>
    </>
  );
};

export default MainFunc;
