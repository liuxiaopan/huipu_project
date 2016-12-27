import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularCookies from 'angular-cookies';
import authentication from './modules/aut/index.js';
import authorization from './modules/auz/index.js';
import locale from './modules/locale/index.js';
import common from './common/index.js';
import routing from './route.js';
import menu from './common/menu/menu.component.js';
import home from './modules/home/index.js';
import plan from './modules/plan/index.js';
import task from './modules/task/index.js';
import menuV from './common/v-menu/v-menu.component.js';
import splitter from './common/splitter/splitter.component.js';
// import search from './utils/modal/index';
import pagination from 'angular-ui-bootstrap/src/pagination';
import modal from 'angular-ui-bootstrap/src/modal';


require("./css/common.css");

export default angular.module("nova", [
    uiRouter,
    pagination,
    modal,
    angularCookies,
    authentication,
    authorization,
    locale,
    common,
    home,
    plan,
  task,

]).config(routing).name;