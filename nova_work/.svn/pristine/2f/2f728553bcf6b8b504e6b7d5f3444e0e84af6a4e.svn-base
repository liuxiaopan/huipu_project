/**
 * Created by LiuPan on 2016/10/20.
 */
export default class CaseDetailService{
  constructor(CommonService) {
    this.CommonService = CommonService;
    }

    getCase(contactId){
      return this.CommonService.getData('/CaseAPI/GetCase?caseId=', contactId);
    }
    getPlanOwner(){
      return this.CommonService.getDemoData('/src/modules/Jsons/owners.json');
    }
    getCases(data) {
      return this.CommonService.postData('/SectionAPI/GetCases', data);
    }
    getFamily(data) {
      return this.CommonService.postData('/CaseAPI/GetFamily', data);
    }
    getPlans(data) {
      return this.CommonService.postData('/SectionAPI/GetPlans', data);
    }

    getTreeView(){
      var planId = '160100010001';
      return this.CommonService.getData('http://172.17.5.55:9001/api/PlanAPI/GetPlanTree?planId=', planId);
    }
    submitCase(id) {
      return this.CommonService.getData('http://172.17.5.55:9001/api/CaseAPI/Submit?caseId=', id);
    }

    publishCase(id) {
      return this.CommonService.getData('http://172.17.5.55:9001/api/CaseAPI/Publish?caseId=', id);
    }

    upgradeCase(id) {
      return this.CommonService.getData('http://172.17.5.55:9001/api/CaseAPI/Upgrade?caseId=', id);
    }
    deleteCase(id) {
      return this.CommonService.getData('http://172.17.5.55:9001/api/CaseAPI/Delete?caseId=', id);
    }
    copyCase(id) {
      return this.CommonService.getData('http://172.17.5.55:9001/api/CaseAPI/Copy?caseId=', id);
    }

    //service for change owner, editor, apporover, category

    changeOwner(caseId, userId) {
      var responseIdObj = {
        "caseId": caseId,
        "userId": userId,
        "totalArg": 2
      };
      return this.CommonService.getData('/CaseAPI/ChangeOwner?', responseIdObj);
    }
    changeEditor(caseId, userId) {
      var responseIdObj = {
        "caseId": caseId,
        "userId": userId,
        "totalArg": 2
      };
      return this.CommonService.getData('/CaseAPI/ChangeEditor?', responseIdObj);
    }
    changeCategory(caseId, categoryId) {
      var responseIdObj = {
        "caseId": caseId,
        "categoryId": categoryId,
        "totalArg": 2
      };
      return this.CommonService.getData('/CaseAPI/ChangeCategory?', responseIdObj);
    }
}
CaseDetailService.$inject = ["CommonService"];