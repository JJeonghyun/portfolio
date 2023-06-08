import Link from "next/link";

const MainFunc = () => {
  return (
    <>
      <div>
        <div>순서</div>
        <div>
          <div>메인 페이지와 그 외 페이지들을 구상 및 구현</div>
          <div>페이지 HTML&CSS 수정 및 보완 / JS 동적 기능 추가</div>
          <div>추가적으로 필요한 페이지들 구상 및 구현</div>
          <div>페이지 HTML&CSS 수정 및 보완 / JS 동적 기능 추가</div>
          <div>전체 페이지 media query를 통한 반응형 웹페이지 구현</div>
          <div>
            반응형 웹 페이지 마무리 작업 및 버그 수정 & 미비한 작업 추가
          </div>
        </div>
      </div>
      <div>
        <div>Github</div>
        <div>
          <Link href={`https://github.com/JJeonghyun/SideProject`} passHref>
            <div>https://github.com/JJeonghyun/SideProject</div>
          </Link>
        </div>
      </div>
      <div>
        <div>Link</div>
        <div>
          <Link href={`https://clonepaging.unyieldingsoul.com/`} passHref>
            <div>MondayKiz</div>
          </Link>
        </div>
      </div>
      <div>
        <div>FrontEnd</div>
        <div> HTML5, CSS3, JavaScript, Bootstrap</div>
      </div>
      <div>
        <div>BackEnd</div>
        <div>Nodejs, mySQL, PM2, Sequelize, nodemon</div>
      </div>
      <div>
        <div>Deployed</div>
        <div>AWS EC2, AWS Route 53, Filezilla</div>
      </div>
    </>
  );
};

export default MainFunc;
