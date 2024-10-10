import Image from "next/image";

import careerImg from "/public/imgs/QD_signature_vertical_black.png";

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
            - 플랫폼 백엔드 아키텍처 설계 및 개발 <br />
            - API 설계 및 개발 수행 <br />
            <div>
              - 회원가입 / 로그인 기능 설계 및 구현
              <br />
              - 간편(SNS) 가입 및 로그인 기능 설계 및 구현
              <br />
              - 협업 파트너 회사 API ( 외부 API ) 연동 및 개발
              <br />
              - 전략 정보 조회 API 개발
              <br />
              - 전략명, 증시명 검색 기능 개발 <br />
              - 기간별 특정 데이터에 대한 차트 이미지화 기능 개발 <br />
              - 본인인증 및 PG사 솔루션 연동 <br />
            </div>
            - 프로젝트 배포 및 운영 <br />
            <div>
              - GitHub Actions를 통한 빌드 및 배포 자동화
              <br />
              - Github Action 설정
              <br />
              - AWS S3, CodeDeploy 설정
              <br />
              - 배포 스크립트 작성
              <br />
              - EC2 인스턴스에 배포 후 PM2 무중단 서비스 운영
              <br />
              - HTTPS 보안 설정
              <br />- Apache를 통한 Certbot 사용 및 AWS Certificate Manager 경험
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuantumData;
