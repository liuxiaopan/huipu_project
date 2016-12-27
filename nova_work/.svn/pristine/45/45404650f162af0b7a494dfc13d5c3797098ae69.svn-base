import HomeTemplate from "./templates/home.template.html";
import HomeController from "./js/home.controller.js";
import VMenuLayout from "../../common/layout/v-menu.layout.html";

routes.$inject = ["$stateProvider"];
export default function routes ($stateProvider){
	$stateProvider.state("home", {
		url: "/",
		template: VMenuLayout,
		controller: HomeController,
		controllerAs: '$ctrl'
	});
};