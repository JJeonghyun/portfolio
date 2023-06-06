import Image from "next/image";
import solidityImg from "public/imgs/stack/contract/solidity.jpg";
import remixImg from "public/imgs/stack/contract/remix.png";
import truffleImg from "public/imgs/stack/contract/truffle.svg";
import ganacheImg from "public/imgs/stack/contract/ganache.jpg";
import ipfsImg from "public/imgs/stack/contract/ipfs.png";
import ubuntuImg from "public/imgs/stack/contract/ubuntu.jpg";

const Contract = () => {
  return (
    <div>
      <div>Contract</div>
      <div>
        <Image src={solidityImg} alt="" />
        <Image src={remixImg} alt="" />
        <Image src={truffleImg} alt="" />
      </div>
      <div>
        <Image src={ganacheImg} alt="" />
        <Image src={ipfsImg} alt="" />
        <Image src={ubuntuImg} alt="" />
      </div>
    </div>
  );
};
export default Contract;
