import Link from "next/link";
import Image from "next/image";
import notionImg from "public/imgs/stack/etc/notion.png";

const Notion = () => {
  return (
    <div>
      <div>
        <Image src={notionImg} alt="" placeholder="blur" />
        Notion
      </div>
      <div>
        {" "}
        <Link
          href={`https://faithful-robe-ebf.notion.site/Portfolio-6015e8c66c534d97b482722d8c6ef96an`}
          passHref
        >
          MyNotion
        </Link>
        <p>개인 포트폴리오 및 개발R&D</p>
      </div>
    </div>
  );
};
export default Notion;
