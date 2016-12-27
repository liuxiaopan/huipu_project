import angular from 'angular';
import routing from './route.js';
import authentication from '../aut/index.js';

export default angular.module("nova.auz", [
	authentication
]).config(routing)
.run(["$rootScope", "$state", "AUTService", function($rootScope, $state, AUTService){
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){ 
	    if(!AUTService.isLogin()){
	    	if(!toState || (toState.name !== 'login')){
	    		$state.go("login");
	    	}
	    	if(fromState && (fromState.name === 'login')){
	    		event.preventDefault();
	    	}
	    }
	});

	$rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){ 
	    console.log("sdfsd");
	    $state.go("login");
	    //console.log(unfoundState.to); // "lazy.state"
	    //console.log(unfoundState.toParams); // {a:1, b:2}
	    //console.log(unfoundState.options); // {inherit:false} + default options
	})
}]).name;