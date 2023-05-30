import Link from "next/link";

const Tistory = () => {
  return (
    <div>
      <div>
        {" "}
        <img src="/imgs/stack/etc/tistory.png" />
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
