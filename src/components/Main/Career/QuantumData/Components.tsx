import Image from 'next/image';

import careerImg from '/public/imgs/QD_signature_vertical_black.png';

const QuantumData = () => {
  return (
    <div>
      <div>
        <Image src={careerImg} alt="" width={150} />
      </div>
      <div>
        <div>주식회사 퀀텀데이터</div>
        <div>2024.08 ~ 2024.10 (약 3개월) </div>
        <div>
          고도화된 증권정보를 바탕으로 시장의 정보 비대칭성 해소 및 혁신을 위한
          핀테크 엔터프라이즈
          <br />
        </div>
        <div>
          <div>소속 : 플랫폼실 백엔드 개발자</div>
          <div>주요업무 :</div>
          <div>
            <p>- 플랫폼 백엔드 아키텍처 설계 및 개발</p>
            <p>- 전반적인 API 설계 및 개발 수행</p>
            <p>- 데이터베이스 설계 및 최적화</p>
            <p>- 본인인증 (Nice 솔루션) 도입 및 개발</p>
            <p>- 결제 (PG사) 솔루션 도입</p>
            <p>- GitHub Actions를 통한 빌드 및 배포 자동화</p>
            <p>- HTTPS 보안 설정</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuantumData;
