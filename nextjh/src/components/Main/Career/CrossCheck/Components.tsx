import Image from "next/image";
import careerImg from "/public/imgs/CC_Signature_vertical_w.png";

const CrossCheck = () => {
  return (
    <div>
      <div>
        <Image src={careerImg} alt="" width={150} />
      </div>
      <div>
        <div>주식회사 크로스체크</div>
        <div>2023.07.10 ~ </div>
        <div>
          최고의 노하우와 기술력을 기반으로 고객과 함께 성장하는
          <br /> STO 전문가 집단
        </div>
        <div>
          <div>소속 : 개발팀 백엔드 개발자</div>
          <div>백 오피스 각종 기능 개발 및 자사 플랫폼, 블로그 유지보수</div>
        </div>
      </div>
    </div>
  );
};
export default CrossCheck;
