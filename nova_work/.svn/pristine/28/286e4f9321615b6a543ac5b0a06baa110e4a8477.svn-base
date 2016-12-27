import angular from 'angular';
import VMenuTemplate from './v-menu.template.html';

require("./v-menu.template.css");

class VMenuController{
	constructor(){
		this.items = [
			{
				title:'Plan Management',
				iconClass: 'glyphicon-list-alt',
				routeState: 'plan',
				children: [
					{
						title:'plan',
						routeState: 'plan.planSearch'
					},{
						title:'section',
						routeState: 'plan.sectionSearch'
					},{
						title:'case',
						routeState: 'plan.caseSearch'
					}
				]
			},{
				title:'Task Management',
				iconClass: 'glyphicon-tasks',
				routeState: 'task',
				children: [
					{
						title:'task',
						routeState: 'task.taskSearch'
					},
					{
						title:'Matrix',
						routeState: 'task.matrix'
					},{
						title:'Desktop',
						routeState: 'task.desktop'
					}
				]
			},{
				title:'Settings',
				iconClass: 'glyphicon-cog',
				routeState: 'settings',
				children: [
					{
						title:'User',
						routeState: 'settings.user'
					},{
						title:'Platform',
						routeState: 'settings.platform'
					},{
						title:'Environment',
						routeState: 'settings.env'
					},{
						title:'Component',
						routeState: 'settings.component'
					},{
						title:'Testing Site',
						routeState: 'settings.testing-site'
					},{
						title:'Category',
						routeState: 'settings.category'
					}
				]
			},{
				title:'Report & Dashboard',
				iconClass: 'glyphicon-dashboard',
				routeState: 'statistic',
				children: [
					{
						title:'Report',
						routeState: 'statistic.report'
					},{
						title:'Dashboard',
						routeState: 'statistic.dashboard'
					}
				]
			}
		];
	}
}
VMenuController.$inject = [];

export default angular.module("nova.common").component("novaVMenu", {
	controller: VMenuController,
	template: VMenuTemplate,
	bindings: {
		data: '<'
	}
});