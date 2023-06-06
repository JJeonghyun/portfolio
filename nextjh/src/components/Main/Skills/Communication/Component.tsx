import Image from "next/image";
import trelloImg from "public/imgs/stack/etc/trello.jpg";
import notionImg from "public/imgs/stack/etc/notion.jpg";
import sheetsImg from "public/imgs/stack/etc/sheets.png";
const Communication = () => {
  return (
    <div>
      <div>Communication</div>
      <div>
        <Image src={trelloImg} alt="" />
        <Image src={notionImg} alt="" />
        <Image src={sheetsImg} alt="" />
      </div>
    </div>
  );
};
export default Communication;
