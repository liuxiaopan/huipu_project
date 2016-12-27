require("../template/task-detail.template.css");


export default class taskDetailController {
    constructor(PlanDetailService, TaskService, $rootScope, $stateParams, $state) {
        this.PlanDetailService = PlanDetailService;
        this.TaskService = TaskService;
        this.$rootScope = $rootScope;
        this.$stateParams = $stateParams;
        this.$state = $state;
        this.getTaskInfo();
        this.current = 0;
        this.$rootScope.$watch("selectOwner", function (newValue, oldValue, scope) {
        });


        //matrix page
        this.selects = [1, 2, 3, 4, 5];
        this.selectedName = this.selects[0];
        this.getInstanceInfo();
        this.showCase = true;
        this.showCtrlBtn = true;
        this.showCases();
        this.param = {
            SectionPackageIds: "",
            CasePackageIds: ""
        };
        this.rowSelected = [];
        this.rowCtrlIndex = [];
        this.PackageId = 0;
        this.flagCheck = false;
      this.isDisabled = true;//edit button uses this variable control the editable input
      this.taskEditInfo = {};//via check-variable directive, get the changed infomation by user

    }

    show(index) {
        this.current = index;
    }


    getTaskInfo() {
        var self = this;
        self.TaskService.getTaskInfo(this.$stateParams.contactId).then(function (res) {
            self.taskInfo = res;
          self.taskName = self.taskInfo.Name;
          self.taskDescription = self.taskInfo.Description;
          self.taskTouchType = self.taskInfo.TouchType;
          self.StartTime = self.taskInfo.StartTime;
          self.EndTime = self.taskInfo.EndTime;
          self.Keyword = self.taskInfo.Keyword;
          self.task_total_onduty = self.taskInfo.task_total_onduty;
          self.task_total_onduty_nobody = self.taskInfo.task_total_onduty_nobody;
        });
    }

  submitInfo(btnText) {
    if (btnText == "Edit") {
      this.taskEditInfo = {};
      this.taskEditInfo.ID = this.taskInfo.ID;
      this.isDisabled = false;
    }
    if (btnText == "Save") {
      var self = this;
      this.isDisabled = true;
      if (self.taskName != self.taskInfo.Name) {
        this.taskEditInfo.Name = self.taskInfo.Name
      }
      if (self.taskDescription != self.taskInfo.Description) {
        this.taskEditInfo.Description = self.taskInfo.Description;
      }
      if (self.taskTouchType != self.taskInfo.TouchType) {
        this.taskEditInfo.TouchType = self.taskInfo.TouchType;
      }
      if (self.StartTime != self.taskInfo.StartTime) {
        this.taskEditInfo.StartTime = self.taskInfo.StartTime;
      }
      if (self.EndTime != self.taskInfo.EndTime) {
        this.taskEditInfo.EndTime = self.taskInfo.EndTime;
      }
      if (self.Keyword != self.taskInfo.Keyword) {
        this.taskEditInfo.Keyword = self.taskInfo.Keyword;
      }
      if (self.task_total_onduty != self.taskInfo.task_total_onduty) {
        this.taskEditInfo.task_total_onduty = self.taskInfo.task_total_onduty
      }
      if (self.task_total_onduty_nobody != self.taskInfo.task_total_onduty_nobody) {
        this.taskEditInfo.task_total_onduty_nobody = self.taskInfo.task_total_onduty_nobody;
      }
      self.TaskService.saveTaskInfo(this.taskEditInfo).then(function (res) {
        self.taskInfo = res.Data;
      });
    }
    if (btnText == "Send") {
      var self = this;
      this.isDisabled = true;
      self.TaskService.sendTaskInfo(this.taskInfo.ID).then(function (res) {
        self.taskInfo = res;
      });
    }
    if (btnText == "complete") {
      var self = this;
      this.isDisabled = true;
      self.TaskService.sendTaskInfo(this.taskInfo.ID).then(function (res) {
        self.taskInfo = res;
      });
    }
    if (btnText == "Pasuse") {
      var self = this;
      this.isDisabled = true;
      self.TaskService.sendTaskInfo(this.taskInfo.ID).then(function (res) {
        self.taskInfo = res;
      });
    }
    if (btnText == "Cancel") {
      var self = this;
      this.isDisabled = true;
      self.TaskService.sendTaskInfo(this.taskInfo.ID).then(function (res) {
        self.taskInfo = res;
      });
    }
    if (btnText == "Resume") {
      var self = this;
      this.isDisabled = true;
      self.TaskService.sendTaskInfo(this.taskInfo.ID).then(function (res) {
        self.taskInfo = res;
      });
    }
  }

