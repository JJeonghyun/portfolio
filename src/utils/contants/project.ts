import {
  stockBoxLogin,
  stockBoxMain,
  stockBoxPayment,
  stiimLogin,
  stiimMain,
  initiativeAuthentication,
  initiativeMain,
  PortfolioImg,
  defiScanImg,
  mintingImg,
  detailImg,
  teslaImg,
  u2vibeImg,
  MondayKizImg,
} from './imgs';

export const PROJECT_LIST = [
  {
    title: '주식박스',
    peroid: '2024.08 ~ 2024.10 (Stock Platform)',
    imgs: [stockBoxMain, stockBoxLogin, stockBoxPayment],
    description: [
      '주식 및 증권 정보를 쉽고 간편하게 접근할 수 있는 플랫폼',
      '일반/간편 회원가입 및 로그인 기능 구현',
      '본인 인증 모듈 도입',
      'PG사 결제 시스템 도입',
    ],
    mainFunction: [
      '협업 파트너사 API 연동 및 개발',
      '전략 리스트 CRUD 개발',
      '전략명, 증시명 검색 기능 개발',
      '기간별 특정 데이터 차트 이미지화 기능 개발',
      '일반/간편 회원가입 및 단일/통합 로그인 기능 설계 및 구현',
      '일반/간편 회원 정보 통합 기능 설계 및 구현',
      '본인 인증 (Nice 솔루션) 도입 및 개발',
      '결제 PG사 솔루션 도입',
    ],
    link: {title: '주식박스', url: 'https://xn--bh3b03j3e14v.com/'},
    stack: [
      {name: 'BackEnd', list: 'NodeJS, Typescript, MySQL, SequelizeORM'},
      {
        name: 'Deployed',
        list: 'AWS EC2, AWS Route 53, GitHub Action, AWS CodeDeploy, PM2',
      },
    ],
  },
  {
    title: 'STIIM',
    peroid: '2023.08 ~ 2024.10 (STO Platform)',
    imgs: [stiimMain, stiimLogin],
    description: [
      'STO 토큰 증권에 대한 투자 지표 정보를 지도를 통해 접근할 수 있는 플랫폼',
      '지도에 나타낼 행정 구역 데이터 최적화',
      'STO 상품 정보 CRUD 기능 및 API 개발',
    ],
    mainFunction: [
      'STO 상품 정보 CRUD 기능 및 API 개발',
      'STO 상품, 행정 구역(지역)명, 지하철역 등 검색 기능 개발',
      '일반/간편 회원가입 및 단일/통합 로그인 기능 설계 및 구현',
      '본인 인증 (Nice 솔루션) 도입 및 개발',
    ],
    link: {title: 'STIIM', url: 'https://stiim.co.kr/'},
    stack: [
      {name: 'BackEnd', list: 'NodeJS, Typescript, MySQL, SequelizeORM'},
      {
        name: 'Deployed',
        list: 'AWS EC2, AWS Route 53, GitHub Action, AWS CodeDeploy, PM2',
      },
    ],
  },
  {
    title: 'ST.Initiative',
    peroid: '2023.07 ~ 2024.10 (Blog Platform)',
    imgs: [initiativeMain, initiativeAuthentication],
    description: [
      'STO 관련 시장 형성 시황 분석',
      '국내외 STO 법률, 현안, 제도, 규제에 대한 정보 공유',
      '전반적인 API 설계 및 개발 수행',
    ],
    mainFunction: [
      '플랫폼 게시물 CRUD 기능 개발',
      '게시물 페이지네이션 기능 개발',
      '게시물 검색 기능 개발',
      '게시물 날짜 필터 기능 개발',
      'openAPI (당일 코스피 정보, 환율 정보, 상위 국내 증시 정보) 도입 및 개발',
    ],
    link: {title: 'Initiative', url: 'https://initiative.stiim.co.kr/'},

    stack: [
      {name: 'BackEnd', list: 'NodeJS, Typescript, MySQL, SequelizeORM'},
      {
        name: 'Deployed',
        list: 'AWS EC2, AWS Route 53, GitHub Action, AWS CodeDeploy, PM2',
      },
    ],
  },
  {
    title: '포트폴리오 웹사이트',
    peroid: '2023.05.29 ~ 2023.06.07 (Personal Project)',
    imgs: [PortfolioImg],
    description: [
      '포트폴리오를 위해 진행한 웹사이트',
      '기존에 배웠던 React가 아닌 NextJS 프레임워크를 사용하여 제작',
      'SSR 환경에 맞춰 정적인 웹사이트를 계획, 배포까지 경험',
    ],
    mainFunction: [
      '간단한 자기소개 및 인적 사항',
      '기술 스택 (FrontEnd, BackEnd, Contract, ETC)',
      'GitHub, Tistory, Notion 링크',
      '진행했던 프로젝트',
      '기타 경력 사항과 Footer',
    ],
    link: {title: 'Portfolio', url: 'https://jjh-portfolio.com/'},

    stack: [
      {name: 'FrontEnd', list: 'NextJS, typeScript'},
      {
        name: 'Deployed',
        list: 'AWS EC2, AWS Route 53, GitHub Action, AWS CodeDeploy, PM2',
      },
    ],
  },
  {
    title: 'SolarProject',
    peroid: '2022.04.03 ~ 2023.05.22 (기업 협약 프로젝트)',
    imgs: [defiScanImg],
    description: [
      'Defi Scan 사이트를 통해 사용자들이 수많은 Defi들을 통합하여 편리하게 필터링할 수 있으며, 하나의 사이트 내에서 수많은 메인넷의 Defi들을 비교해 볼 수 있어 편리함',
      'Auto-Compounding vaults 기능으로 수동 Claim 후 재 예치 불필요',
      '트랜잭션 발생 시 Scan 사이트 자체 발행 Token Airdrop으로 보상',
    ],
    mainFunction: [
      '다양한 지갑 Connect Wallet 기능',
      'Defi API 연동 제공',
      'Staking 기능, Scan 사이트 발행 Token Airdrop 기능',
      'Defi에 사용자가 일정 수수료 발생 시 사용자에게 보상 Airdrop 기능',
      '메인넷 별 Deif 상품 필터링 기능',
      '원하는 LP 이름, CA 검색 기능',
    ],
    link: {
      title: 'Github',
      url: 'https://github.com/JJeonghyun/SolarProject',
    },
    stack: [
      {
        name: 'FrontEnd',
        list: 'React, Redux, JavaScript, Web3js, Figma, aws-amplify, styled-components, thressjs',
      },
      {
        name: 'BackEnd',
        list: 'Nodejs, mySQL, PM2, Sequelize, TypeScript, nodemon',
      },
      {name: 'Contract', list: 'Solidity, Remix'},
      {
        name: 'Deployed',
        list: 'AWS EC2, AWS Route 53, Filezilla',
      },
    ],
  },
  {
    title: 'NFTMarket',
    peroid: '2023.03.20 ~ 2023.03.31 (Block Team Project)',
    imgs: [mintingImg, detailImg],
    description: [
      '누구나 쉽고, 즐겁게, 안전하게 NFT를 사고 팔 수 있는 홈페이지 제작',
      'React, Node.js(express), DB 활용 및 Metamask & Geth & Pinata 등을 결합한 BlockChain 거래소 코딩으로 이전에 학습한 내용 복습',
    ],
    mainFunction: [
      '메인 페이지 (”/”)',
      'NFT 상세 정보 페이지 (”/detail”)',
      '민팅 페이지 (”/minting”)',
      '마이 페이지 (”/mypage”)',
    ],
    link: {
      title: 'Github',
      url: 'https://github.com/yesla-yeom/MintchoNFT',
    },
    stack: [
      {
        name: 'FrontEnd',
        list: 'React, JavaScript, Web3js, styled-components',
      },
      {
        name: 'BackEnd',
        list: 'Nodejs, mySQL, PM2, Sequelize, TypeScript, nodemon',
      },
      {name: 'Contract', list: 'Solidity, Remix'},
      {
        name: 'Deployed',
        list: 'AWS EC2, AWS Route 53, Filezilla, Ubuntu',
      },
    ],
  },
  {
    title: 'JJJJ',
    peroid: '2022.12.09 ~ 2022.12.30 (React TeamProject)',
    imgs: [teslaImg],
    description: [
      'Front 기반의 React와 Back 기반의 Node.js (Express) 및 DB를 결합한 웹 페이지 개발',
    ],
    mainFunction: [
      '회원가입, 로그인, 로그아웃 페이지 구현',
      '장바구니 페이지',
      '상품 상세 페이지',
      '검색 결과 페이지',
      '구매 내역 및 사용자 마이 페이지',
      '관리자 페이지',
    ],
    link: {
      title: 'Github',
      url: 'https://github.com/JJeonghyun/ReactProject',
    },
    stack: [
      {
        name: 'FrontEnd',
        list: 'React, Redux, JavaScript styled-components',
      },
      {
        name: 'BackEnd',
        list: 'Nodejs, mySQL, PM2, Sequelize, nodemon',
      },
      {
        name: 'Deployed',
        list: 'AWS EC2, AWS Route 53, Filezilla',
      },
    ],
  },
  {
    title: 'U2VIBE',
    peroid: '2022.11.03 ~ 2022.11.15 (Nodejs TeamProject)',
    imgs: [u2vibeImg],
    description: [
      '사용자들이 음원들을 등록하고 들을 수 있는 음원 스트리밍 홈페이지',
    ],
    mainFunction: [
      '회원가입, 로그인 기능 구현',
      '음원 상세 페이지 댓글 기능 구현',
      '음원 차트 페이지 구현',
      '음원 업로드 기능',
      '유저 개개인의 재생 목록 생성 기능 구현',
      '관리자 페이지',
    ],
    link: {
      title: 'Github',
      url: 'https://github.com/JJeonghyun/NodejsProject',
    },
    stack: [
      {
        name: 'FrontEnd',
        list: 'HTML5, CSS3, JavaScript, Bootstrap',
      },
      {
        name: 'BackEnd',
        list: 'Nodejs, mySQL, PM2, Sequelize, nodemon',
      },
      {
        name: 'Deployed',
        list: 'AWS EC2, AWS Route 53, Filezilla',
      },
    ],
  },
  {
    title: 'MondayKiz Clone Paging',
    peroid: '2022.10.06 ~ 2022.10.13 (Personal Project)',
    imgs: [MondayKizImg],
    description: ['평소에 팬이었던 MondayKiz 소속 페이지를 Clone 해보자!!'],
    mainFunction: [
      '메인 페이지와 그 외 페이지들을 구상 및 구현',
      '페이지 HTML&CSS 수정 및 보완 / JS 동적 기능 추가',
      '추가적으로 필요한 페이지들 구상 및 구현',
      '페이지 HTML&CSS 수정 및 보완 / JS 동적 기능 추가',
      '전체 페이지 media query를 통한 반응형 웹페이지 구현',
      '반응형 웹 페이지 마무리 작업 및 버그 수정 & 미비한 작업 추가',
    ],
    link: {
      title: 'Github',
      url: 'https://github.com/JJeonghyun/SideProject',
    },
    stack: [
      {
        name: 'FrontEnd',
        list: 'HTML5, CSS3, JavaScript, Bootstrap',
      },
      {
        name: 'BackEnd',
        list: 'Nodejs, mySQL, PM2, Sequelize, nodemon',
      },
      {
        name: 'Deployed',
        list: 'AWS EC2, AWS Route 53, Filezilla',
      },
    ],
  },
];
