//
export default class AutService{
	constructor($http, $q, $cookies){
		this.$http = $http;
		this.$q = $q;
		this.$cookies = $cookies;
	}

	isLogin() {
		if(this.$cookies.get("IS_LOGED_IN") === 'true'){
			return true;
		}
		return false;
	}

	logout () {
		var self = this, remoteAPIUrl = "/restAPI/user/logout";
      	var deferred = this.$q.defer();

      	self.$cookies.remove('IS_LOGED_IN');
      	deferred.resolve({success: 1});
		return deferred.promise;
      	
      	$http.get(remoteAPIUrl).success(function(res) {
        	self.$cookies.remove('IS_LOGED_IN');
        	return deferred.resolve(res);
      	});
      	return deferred.promise;
    }

	login(loginName, loginPassword){
		var self = this, remoteAPIUrl = "/src/modules/Jsons/user.json";
		var deferred = this.$q.defer();

		self.$cookies.put('IS_LOGED_IN', 'true');
		deferred.resolve({success: 1});
		return deferred.promise;

		this.$http.get(remoteAPIUrl).success(function(res){
			console.log(res);
			if(res.status=="ok"){
console.log(res.users.loginName + "=" + loginName);
				console.log(res.users.loginPassword + "=" + loginPassword)
				if(res.users.loginName==loginName && res.users.loginPassword==loginPassword){
					self.$cookies.put('IS_LOGED_IN', 'true');
					return deferred.resolve(res);
				}
			}
		});
		return deferred.promise;

	}
}
AutService.$inject = ["$http", "$q", "$cookies"];