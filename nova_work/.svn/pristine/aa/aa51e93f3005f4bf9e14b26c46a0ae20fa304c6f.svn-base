import TaskSearchTemplate from "./template/task-search.template.html";
import TaskSearchController from "./js/task-search.controller.js";
import TaskMatrixTemplate from "./template/task-matrix.template.html";
import TaskMatrixController from "./js/task-matrix.controller.js";
import TaskdesktopTemplate from "./template/task-desktop.template.html";
import TaskDesktopController from "./js/task-desktop.controller.js";
import VMenuLayout from "../../common/layout/v-menu.layout.html";
import taskDetailTemplate from "./template/task-detail.template.html";
import taskDetailController from "./js/task-detail.controller.js";


routes.$inject = ["$stateProvider"];
export default function routes ($stateProvider){
	$stateProvider.state("task", {
		url: "/task",
		template: VMenuLayout
	}).state("task.taskSearch", {
		url: "/taskSearch",
		template:TaskSearchTemplate,
		controller: TaskSearchController,
		controllerAs: '$ctrl'
	}).state("task.taskDetail", {
		url: "/taskDetail/:contactId",
		template: taskDetailTemplate,
		controller: taskDetailController,
		controllerAs: '$ctrl'
	}).state("task.matrix", {
		url: "/matrix",
		template:TaskMatrixTemplate,
		controller: TaskMatrixController,
		controllerAs: '$ctrl'
	}).state("task.desktop", {
			url: "/desktop",
			template:TaskdesktopTemplate,
			controller: TaskDesktopController,
			controllerAs: '$ctrl'
		});

};