import Link from "next/link";

const MainFunc = () => {
  return (
    <>
      <div>
        <div>주요기능</div>
        <div>
          <div>회원가입, 로그인 기능 구현</div>
          <div>음원 상세 페이지 댓글 기능 구현</div>
          <div>음원 차트 페이지 구현</div>
          <div>음원 업로드 기능</div>
          <div>유저 개개인의 재생목록 생성 기능 구현</div>
          <div>관리자 페이지</div>
        </div>
      </div>
      <div>
        <div>Github</div>
        <div>
          <Link href={`https://github.com/JJeonghyun/NodejsProject`} passHref>
            <div>https://github.com/JJeonghyun/NodejsProject</div>
          </Link>
        </div>
      </div>
      <div>
        <div>Link</div>
        <div>
          <Link href={`http://u2vibe.jjh.block7.errorcode.help/`} passHref>
            <div>U2Vibe</div>
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
