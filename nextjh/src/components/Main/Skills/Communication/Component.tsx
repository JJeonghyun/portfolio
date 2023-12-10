import Image from "next/image";
import trelloImg from "public/imgs/stack/etc/trello.jpg";
import notionImg from "public/imgs/stack/etc/notion.jpg";
import sheetsImg from "public/imgs/stack/etc/sheets.png";
import discordImg from "public/imgs/stack/etc/discord.svg";
import slackImg from "public/imgs/stack/etc/slack.png";

const Communication = () => {
  return (
    <div>
      <div>Communication</div>
      <div>
        <Image src={trelloImg} alt="" />
        <Image src={notionImg} alt="" />
        <Image src={sheetsImg} alt="" />
      </div>
      <div>
        <Image src={discordImg} alt="" />
        <Image src={slackImg} alt="" />
      </div>
    </div>
  );
};
export default Communication;
