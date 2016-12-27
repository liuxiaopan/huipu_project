require("../templates/single.search.template.css");

export default class SearchController {
  constructor($uibModalInstance, SearchService, CreateModal, $http, $state, items) {
    this.$uibModalInstance = $uibModalInstance;
    this.CreateModal = CreateModal;
    this.$http = $http;
    this.$state = $state;
    this.SearchService = SearchService;
    this.CreateModal = CreateModal;
    this.items = items;

    this.ownerList = ["User1", "User2"];
    this.editorList = ["User1", "User2"];
    this.approverList = ["User1", "User1"];

    this.statusArray = [];
    this.statusKeyArray = [];
    // the model of status input box
    this.statusName = "";
    this.statusList = [
      {"status": "New", "key": 0},
      {"status": "Submitted", "key": 1},
      {"status": "Rejected", "key": 2},
      {"status": "Approved", "key": 3},
      {"status": "Published", "key": 10},
      {"status": "Revoked", "key": 11}
    ];

    this.actionList = {
      Edit: "glyphicon-edit",
      Submit: "glyphicon-ok",
      Copy: "glyphicon-file",
      Delete: "glyphicon-remove-circle",
      Upgrade: "glyphicon glyphicon-upload"
    }

    // Pagination
    this.maxSize = 6;

    //search filter list
    this.filter = {
      CategoryId: "",
      ID: "",
      Name: "",
      Status: "",
      EditorId: "",
      OwnerId: "",
      ApproverId: "",
      DisplayAll: false,
      OrderByItems: [
        {"ColumnName": "ID", "OrderBy": 1}
      ],
      PageId: 1,
      PageLimit: 10
    }

  }

  getSearchInfo() {
    this.resultDidMount = true;
    var self = this;
    self.SearchService.searchPlans(this.filter, {
      onSuccess: function (res) {
        self.plans = res.Data.Models;
        self.totalItems = res.Data.TotalCount;
      }
    })
  }

  selectNewPlan(newPlan) {
    this.selectedPlan = newPlan;

  }

  ok() {
    this.$uibModalInstance.close(this.selectedPlan);
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel')
  }
}
SearchController.$inject = ["$uibModalInstance", "SearchService", "CreateModal", "$http", "$state", "items"];