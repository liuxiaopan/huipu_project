export default class createNewPlanController{
  constructor($uibModalInstance, items){
    this.$uibModalInstance = $uibModalInstance;

    this.items = items;

    var self = this;

    this.addPlanInfo = {
      Name: "",
      Description: "",
      ChangeLog: "",
      CategoryId: ""
    };

    // $uibModalInstance.rendered is the promise object
    this.$uibModalInstance.rendered.then(function(){
      $('#addPlanTree').treeview({
        data: self.items.treeData,
        levels: 1,
        onNodeSelected: function(event, data) {
          self.addPlanInfo.CategoryId = data.ID;
        }
        ,
        onNodeUnselected: function (event, data) {
          self.addPlanInfo.CategoryId = "";
        }
      });

    });
  }

  ok () {
    this.$uibModalInstance.close(this.addPlanInfo);
  }
  cancel() {
    this.$uibModalInstance.dismiss('cancel')
  }
}

createNewPlanController.$inject = ["$uibModalInstance", "items"];
