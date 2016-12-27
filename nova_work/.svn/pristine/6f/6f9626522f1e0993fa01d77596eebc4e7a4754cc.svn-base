import LoginTemplate from "./templates/login.template.html";
import LoginController from "./js/login.controller.js";
import LogoutController from "./js/logout.controller.js";

require("./templates/login.template.css");

routes.$inject = ["$locationProvider", "$urlRouterProvider", "$stateProvider"];
export default function routes ($locationProvider, $urlRouterProvider, $stateProvider){
	$stateProvider.state("login", {
		url: "/login",
		template: LoginTemplate,
		controller: LoginController,
		controllerAs: '$ctrl'
	}).state("logout", {
		url: "/logout",
		controller: LogoutController,
		controllerAs: '$ctrl'
	});
};