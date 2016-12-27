//
export default class PlanService{
  constructor(CommonService) {
    this.CommonService = CommonService;
	}

	addPlan(info) {
    return this.CommonService.postData('/PlanAPI/AddPlan', info);
	}


  searchPlans(filter) {
    return this.CommonService.postData('/PlanAPI/Search', filter);
	}

	//The services of actions

	editPlan(planId) {
    return this.CommonService.getData('/PlanAPI/Edit?planId=', planId);
	}
	submitPlan(planId) {
    return this.CommonService.getData('/PlanAPI/Submit?planId=', planId);

	}
	rejectPlan(planId) {
    return this.CommonService.getData('/PlanAPI/Reject?planId=', planId);
	}
	approvePlan(planId) {
    return this.CommonService.getData('/PlanAPI/Approve?planId=', planId);

	}
	publishPlan(planId) {
    return this.CommonService.getData('/PlanAPI/Publish?planId=', planId);
	}
	revokePlan(planId) {
    return this.CommonService.getData('/PlanAPI/Revoke?planId=', planId);
	}

}
PlanService.$inject = ["CommonService"];