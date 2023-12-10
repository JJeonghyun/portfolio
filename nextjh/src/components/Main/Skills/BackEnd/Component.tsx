import Image from "next/image";
import nodejsImg from "public/imgs/stack/back/node js icon.png";
import nodemonImg from "public/imgs/stack/back/nodemon.png";
import pm2Img from "public/imgs/stack/back/pm2.png";
import axiosImg from "public/imgs/stack/back/axios.svg";
import tsImg from "public/imgs/stack/back/ts.jpg";
import mysqlImg from "public/imgs/stack/db/mysql icon.jpeg";

const BackEnd = () => {
  return (
    <div>
      <div>BackEnd</div>
      <div>
        <Image src={nodejsImg} alt="" />
        <Image src={nodemonImg} alt="" />
        <Image src={pm2Img} alt="" />
      </div>
      <div>
        <Image src={axiosImg} alt="" />
        <Image src={tsImg} alt="" />
        <Image src={mysqlImg} alt="" />
      </div>
    </div>
  );
};
export default BackEnd;
