/**
 * Created by LiuPan on 2016/10/20.
 */
export default class PlanDetailService{
  constructor(CommonService) {
    this.CommonService = CommonService;
    }

    getPlan(contactId){
      return this.CommonService.getData('/PlanAPI/GetPlan?planId=', contactId);
    }
    getPlanOwner(){
      return this.CommonService.getDemoData("/src/modules/Jsons/owners.json");
    }
    getSections(data) {
      return this.CommonService.postData('/PlanAPI/GetSections', data);
    }
    getFamily(data) {
      return this.CommonService.postData('/PlanAPI/GetFamily', data);
    }
    getTasks(data) {
      return this.CommonService.postData('/PlanAPI/GetTasks', data);
    }

    getTreeView(planId){
      // planId = '160100010001';
      return this.CommonService.getData('/PlanAPI/GetPlanTree?planId=', planId);
    }

    

    submitPlan(planId) {
      return this.CommonService.getData('/PlanAPI/Submit?planId=', planId);
    }
    approvePlan(planId) {
      return this.CommonService.getData('/PlanAPI/Approve?planId=', planId);
    }
    publishPlan(planId) {
      return this.CommonService.getData('/PlanAPI/Publish?planId=', planId);
    }
    rejectPlan(planId) {
      return this.CommonService.getData('/PlanAPI/Reject?planId=', planId);
    }
    revokePlan(planId) {
      return this.CommonService.getData('/PlanAPI/Revoke?planId=', planId);
    }

    upgradePlan(planId) {
      return this.CommonService.getData('/PlanAPI/Upgrade?planId=', planId);
    }
    deletePlan(planId) {
      return this.CommonService.getData('/PlanAPI/Delete?planId=', planId);
    }
    copyPlan(planId) {
      console.log(planId);
      return this.CommonService.getData('/PlanAPI/Copy?planId=', planId);
    }

    //service for change owner, editor, apporover, category

    changeOwner(planId, userId) {
      var responseIdObj = {
        "planId": planId,
        "userId": userId,
        "totalArg": 2
      };
      return this.CommonService.getData('/PlanAPI/Copy?', responseIdObj);
    }
    changeEditor(planId, userId) {
      var responseIdObj = {
        "planId": planId,
        "userId": userId,
        "totalArg": 2
      };
      return this.CommonService.getData('/PlanAPI/ChangeEditor?', responseIdObj);
    }
    changeApprover(planId, userId) {
      var responseIdObj = {
        "planId": planId,
        "userId": userId,
        "totalArg": 2
      };
      return this.CommonService.getData('/PlanAPI/ChangeApprover?', responseIdObj);
    }
    changeCategory(planId, categoryId) {
      var responseIdObj = {
        "planId": planId,
        "userId": categoryId,
        "totalArg": 2
      };
      return this.CommonService.getData('/PlanAPI/ChangeCategory?', responseIdObj);
    }
}
PlanDetailService.$inject = ["CommonService"];