/**
 * Created by Jeff on 12/7/16.
 */


export default class categoryController{
  constructor($uibModalInstance, items){
    this.$uibModalInstance = $uibModalInstance;

    this.items = items;

    var self = this;

    this.CategoryId = "";


    this.$uibModalInstance.rendered.then(function(){
      $('#addPlanTree').treeview({
        data: self.items.treeData,
        levels: 1,
        onNodeSelected: function(event, data) {
          self.CategoryId = data.ID;
        }
        ,
        onNodeUnselected: function (event, data) {
          self.CategoryId = "";
        }
      });
    });
  }

  ok () {
    this.$uibModalInstance.close(this.CategoryId);
  }
  cancel() {
    this.$uibModalInstance.dismiss('cancel')
  }
}

categoryController.$inject = ["$uibModalInstance", "items"];
