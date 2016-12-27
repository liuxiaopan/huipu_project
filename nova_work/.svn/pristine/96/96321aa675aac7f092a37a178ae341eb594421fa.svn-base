export default class SearchService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
    this.postCfg = {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function (data) {
        return $.param(data);
      }
    };
  }

  searchPlans(filter, callback) {
    var deferred = this.$q.defer();
    this.$http.post('http://172.17.5.55:9001/api/PlanAPI/Search', filter, this.postCfg).success(function (res) {
      // console.log(res);
      callback.onSuccess(res)
    });
    return deferred.promise;
  }
}
SearchService.$inject = ["$http", "$q"];