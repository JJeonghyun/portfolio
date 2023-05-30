import Link from "next/link";

const Github = () => {
  return (
    <div>
      <div>
        <img src="/imgs/stack/etc/github-sign.png" />
        Github
      </div>
      <div>
        <Link href={`https://github.com/JJeonghyun`} passHref>
          https://github.com/JJeonghyun
        </Link>
        <p>소스코드 저장소</p>
      </div>
    </div>
  );
};
export default Github;
