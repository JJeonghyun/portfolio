import {
  HTML_CSS_JSImg,
  reactImg,
  reduxImg,
  nextjsImg,
  nodejsImg,
  mysqlImg,
  axiosImg,
  tsImg,
  sequelize,
  trelloImg,
  notionImg,
  sheetsImg,
  slackImg,
  gitImg,
  postmanImg,
  githubSignImg,
  filezillaImg,
  amazonImg,
  jenkinsImg,
  githubActionImg,
  verselImg,
} from './imgs';

export const STACK_LIST = [
  {
    title: 'FrontEnd',
    imgList: [HTML_CSS_JSImg, reduxImg, reactImg, nextjsImg],
  },

  {
    title: 'BackEnd',
    imgList: [nodejsImg, mysqlImg, axiosImg, tsImg, sequelize],
  },

  {
    title: 'Communication',
    imgList: [trelloImg, notionImg, sheetsImg, slackImg],
  },

  {
    title: 'Tools',
    imgList: [gitImg, postmanImg, githubSignImg, filezillaImg],
  },
  {
    title: 'Deployment',
    imgList: [amazonImg, jenkinsImg, githubActionImg, verselImg],
  },
];
