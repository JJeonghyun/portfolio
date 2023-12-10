import Image from "next/image";
import amazonImg from "public/imgs/stack/etc/amazonWebservices.png";
import ubuntuImg from "public/imgs/stack/etc/ubuntu.jpg";
import jenkinsImg from "public/imgs/stack/etc/jenkins.jpg";
import githubActionImg from "public/imgs/stack/etc/githubAction.png";

const Deployment = () => {
  return (
    <div>
      <div>Deployment</div>
      <div style={{ width: "85%" }}>
        <Image src={amazonImg} alt="" />
      </div>
      <div>
        <Image src={ubuntuImg} alt="" />
        <Image src={jenkinsImg} alt="" />
        <Image src={githubActionImg} alt="" />
      </div>
    </div>
  );
};
export default Deployment;
