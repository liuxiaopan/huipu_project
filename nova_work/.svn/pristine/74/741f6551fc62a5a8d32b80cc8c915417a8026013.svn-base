import UserCtrl from './user.controller.js'
import CategoryCtrl from './category.controller.js'
import modalCtrl from './plan-add-new.controller.js'

import UserTemplate from '../templates/user.template.html'
import CategoryTemplate from '../templates/category.template.html'
import PlanAddNewSection from '../templates/plan-add-new.template.html'
require("../templates/plan-detail.template.css");


export default class SectionDetailController {
  constructor(SectionDetailService,CaseService, CreateModal, $rootScope, $stateParams, $state, $http,$q) {
    this.SectionDetailService = SectionDetailService;
    this.CaseService = CaseService
    this.CreateModal = CreateModal;
    this.$rootScope = $rootScope;
    this.$stateParams = $stateParams;
    console.log(this.$stateParams)
    this.$state = $state;
    this.$http = $http;
    this.$q = $q;
    this.odmList = ["test1", "test2"];
    this.statusList = [1, 2, 3, 4];
    this.getSectionInfo();
    this.current = 0;
    this.selectOwner = null;
    //this.getSelectOwner();
    this.$rootScope.$watch("selectOwner", function (newValue, oldValue, scope) {
      //console.log(newValue);
    });
    // Pagination
    this.maxSize = 6;

    this.caseRequest = {
      SectionId: "16010000010001",
      OrderByItems: [{"ColumnName": "ID", "OrderBy": 1}],
      PageId: 1,
      PageLimit: 10
    };
    this.familyRequest = {
      SectionId: "16010000010001",
      OrderByItems: [{"ColumnName": "ID", "OrderBy": 1}],
      PageId: 1,
      PageLimit: 10
    };
    this.planRequest = {
      SectionId: "16010000010001",
      OrderByItems: [{"ColumnName": "ID", "OrderBy": 1}],
      PageId: 1,
      PageLimit: 10
    };

    this.statusList = {
      0: "New",
      1: "Submitted",
      2: "Rejected",
      3: "Approved",
      10: "Published",
      11: "Revoked"
    };

    this.actionList = {
      Edit: "glyphicon-edit",
      Submit: "glyphicon-ok",
      Copy: "glyphicon-file",
      Delete: "glyphicon-remove-circle",
      Upgrade: "glyphicon glyphicon-upload"
    };
    this.modal = {
      treeData: "",
      title: "Add Case"
    };
  }

  show(index) {
    this.current = index;
  }


  getSectionInfo() {
    var self = this;
    self.SectionDetailService.getSection(this.$stateParams.contactId).then(function (res) {
      self.sectionInfo = res;
      console.log(res)
    });
  }

  getCategory() {
    var deferred = this.$q.defer();
    var self = this;
    this.$http.get("http://172.17.5.55:9001/api/CategoryAPI/GetCategoryRoot").success(function (data) {
      var tree = data.Data.Children;
      self.modal.treeData = formatData(tree);
      return deferred.resolve(self.modal);

      function formatData(cur) {
        var treeF = [];
        var reg = new RegExp("Name", "g"), reg2 = new RegExp("Children", "g");
        for (var i = 0; i < cur.length; i++) {
          var curStr = JSON.stringify(cur[i]);
          curStr = curStr.replace(reg, "text").replace(reg2, "nodes");
          var curObj = JSON.parse(curStr);
          treeF.push(curObj);
        }
        return treeF;
      }
    });
    return deferred.promise;
  }

  getCasesInfo() {
    var self = this;
    self.SectionDetailService.getCases(this.caseRequest).then(function (res) {
      self.cases = res.Models;
      console.log(res)
      self.cases.totalItems = res.TotalCount;
    });
  }

  casePageChanged() {
    console.log('Page changed to: ' + this.caseRequest.PageId);
    this.getCasesInfo();
  }