    // The functionality of btn group


    deletePlanInfo() {
        var self = this;
        self.PlanDetailService.deletePlan(this.$stateParams.contactId).then(function () {
            self.$state.go("task.taskSearch");
        });
    }

    copyPlanInfo() {
        var self = this;
        self.PlanDetailService.copyPlan(this.$stateParams.contactId).then(function (res) {
            window.open("#/plan/planDetail/" + res.ID)
        })
    }

    tasksSearch() {
        // console.log(this.taskInfo)
    }


    //mtrix function
    showCases(secId, index) {
        //控制section下的cases显示与否
        this.index = index;
        this.secId = secId;
        this.showCase = !this.showCase;
        this.showCtrlBtn = !this.showCtrlBtn;
    }

    getInstanceInfo() {
        //获取matrixData
        var self = this;
        self.TaskService.getInstances().then(function (res) {
            self.instances = res.InstanceList;
            self.SectionTree = res.SectionTree;
            self.PackageList = res.PackageList;
        });

    }

    getId(SectionTreeID) {
        var params = {
            sectionPackageIds: [],
            casePackageIds: []
        }
        for (var i = 0; i < this.PackageList.length; i++) {
            var curPackage = this.PackageList[i];
            for (var j = 0; j < curPackage.length; j++) {
                var cur = curPackage[j];
                if (cur.ID == SectionTreeID) {
                    this.PackageId++;
                    var curString = cur.PackageId + "";
                    if (cur.PackageType == "S" && this.param.SectionPackageIds.indexOf(curString)) {
                        params.sectionPackageIds.push(curString);
                    }
                    if (cur.PackageType == "C") {
                        params.casePackageIds.push(curString);
                    }
                }
            }
        }
        var secIds = params.sectionPackageIds.join(","), caseIds = params.casePackageIds.join(",");
        var Ids = {
            secIds: secIds,
            caseIds: caseIds
        }
        return Ids;
    }

    rowCtrlFunc(SectionTreeID, rowIndex) {
        var ids = this.getId(SectionTreeID);
        this.secId = SectionTreeID;
        if (this.rowSelected.indexOf(SectionTreeID) <= -1) {
            this.rowSelected.push(SectionTreeID);
            this.SectionTree[rowIndex].checkItem = true;
            if (ids.secIds.length > 0) {
                this.param.SectionPackageIds.length == 0 ? this.param.SectionPackageIds = ids.secIds : this.param.SectionPackageIds += ("," + ids.secIds);
            }
            if (ids.caseIds.length > 0) {
                this.param.CasePackageIds.length == 0 ? this.param.CasePackageIds = ids.caseIds : this.param.CasePackageIds += ("," + ids.caseIds);
            }
            this.rowCtrlIndex[rowIndex] = 1;
        } else {
            this.SectionTree[rowIndex].checkItem = false;
            var regSec = new RegExp("(,?)" + ids.secIds + "(,?)"), regCase = new RegExp("(,?)" + ids.caseIds + "(,?)");
            this.rowSelected.splice(this.rowSelected.indexOf(SectionTreeID), 1);
            this.param.SectionPackageIds = this.param.SectionPackageIds.replace(regSec, "");
            this.param.CasePackageIds = this.param.CasePackageIds.replace(regCase, "");
        }
    }


    getFinalParams() {

        if (this.param.SectionPackageIds == "" && this.param.CasePackageIds == "") {
            alert("please select one");
            console.log(this.param);
        } else {
            alert("ok");
            console.log(this.param);
        }
    }

  //click events for button group in task detail


}
taskDetailController.$inject = ["PlanDetailService", "TaskService", "$rootScope", "$stateParams", "$state"];
