import modalCtrl from '../../../../utils/modal/js/single.search.controller.js';
import changePlanTemplateUrl from '../../../../utils/modal/templates/single.search.template.html';
require("../template/task-add-new-task.template.css");

export default class createNewTaskController {
  constructor($uibModalInstance, CreateModal, $rootScope, items) {
    this.$rootScope = $rootScope;
    this.$uibModalInstance = $uibModalInstance;
    this.CreateModal = CreateModal;
    this.modal = {
      treeData: "",
      title: "Change Plan"
    };
    this.items = items;

    var self = this;

    this.addNewTaskInfo = {
      Name: "",
      Description: "",
      TouchType: 0,
      StartTime: "",
      EndTime: "",
      PlanId: "",
      PlanName: "",
      Status: "",
      Target: "",
      TestingSiteId: "",
      TestLead: "",
      Keyword: "",
      task_total_onduty: "",
      task_total_onduty_nobody: ""
    };
  }

  ok() {
    this.$uibModalInstance.close(this.addNewTaskInfo);
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }

  openChangePlanModal() {
    var self = this;
    this.CreateModal.openModal(true, changePlanTemplateUrl, modalCtrl, 'lg', this.modal).result.then(function (result) {
      self.addNewTaskInfo.PlanId = result.ID;
      self.addNewTaskInfo.PlanName = result.Name;
    });
  }

}

createNewTaskController.$inject = ["$uibModalInstance", "CreateModal", "$rootScope", "items"];

