import Link from "next/link";
import Image from "next/image";
import tistoryImg from "public/imgs/stack/etc/tistory.png";

const Tistory = () => {
  return (
    <div>
      <div>
        <Image src={tistoryImg} alt="" placeholder="blur" />
        Tistory
      </div>
      <div>
        {" "}
        <Link href={`https://developerjjh.tistory.com/`} passHref>
          https://developerjjh.tistory.com/
        </Link>
        <p>조그만한 개인 개발일지 작성</p>
      </div>
    </div>
  );
};
export default Tistory;
