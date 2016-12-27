//
export default class LoginController {
	constructor(AUTService, $state, $rootScope){
		this.AUTService = AUTService;
		this.$state = $state;
		this.$rootScope = $rootScope;
		
		this.loginName = "";
		this.loginPassword = "";
		this.loginError = "";
	}

	doLogin(){
		var self = this;
		this.AUTService.login(this.loginName, this.loginPassword).then(function ( res ) {
	        if (res.success ==1) {
	        	self.$rootScope.isLogedIn = true;
	        	self.$state.go("home");
	        } else {
	        	self.loginError = "Login Failed!!!";
	        }
	    });
	}
}
LoginController.$inject = ["AUTService", "$state", "$rootScope"];