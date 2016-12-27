
routes.$inject = ["$locationProvider", "$urlRouterProvider", "$stateProvider"];
export default function routes ($locationProvider, $urlRouterProvider, $stateProvider){
	//$locationProvider.html5Mode(true);
	$urlRouterProvider.when('', '/');
	$urlRouterProvider.otherwise("/");
};