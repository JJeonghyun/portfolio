import Link from "next/link";
import Image from "next/image";
import SNSImg from "public/imgs/snsWhite.jpeg";

const SNS = () => {
  return (
    <div>
      <div>
        <Image src={SNSImg} alt="" placeholder="blur" />
        SNS 별 Link
      </div>
      <div>
        <p>링크드인</p>
        <Link href={`https://www.linkedin.com/in/정현-장-8807a4260`} passHref>
          JeongHyun's linkedin
        </Link>
        <p>인스타</p>
        <Link href={`https://www.instagram.com/jhninano/`} passHref>
          JeongHyun's instagram
        </Link>
      </div>
    </div>
  );
};
export default SNS;
