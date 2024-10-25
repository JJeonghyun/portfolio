import stockBoxMain from "/public/imgs/StockBox/Main.png";
import stockBoxLogin from "/public/imgs/StockBox/Login.png";
import stockBoxStrategy from "/public/imgs/StockBox/Strategy.png";
import stockBoxPayment from "/public/imgs/StockBox/Payment.png";

import stiimMain from "/public/imgs/Stiim/main.png";
import stiimLogin from "/public/imgs/Stiim/Login.png";

import initiativeMain from "/public/imgs/Initiative/main.png";
import initiativeAuthentication from "/public/imgs/Initiative/authentication.png";

import PortfolioImg from "/public/imgs/portfolio/portfolio.jpg";

import defiScanImg from "/public/imgs/solar/defiScan.jpg";
import responseImg from "/public/imgs/solar/response.jpg";

import mintingImg from "public/imgs/nftmarket/minting.jpg";
import detailImg from "public/imgs/nftmarket/detail.jpg";

import teslaImg from "public/imgs/tesla/tesla.jpg";

import u2vibeImg from "public/imgs/u2vibe/u2vibe main.jpg";
import faviconImg from "public/imgs/u2vibe/u2vibefavicon.png";

import MondayKizImg from "/public/imgs/ClonePaging/MondayKiz.jpg";

