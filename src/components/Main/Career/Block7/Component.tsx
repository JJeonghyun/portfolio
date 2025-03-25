import Image from "next/image";
import careerImg from "/public/imgs/careerImg-removebg-preview.png";

const Block7 = () => {
  return (
    <div>
      <div>
        <Image src={careerImg} alt="" width={200} />
      </div>
      <div>
        <div>경일게임아카데미</div>
        <div>2022.08.22 ~ 2023.05.30</div>
        <div>블록체인 기반 핀테크 응용 SW개발자 양성과정</div>
        <div>훈련 우수상 수상</div>
      </div>
    </div>
  );
};
export default Block7;
