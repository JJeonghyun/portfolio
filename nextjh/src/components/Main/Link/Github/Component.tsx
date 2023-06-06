import Link from "next/link";
import Image from "next/image";
import gitHubSignImg from "public/imgs/stack/etc/github-sign.png";

const Github = () => {
  return (
    <div>
      <div>
        <Image src={gitHubSignImg} alt="" placeholder="blur" />
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
