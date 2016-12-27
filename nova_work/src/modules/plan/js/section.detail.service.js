/**
 * Created by LiuPan on 2016/10/20.
 */
export default class PlanDetailService {
  constructor(CommonService) {

    this.CommonService = CommonService;
  }

  getSection(contactId) {
    return this.CommonService.getData('/SectionAPI/GetSection?SectionId=', contactId);
  }

  getPlanOwner() {
    return this.CommonService.getDemoData("/src/modules/Jsons/owners.json");
  }

  getCases(data) {
    return this.CommonService.postData('/SectionAPI/GetCases', data);
  }

  getFamily(data) {
    return this.CommonService.postData('/SectionAPI/GetFamily', data);
  }

  getPlans(data) {
    return this.CommonService.postData('/SectionAPI/GetPlans', data);
  }


  
  getTreeView() {
    //var planId = '160100010001';
    return this.CommonService.getData('/PlanAPI/GetPlanTree?planId=', planId);
  }

  publishPlan(planId) {
    return this.CommonService.getData('/SectionAPI/Publish?SectionId=', planId);

  }

  revokePlan(planId) {
    return this.CommonService.getData('/SectionAPI/Revoke?SectionId=', planId);
  }

  upgradePlan(planId) {
    return this.CommonService.getData('/SectionAPI/Upgrade?SectionId=', planId);
  }

  deletePlan(planId) {
    return this.CommonService.getData('/SectionAPI/Delete?SectionId=', planId);
  }

  copyPlan(planId) {
    return this.CommonService.getData('/SectionAPI/Copy?SectionId=', planId);
  }

  //service for change owner, editor, apporover, category

  changeOwner(planId, userId) {
    var responseIdObj = {
      "planId": planId,
      "userId": userId,
      "totalArg": 2
    };
    return this.CommonService.getData('/PlanAPI/ChangeOwner?', responseIdObj);
  }

  changeEditor(planId, userId) {
    var responseIdObj = {
      "planId": planId,
      "userId": userId,
      "totalArg": 2
    };
    return this.CommonService.getData('/PlanAPI/ChangeEditor?', responseIdObj);
  }

  changeCategory(planId, categoryId) {
    var responseIdObj = {
      "planId": planId,
      "categoryId": categoryId,
      "totalArg": 2
    };
    return this.CommonService.getData('/PlanAPI/ChangeEditor?', responseIdObj);
  }
}
PlanDetailService.$inject = ["CommonService"];