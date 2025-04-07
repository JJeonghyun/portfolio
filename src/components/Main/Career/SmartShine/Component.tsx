import Image from 'next/image';

import smartLogo from '/public/imgs/logo_b.svg';

const SmartShine = () => {
  return (
    <div>
      <div>
        <Image src={smartLogo} alt="" width={150} />
      </div>
      <div>
        <div>주식회사 스마트샤인</div>
        <div>2024.12 ~ (재직중) </div>
        <div>전문 인력과 스마트 기술의 결합, 완벽한 객실관리의 시작</div>
        <div>
          <div>소속 : 본사 IT부서 </div>
          <div>주요업무 :</div>
          <div>
            <p>- 백엔드 / 프론트 개발</p>
            <p>- UI/UX 최적화 및 사용자 경험 개선</p>
            <p>- 기존 플랫폼 유지 및 보수</p>
            <p>- API 통합 및 관리</p>
            <p>- 서버 데이터베이스 및 보안 관리</p>
            <p>- 그외 제반 IT 업무</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SmartShine;
