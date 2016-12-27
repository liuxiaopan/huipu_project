import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './route.js';
import AutService from './js/aut.service.js';
import { showIfLogin, showIfNotLogin } from "./js/aut.directives.js";

const MODULE_NAME = "nova.aut";
angular.module(MODULE_NAME, [
	uiRouter
])
.config(routing)
.service("AUTService", AutService)
.directive("showIfLogin", showIfLogin)
.directive("showIfNotLogin", showIfNotLogin)
.run(["$rootScope", "$cookies", "$state", function($rootScope, $cookies, $state){
    var isLogedIn = $cookies.get('IS_LOGED_IN');
    if (isLogedIn) {
      $rootScope.isLogedIn = isLogedIn;
    } else {
      $state.go("login");
    }
}]);

export default MODULE_NAME;