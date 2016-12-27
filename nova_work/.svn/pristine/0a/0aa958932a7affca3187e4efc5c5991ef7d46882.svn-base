/**
 * Created by Jeff on 12/7/16.
 */


export default class createNewPlanController{
  constructor($uibModalInstance, items,$http,$q){
    this.$uibModalInstance = $uibModalInstance;
    this.items = items;
    this.$http = $http;
    this.$q = $q;

    this.maxSize = 6;
    this.postInfo = {PageId:1, PageLimit:10};

    this.postCfg = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      transformRequest: function (data) {
        return $.param(data);
      }
    };
    this.getUsers();
  }

  getUsers() {
    var self = this;
    this.$http.post('http://172.17.5.55:9001/api/UserAPI/Search', this.postInfo, this.postCfg).success(function(res){
      self.users = res.Data.Models;
      self.users.totalItems = res.Data.TotalCount;
    });
  }
  pageChanged () {
    this.getUsers();
  }
  radioCheck(name) {
    //console.log(name)
    this.checkedId = name;
  }

  ok () {
    this.$uibModalInstance.close(this.checkedId);
  }
  cancel() {
    this.$uibModalInstance.dismiss('cancel')
  }
}

createNewPlanController.$inject = ["$uibModalInstance", "items", "$http", "$q"];
