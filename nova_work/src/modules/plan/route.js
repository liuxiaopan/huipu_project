import PlanSearchTemplate from "./templates/plan-search.template.html";
import PlanSearchController from "./js/plan-search.controller.js";
import PlanDetailTemplate from "./templates/plan-detail.template.html";
import PlanDetailController from "./js/plan-detail.controller.js";

import SectionSearchTemplate from "./templates/section-search.template.html";
import SectionSearchController from "./js/section-search.controller.js";
import SectionDetailTemplate from "./templates/section-detail.template.html";
import SectionDetailController from "./js/section-detail.controller.js";

import CaseSearchTemplate from "./templates/case-search.template.html";
import CaseSearchController from "./js/case-search.controller.js";
import CaseDetailTemplate from "./templates/case-detail.template.html";
import CaseDetailController from "./js/case-detail.controller.js";

import VMenuLayout from "../../common/layout/v-menu.layout.html";

routes.$inject = ["$stateProvider"];
export default function routes ($stateProvider){
	$stateProvider.state("plan", {
		url: "/plan",
		template: VMenuLayout
	}).state("plan.planSearch", {
		url: "/planSearch",
		template: PlanSearchTemplate,
		controller: PlanSearchController,
		controllerAs: '$ctrl'
	}).state("plan.planDetail", {
		url: "/planDetail/:contactId",
		template: PlanDetailTemplate,
		controller: PlanDetailController,
		controllerAs: '$ctrl'
	}).state("plan.sectionSearch", {
		url: "/sectionSearch",
		template: SectionSearchTemplate,
		controller:SectionSearchController,
		controllerAs: '$ctrl'
	}).state("plan.sectionDetail", {
		url: "/sectionDetail/:contactId",
		template: SectionDetailTemplate,
		controller: SectionDetailController,
		controllerAs: '$ctrl'
	}).state("plan.caseSearch", {
		url: "/caseSearch",
		template: CaseSearchTemplate,
		controller:CaseSearchController,
		controllerAs: '$ctrl'
	}).state("plan.caseDetail", {
		url: "/caseDetail/:contactId",
		template: CaseDetailTemplate,
		controller: CaseDetailController,
		controllerAs: '$ctrl'
	})

};