import angular from 'angular';
import routing from './route.js';
import planService from './js/plan.service.js';
import planDetailService from './js/plan.detail.service.js';
import CreateModal from '../../utils/modal/modal.service.js';
import SectionService from './js/section.service.js';
import SectionDetailService from './js/section.detail.service.js';
import CaseService from './js/case.service.js';
import CaseDetailService from './js/case.detail.service.js';
import CommonService from '../../utils/common.service.js';

export default angular.module("nova.plan", [])
.config(routing)
.service("PlanService", planService)
.service("PlanDetailService", planDetailService)
.service("CreateModal", CreateModal)
  .service("CommonService", CommonService)
.service("SectionService", SectionService)
.service("SectionDetailService", SectionDetailService)
.service("CaseService", CaseService)
.service("CaseDetailService", CaseDetailService)
.name;