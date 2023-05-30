import Link from "next/link";

const Notion = () => {
  return (
    <div>
      <div>
        {" "}
        <img src="/imgs/stack/etc/notion.jpg" />
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
