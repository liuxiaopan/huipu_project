
export default class modalService{
  constructor($uibModal){
    this.$uibModal = $uibModal;
  }

  openModal (animationsEnabled, template, controller, size, data) {
    data = data || "";
    var modalInstance = this.$uibModal.open({
      animation: animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      template: template,
      controller: controller,
      controllerAs: '$ctrl',
      size: size,
      resolve: {
        items: function () {
          return data;
        }
      }
    });

    return modalInstance;

  }


}
modalService.$inject = ["$uibModal"];