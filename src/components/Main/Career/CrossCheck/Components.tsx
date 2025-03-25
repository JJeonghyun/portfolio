import Image from "next/image";
import careerImg from "/public/imgs/CC_Signature_vertical.png";

const CrossCheck = () => {
  return (
    <div>
      <div>
        <Image src={careerImg} alt="" width={150} />
      </div>
      <div>
        <div>주식회사 크로스체크</div>
        <div>2023.07 ~ 2024.10 (약 1년 3개월) </div>
        <div>
          최고의 노하우와 기술력을 기반으로 고객과 함께 성장하는 STO 전문가 집단
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
              - 지도에 나타낼 행정구역 데이터 최적화
              <br />
              - STO 상품 정보 CRUD 기능 및 API 개발
              <br />
              - STO 상품, 행정구역(지역)명, 지하철역 등 검색 기능 개발 <br />
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
export default CrossCheck;
