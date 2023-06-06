import Image from "next/image";
import HTMLImg from "public/imgs/stack/front/HTML icon.png";
import CSSImg from "public/imgs/stack/front/CSS icon.png";
import JSImg from "public/imgs/stack/front/JS icon.png";
import bootstrapImg from "public/imgs/stack/front/bootstrap icon.png";
import web3jsImg from "public/imgs/stack/front/web3js.jpg";
import reduxImg from "public/imgs/stack/front/redux.png";
import reactImg from "public/imgs/stack/front/react.jpg";

const FrontEnd = () => {
  return (
    <div>
      <div>FrontEnd</div>
      <div>
        <Image src={HTMLImg} alt="" />
        <Image src={CSSImg} alt="" />
        <Image src={JSImg} alt="" />
      </div>
      <div>
        <Image src={bootstrapImg} alt="" />
        <Image src={web3jsImg} alt="" />
      </div>
      <div>
        <Image src={reduxImg} alt="" />
        <Image src={reactImg} alt="" />
      </div>
      <div></div>
    </div>
  );
};
export default FrontEnd;
