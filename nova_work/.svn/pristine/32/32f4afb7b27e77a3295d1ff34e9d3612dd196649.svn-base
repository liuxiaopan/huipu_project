import angular from 'angular';
import angularTranslate from 'angular-translate';
import angularTranslateLoader from 'angular-translate-loader-static-files';
import languageSwitchingCtrl from "./lang/language-switching.controller.js";

const moduleName = "nova.locale";

angular.module(moduleName, [
	angularTranslate,
	angularTranslateLoader
])
.config(['$translateProvider', function ($translateProvider) {
    //国际化设置
	var lang = window.localStorage.lang||'en';
	$translateProvider.useStaticFilesLoader({
        prefix: '/build/i18n/',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage(lang);
	//$translateProvider.useSanitizeValueStrategy('sanitize');
}])
.controller("LanguageSwitchingCtrl", languageSwitchingCtrl);

export default moduleName;