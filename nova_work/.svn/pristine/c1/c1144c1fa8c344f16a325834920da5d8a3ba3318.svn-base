import angular from 'angular';
import MenuTemplate from './menu.template.html';

require("./menu.css");

const MODULE_NAME = "nova.common";

class MenuController{
	constructor($rootScope){
		var self = this;
		self.$rootScope = $rootScope;
	}
}
MenuController.$inject = ["$rootScope"];

export default angular.module(MODULE_NAME).component("novaMenu", {
	template: MenuTemplate,
	controller: MenuController,
	bindings: {}
});