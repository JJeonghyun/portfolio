import Link from "next/link";
import Image from "next/image";
import gitHubSignImg from "public/imgs/stack/etc/github.png";

const Github = () => {
  return (
    <div>
      <div>
        <Image src={gitHubSignImg} alt="" placeholder="blur" />
      </div>
      <div>
        <Link href={`https://github.com/JJeonghyun`} passHref>
          github.com/JJeonghyun
        </Link>
        <p>소스코드 저장소</p>
      </div>
    </div>
  );
};
export default Github;
