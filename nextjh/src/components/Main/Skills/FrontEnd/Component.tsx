import Image from "next/image";
import JSImg from "public/imgs/stack/front/JS icon.png";
import web3jsImg from "public/imgs/stack/front/web3js.jpg";
import reduxImg from "public/imgs/stack/front/redux.png";
import reactImg from "public/imgs/stack/front/react.jpg";
import nextjsImg from "public/imgs/stack/front/nextjs.jpg";

const FrontEnd = () => {
  return (
    <div>
      <div>FrontEnd</div>
      <div>
        <Image src={JSImg} alt="" />
        <Image src={web3jsImg} alt="" />
      </div>
      <div>
        <Image src={reactImg} alt="" />
        <Image src={reduxImg} alt="" />
        <Image src={nextjsImg} alt="" />
      </div>
    </div>
  );
};
export default FrontEnd;
