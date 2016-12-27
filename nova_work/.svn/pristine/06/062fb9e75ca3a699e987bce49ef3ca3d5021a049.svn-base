//
export default class SectionService{
  constructor(CommonService) {
    this.CommonService = CommonService;
	}

	addCase(info) {
    return this.CommonService.postData('/PlanAPI/AddPlan', info);
	}


  searchCases(filter) {
    return this.CommonService.postData('/PlanAPI/AddPlan', filter);
	}
}
SectionService.$inject = ["CommonService"];