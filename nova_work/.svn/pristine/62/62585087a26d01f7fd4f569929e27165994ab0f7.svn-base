/**
 * Created by Administrator on 2016/12/23.
 */
export default class CommonService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
    this.partUrl = "http://172.17.5.55:9001/api";
    this.postCfg = {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function (data) {
        return $.param(data);
      }
    };
  }

  postData(url, objInfo) {
    var postCfg = this.postCfg;
    var resUrl = this.partUrl + url;
    console.log(resUrl);
    var deferred = this.$q.defer();
    this.$http.post(resUrl, objInfo, postCfg).success(function (res) {
      return deferred.resolve(res);
    }).error(function () {
      deferred.reject("can not get the data requested");
    });
    return deferred.promise;
  }

  getData(url, responseId) {
    if ((typeof responseId) == "object") {
      var resUrl = this.partUrl + url;
      var count = 0;
      for (var key in responseId) {
        count++;
        console.log("demo", count, responseId.length - 1);
        if (count < responseId.totalArg) {
          resUrl += key + "=" + responseId[key] + "&"
        } else if (count == responseId.totalArg) {
          resUrl += key + "=" + responseId[key];
        } else {
          break;
        }
      }
      console.log(resUrl);
    } else {
      var resUrl = this.partUrl + url + responseId;
    }
    var deferred = this.$q.defer();
    this.$http.get(resUrl).success(function (res) {
      return deferred.resolve(res.Data);
    });

    return deferred.promise;
  }

  getDemoData(url) {
    var deferred = this.$q.defer();
    this.$http.get(url).success(function (res) {
      return deferred.resolve(res.Data);
    });

    return deferred.promise;
  }
}

CommonService.$inject = ["$http", "$q"];