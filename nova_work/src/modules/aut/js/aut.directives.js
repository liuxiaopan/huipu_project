//
var NG_HIDE_CLASS = 'ng-hide';
var NG_HIDE_IN_PROGRESS_CLASS = 'ng-hide-animate';

showIfLogin.$inject = ["$rootScope", "$animate"];
export function showIfLogin($rootScope, $animate){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			$rootScope.$watch("isLogedIn", function(value) {
		      $animate[value ? 'removeClass' : 'addClass'](element, NG_HIDE_CLASS, {
		          tempClasses: NG_HIDE_IN_PROGRESS_CLASS
		      });
		    });
		}
	};
}

showIfNotLogin.$inject = ["$rootScope", "$animate"];
export function showIfNotLogin($rootScope, $animate){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			$rootScope.$watch("isLogedIn", function(value) {
		      $animate[value ? 'addClass' : 'removeClass'](element,NG_HIDE_CLASS, {
		          tempClasses: NG_HIDE_IN_PROGRESS_CLASS
		      });
		    });
		}
	};
}