export const projectList = [
  {
    title: "주식박스",
    peroid: "2024.08 ~ 2024.10 (Stock Platform)",
    imgs: [stockBoxMain, stockBoxLogin, stockBoxStrategy, stockBoxPayment],
    description: [
      "주식 및 증권정보를 쉽고 간편하게 접근할 수 있는 플랫폼",
      "일반/간편 회원가입 및 로그인 구현",
      "본인인증 모듈 도입",
      "PG사 결제 시스템 도입",
    ],
    mainFunction: [
      "협업 파트너 회사 API ( 외부 API ) 연동 및 개발",
      "전략 리스트 정보 조회 API 개발",
      "특정 전략 상세정보 조회 API 개발",
      "전략명, 증시명 검색 기능 개발",
      "기간별 특정 데이터에 대한 차트 이미지화 기능 개발",
      "회원가입 / 로그인 기능 설계 및 구현",
      "간편(SNS) 가입 및 로그인 기능 설계 및 구현",
      "일반 / 간편 회원정보 통합 기능 설계 및 구현",
      "본인인증 (Nice 솔루션) 도입 및 개발",
      "결제 PG사 솔루션 도입",
      "GitHub Actions를 통한 빌드 및 배포 자동화",
      "Apache를 통한 Certbot 사용 및 AWS Certificate Manager 경험",
    ],
    link: { title: "주식박스", url: "https://xn--bh3b03j3e14v.com/" },
    stack: [
      { name: "BackEnd", list: "NodeJS, Typescript ,MySQL, SequelizeORM" },
      {
        name: "Deployed",
        list: "AWS EC2, AWS Route 53, GitHub Action, AWS CodeDeploy, PM2",
      },
    ],
  },
  {
    title: "STIIM",
    peroid: "2023.08 ~ 2024.10 (STO Platform)",
    imgs: [stiimMain, stiimLogin],
    description: [
      "STO 토큰증권에 대한 투자지표 정보를 지도를 통해 접근할 수 있는 플랫폼",
      "지도에 나타낼 행정구역 데이터 최적화",
      "STO 상품 정보 CRUD 기능 및 API 개발",
    ],
    mainFunction: [
      "STO 상품 정보 CRUD 기능 및 API 개발",
      "STO 상품, 행정구역(지역)명, 지하철역 등 검색 기능 개발",
      "회원가입 / 로그인 기능 설계 및 구현",
      "간편(SNS) 가입 및 로그인 기능 설계 및 구현",
      "일반 / 간편 회원정보 통합 기능 설계 및 구현",
      "본인인증 (Nice 솔루션) 도입 및 개발",
      "GitHub Actions를 통한 빌드 및 배포 자동화",
      "Apache를 통한 Certbot 사용 및 AWS Certificate Manager 경험",
    ],
    link: { title: "STIIM", url: "https://stiim.co.kr/" },
    stack: [
      { name: "BackEnd", list: "NodeJS, Typescript ,MySQL, SequelizeORM" },
      {
        name: "Deployed",
        list: "AWS EC2, AWS Route 53, GitHub Action, AWS CodeDeploy, PM2",
      },
    ],
  },
  {
    title: "ST.Initiative",
    peroid: "2023.07 ~ 2024.10 (Blog Platform)",
    imgs: [initiativeMain, initiativeAuthentication],
    description: [
      "STO 관련 시장형성 시황분석",
      "국내외 STO 법률∙현안∙제도∙규제에 대한 정보 공유",
      "전반적인 API 설계 및 개발 수행",
    ],
    mainFunction: [
      "플랫폼 게시물 CRUD 기능 개발",
      "게시물 페이지네이션 기능 개발",
      "게시물 검색 기능 개발",
      "게시물 날짜 필터 기능 개발",
      "openAPI ( 당일 코스피 정보, 환율정보, 상위 국내증시정보 ) 도입 및 개발",
    ],
    link: { title: "Initiative", url: "https://initiative.stiim.co.kr/" },

    stack: [
      { name: "BackEnd", list: "NodeJS, Typescript ,MySQL, SequelizeORM" },
      {
        name: "Deployed",
        list: "AWS EC2, AWS Route 53, GitHub Action, AWS CodeDeploy, PM2",
      },
    ],
  },
  {
    title: "포트폴리오 웹사이트",
    peroid: "2023.05.29 ~ 2023.06.07 (Personal Project)",
    imgs: [PortfolioImg],
    description: [
      "포트폴리오를 위해서 진행한 웹사이트",
      "기존에 배웠던 React로 익숙한 환경이 아니라 NextJS라는 프레임워크를 사용해서 제작",
      " 그 과정에서 SSR환경에서의 환경에 맞춰서 정적인 웹사이트를 계획에서 배포까지 경험",
    ],
    mainFunction: [
      "간단한 자기소개 및 인적사항",
      "기술 스택(FrontEnd, BackEnd, Contract, ETC)",
      "GitHub, Tistory, Notion 각 Link",
      "진행 했던 프로젝트",
      "기타 경력 사항과 Footer",
    ],
    link: { title: "Portfolio", url: "https://jjh-portfolio.com/" },

    stack: [
      { name: "FrontEnd", list: "NextJS, typeScript" },
      {
        name: "Deployed",
        list: "AWS EC2, AWS Route 53, GitHub Action, AWS CodeDeploy, PM2",
      },
    ],
  },
  {
    title: "SolarProject",
    peroid: "2022.04.03 ~ 2023.05.22 (기업협약 프로젝트)",
    imgs: [defiScanImg, responseImg],
    description: [
      "Defi Scan 사이트를 통해 사용자들이 수많은 Defi들을 통합하여서 편하게 필터링 할 수 있으며, 한 개의 사이트내에서 수많은 메인넷들의 Defi들을 비교해 볼 수 있기에 편리해진다",
      "Auto-Compounding vaults 기능으로 수동으로 Claim을 한 후에 다시 Deposit을 하지 않아도 됨으로 굉장히 편리해진다",
      "또한 트랜잭션이 일어날 때 마다 일정량의 Scan사이트에서 자체 발행한 Token을 Airdrop 해줌으로써 적절한 보상이 이루어질 수 있다",
    ],
    mainFunction: [
      "다양한 지갑들의 Connect Wallet 기능",
      "Defi API 연동에서 제공",
      "Staking 기능 Scan 사이트에서 발행한 Token Airdrop 기능",
      "Defi에 사용자가 일정 수수료가 발생하면 사용자에게 보상 Airdrop되는 기능",
      "메인넷 별 Deif 상품들에 대한 필터링 기능",
      "원하는 LP의 이름이나 CA를 검색 기능",
    ],
    link: {
      title: "Github",
      url: "https://github.com/JJeonghyun/SolarProject",
    },
    stack: [
      {
        name: "FrontEnd",
        list: "React, Redux, JavaScript, Web3js, Figma, aws-amplify, styled-components, thressjs",
      },
      {
        name: "BackEnd",
        list: "Nodejs, mySQL, PM2, Sequelize, TypeScript, nodemon",
      },
      { name: "Contract", list: "Solidity, Remix" },
      {
        name: "Deployed",
        list: "AWS EC2, AWS Route 53, Filezilla",
      },
    ],
  },
  {
    title: "NFTMarket",
    peroid: "2023.03.20 ~ 2023.03.31 (Block Team Project)",
    imgs: [mintingImg, detailImg],
    description: [
      "누구나 쉽고, 즐겁게, 안전하게 NFT를 사고 팔 수 있는 홈페이지 제작",
      "React, Node.js(express), DB 활용 및 Metamask & Geth & Pinata 등을 결합한 BlockChain 거래소 코딩으로 이전에 학습한 내용 복습",
    ],
    mainFunction: [
      "메인 페이지 (”/”)",
      "NFT 상세정보 페이지 (”/detail”)",
      "민팅 페이지 (”/minting”)",
      "마이 페이지 (”/mypage”)",
    ],
    link: {
      title: "Github",
      url: "https://github.com/yesla-yeom/MintchoNFT",
    },
    stack: [
      {
        name: "FrontEnd",
        list: "React, JavaScript, Web3js, styled-components",
      },
      {
        name: "BackEnd",
        list: "Nodejs, mySQL, PM2, Sequelize, TypeScript, nodemon",
      },
      { name: "Contract", list: "Solidity, Remix" },
      {
        name: "Deployed",
        list: "AWS EC2, AWS Route 53, Filezilla, Ubuntu",
      },
    ],
  },
  {
    title: "JJJJ",
    peroid: "2022.12.09 ~ 2022.12.30 (React TeamProject)",
    imgs: [teslaImg],
    description: [
      "Front기반의 React와 Back기반의 Node.js (Express) 및 DB를 결합한  웹페이지 개발",
    ],
    mainFunction: [
      "회원가입, 로그인, 로그아웃 페이지 구현",
      "장바구니 페이지",
      "상품 상세 페이지",
      "검색 결과 페이지",
      "구매내역 및 사용자 마이페이지",
      "관리자 페이지",
    ],
    link: {
      title: "Github",
      url: "https://github.com/JJeonghyun/ReactProject",
    },
    stack: [
      {
        name: "FrontEnd",
        list: "React, Redux, JavaScript styled-components",
      },
      {
        name: "BackEnd",
        list: "Nodejs, mySQL, PM2, Sequelize, nodemon",
      },
      {
        name: "Deployed",
        list: "AWS EC2, AWS Route 53, Filezilla",
      },
    ],
  },
  {
    title: "U2VIBE",
    peroid: "2022.11.03 ~ 2022.11.15 (Nodejs TeamProject)",
    imgs: [u2vibeImg, faviconImg],
    description: [
      "사용자들이 음원들을 등록하고 들을 수 있는 음원 스트리밍 홈페이지",
    ],
    mainFunction: [
      "회원가입, 로그인 기능 구현",
      "음원 상세 페이지 댓글 기능 구현",
      "음원 차트 페이지 구현",
      "음원 업로드 기능",
      "유저 개개인의 재생목록 생성 기능 구현",
      "관리자 페이지",
    ],
    link: {
      title: "Github",
      url: "https://github.com/JJeonghyun/NodejsProject",
    },
    stack: [
      {
        name: "FrontEnd",
        list: "HTML5, CSS3, JavaScript, Bootstrap",
      },
      {
        name: "BackEnd",
        list: "Nodejs, mySQL, PM2, Sequelize, nodemon",
      },
      {
        name: "Deployed",
        list: "AWS EC2, AWS Route 53, Filezilla",
      },
    ],
  },
  {
    title: "MondayKiz Clone Paging",
    peroid: "2022.10.06 ~ 2022.10.13 (Personal Project)",
    imgs: [MondayKizImg],
    description: ["평소에 팬이였던 MondayKiz 소속 페이지를 Clone 해보자!!"],
    mainFunction: [
      "메인 페이지와 그 외 페이지들을 구상 및 구현",
      "페이지 HTML&CSS 수정 및 보완 / JS 동적 기능 추가",
      "추가적으로 필요한 페이지들 구상 및 구현",
      "페이지 HTML&CSS 수정 및 보완 / JS 동적 기능 추가",
      "전체 페이지 media query를 통한 반응형 웹페이지 구현",
      "반응형 웹 페이지 마무리 작업 및 버그 수정 & 미비한 작업 추가",
    ],
    link: {
      title: "Github",
      url: "https://github.com/JJeonghyun/SideProject",
    },
    stack: [
      {
        name: "FrontEnd",
        list: "HTML5, CSS3, JavaScript, Bootstrap",
      },
      {
        name: "BackEnd",
        list: "Nodejs, mySQL, PM2, Sequelize, nodemon",
      },
      {
        name: "Deployed",
        list: "AWS EC2, AWS Route 53, Filezilla",
      },
    ],
  },
];
