import Image from "next/image";
import ec2Img from "public/imgs/stack/etc/ec2.png";
import route53Img from "public/imgs/stack/etc/route 53.png";
import filezillaImg from "public/imgs/stack/etc/filezilla.png";

const Deployment = () => {
  return (
    <div>
      <div>Deployment</div>
      <div>
        <Image src={ec2Img} alt="" />
        <Image src={route53Img} alt="" />
        <Image src={filezillaImg} alt="" />
      </div>
    </div>
  );
};
export default Deployment;
