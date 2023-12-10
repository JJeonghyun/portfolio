import Image from "next/image";
import codeImg from "public/imgs/stack/etc/code.png";
import gitImg from "public/imgs/stack/etc/git.png";
import postmanImg from "public/imgs/stack/etc/postman.png";
import githubSignImg from "public/imgs/stack/etc/github-sign.png";
import filezillaImg from "public/imgs/stack/etc/filezilla.png";

const Tools = () => {
  return (
    <div>
      <div>Tools</div>
      <div>
        <Image src={codeImg} alt="" />
        <Image src={postmanImg} alt="" />
      </div>
      <div>
        <Image src={gitImg} alt="" />
        <Image src={filezillaImg} alt="" />
        <Image src={githubSignImg} alt="" />
      </div>
    </div>
  );
};
export default Tools;
