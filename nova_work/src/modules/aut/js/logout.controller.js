//
export default class LoginController {
	constructor(AUTService, $state, $rootScope){
		this.AUTService = AUTService;
		this.$state = $state;
		this.$rootScope = $rootScope;

		this.doLogout();
	}

	doLogout(){
		var self = this;
		this.AUTService.logout().then(function ( res ) {
	        if (res.success === 1) {
	        	self.$rootScope.isLogedIn = false;
	        	self.$state.go("login");
	        } else {
	        	self.loginError = "Logout Failed!!!";
	        }
	    });
	}
}
LoginController.$inject = ["AUTService", "$state", "$rootScope"];