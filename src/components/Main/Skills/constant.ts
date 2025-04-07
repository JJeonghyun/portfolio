import HTML_CSS_JSImg from 'public/imgs/stack/front/html_css_js_logo.png';
import reduxImg from 'public/imgs/stack/front/redux.png';
import reactImg from 'public/imgs/stack/front/react.png';
import nextjsImg from 'public/imgs/stack/front/nextjs.png';

import axiosImg from 'public/imgs/stack/back/axios.png';
import nodejsImg from 'public/imgs/stack/back/node js icon.png';
import sequelize from 'public/imgs/stack/back/sequelize.png';
import tsImg from 'public/imgs/stack/back/ts.png';
import mysqlImg from 'public/imgs/stack/db/mysql.png';

import trelloImg from 'public/imgs/stack/etc/trello.png';
import notionImg from 'public/imgs/stack/etc/notion.png';
import sheetsImg from 'public/imgs/stack/etc/sheets.png';
import slackImg from 'public/imgs/stack/etc/slack.png';

import gitImg from 'public/imgs/stack/etc/git.png';
import postmanImg from 'public/imgs/stack/etc/postman.png';
import githubSignImg from 'public/imgs/stack/etc/github.png';
import filezillaImg from 'public/imgs/stack/etc/filezilla.jpeg';

import amazonImg from 'public/imgs/stack/etc/amazonWebservices.png';
import jenkinsImg from 'public/imgs/stack/etc/jenkins.png';
import githubActionImg from 'public/imgs/stack/etc/github_action.png';

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
    imgList: [amazonImg, jenkinsImg, githubActionImg],
  },
];
