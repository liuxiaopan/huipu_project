export default class LanguageSwitchingController {
	constructor($scope, $translate){
		$scope.switching = function(lang){
	        $translate.use(lang);
	        window.localStorage.lang = lang;
	        window.location.reload();
	    };
	    $scope.cur_lang = $translate.use();
	}
}
LanguageSwitchingController.$inject = ['$scope', '$translate'];