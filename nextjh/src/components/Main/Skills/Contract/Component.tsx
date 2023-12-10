import Image from "next/image";
import solidityImg from "public/imgs/stack/contract/solidity.png";
import remixImg from "public/imgs/stack/contract/remix.png";
import truffleImg from "public/imgs/stack/contract/truffle.svg";
import ganacheImg from "public/imgs/stack/contract/ganache.png";
import ipfsImg from "public/imgs/stack/contract/ipfs.png";

const Contract = () => {
  return (
    <div>
      <div>Contract</div>
      <div>
        <Image src={solidityImg} alt="" />
        <Image src={remixImg} alt="" />
      </div>
      <div>
        <Image src={truffleImg} alt="" />
        <Image src={ganacheImg} alt="" />
        <Image src={ipfsImg} alt="" />
      </div>
    </div>
  );
};
export default Contract;