  getFamilyInfo() {
    var self = this;
    self.SectionDetailService.getFamily(this.familyRequest).then(function (res) {
      self.family = res.Models;
      self.family.totalItems = res.TotalCount;
    });
  }

  familyPageChanged() {
    console.log('Page changed to: ' + this.familyRequest.PageId);
    this.getFamilyInfo();
  }

  getPlansInfo() {
    var self = this;
    self.SectionDetailService.getPlans(this.planRequest).then(function (res) {
      self.plans = res.Models;
      self.plans.totalItems = res.TotalCount;
    });
  }
  planPageChanged() {
    console.log('Page changed to: ' + this.planRequest.PageId);
    this.getPlansInfo();
  }

  getTreeViewInfo() {
    var self = this;
    self.SectionDetailService.getTreeView().then(function (res) {
      self.treeViewData = res;
    });
  }


  //modal

  openModal(type) {
    var self = this;
    var userTemplate = '/src/modules/plan/templates/user.template.html';
    var cateGoryTemplate = '/src/modules/plan/templates/category.template.html';
    if (type !== 'Category') {
      this.CreateModal.openModal(true, UserTemplate, UserCtrl, 'md', type).result.then(function (result) {
        self.SectionDetailService["change" + type](self.$stateParams.contactId, result).then(function (res) {
          self.sectionInfo[type + "Name"] = res[type + "Name"];
        });
      })
    }
    else {
      this.getCategory().then(function (res) {
        self.CreateModal.openModal(true, CategoryTemplate, CategoryCtrl, 'md', res).result.then(function (result) {
          self.SectionDetailService.changeCategory(self.$stateParams.contactId, result).then(function (res) {
            self.sectionInfo.CategoryName = res.CategoryName;
          });
        })
      })

    }
  }

  openCreateCaseModal() {
    var self = this;
    this.getCategory().then(function (res) {
      self.CreateModal.openModal(true, PlanAddNewSection, modalCtrl, 'lg', res).result.then(function (result) {
        self.addNewCase(result);
      })
    })
  }

  addNewCase(request) {
    var self = this;
    this.CaseService.addCase(request).then(function (res) {
      self.$state.go('plan.caseDetail', {contactId: res.Data.ID});
    })
  }

  // The functionality of btn group

  btnClick(btnType) {
    var executeFunctionName = btnType + "SectionInfo";
    this[executeFunctionName]();
  }


  PublishSectionInfo() {
    var self = this;
    self.SectionDetailService.publishPlan(this.$stateParams.contactId).then(function (res) {
      self.sectionInfo = res;
    })
  }

  RevokeSectionInfo() {
    var self = this;
    self.SectionDetailService.revokePlan(this.$stateParams.contactId).then(function (res) {
      console.log(res)
      self.sectionInfo = res;
    })
  }

  UpgradeSectionInfo() {
    var self = this;
    self.SectionDetailService.upgradePlan(this.$stateParams.contactId).then(function (res) {
      window.open("#/plan/sectionDetail/" + res.ID)
    })
  }

  DeleteSectionInfo() {
    var self = this;
    self.SectionDetailService.deletePlan(this.$stateParams.contactId).then(function () {
      self.$state.go("plan.sectionSearch");
    });
  }

  CopySectionInfo() {
    //this.$state.go('plan');
    var self = this;
    self.SectionDetailService.copyPlan(this.$stateParams.contactId).then(function (res) {
      window.open("#/plan/sectionDetail/" + res.ID)
    })
  }

  tasksSearch() {
    console.log(this.filter)
  }

  addTreeItem(item) {
    var addData = {
      "Name": "test2"
    };
    if (item) {
      if (typeof(item.Children) == "undefined") item.Children = [];
      item.Children.push(addData)
    } else {
      this.treeViewData.Children.push(addData)
    }
  }

  deleteTreeItem(key, list) {
    list.splice(key, 1);
  }
}
SectionDetailController.$inject = ["SectionDetailService","CaseService", "CreateModal", "$rootScope", "$stateParams", "$state", "$http","$q"];
