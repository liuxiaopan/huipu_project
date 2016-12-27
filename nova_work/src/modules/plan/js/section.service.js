//
export default class SectionService{
	constructor($http, $q, CommonService) {
		this.$http = $http;
		this.$q = $q;
		this.CommonService = CommonService;
	}

	addSection(info) {
		return this.CommonService.postData('/SectionAPI/AddSection', info)
	}
	
  AddSectionInPlan(planId) {
	  var deferred = this.$q.defer();
	  this.$http.get('http://172.17.5.55:9001/api/SectionAPI/AddSectionInPlan?planId=' + planId).success(function (res) {
      return deferred.resolve(res.Data);
    });

    return deferred.promise;
  }

	searchSections(filter) {
		return this.CommonService.postData('/SectionAPI/Search', filter);
	}
}
SectionService.$inject = ["$http", "$q", "CommonService"];