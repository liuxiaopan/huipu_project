import angular from 'angular';
import SplitterTemplate from './splitter.template.html';

require("./splitter.template.css");

class SplitterController{
	constructor(){
		this.panes = [];
		this.toggleButton = null;
		this._firstPaneWidth = 0;
	}
	addPane(pane){
		this.panes.push(pane);
	}
	setToggleButton(toggleButton){
		this.toggleButton = toggleButton;
	}
	toggle(){
		console.log(this.panes);
		var firstPane = this.panes[0];
		var lastPane = this.panes[1];
		var innerWidth = firstPane.width();
		var inc;
		if(innerWidth){
			this._firstPaneWidth = innerWidth;
			this.panes[0].width(0);
			this.toggleButton.$element.find(".glyphicon").removeClass("glyphicon-chevron-left").addClass("glyphicon-chevron-right");
			inc = -innerWidth;
		}else{
			this.panes[0].width(this._firstPaneWidth);
			this.toggleButton.$element.find(".glyphicon").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-left");
			inc = this._firstPaneWidth;
		}
		this.toggleButton.left(this.toggleButton.left() + inc);
		lastPane.left(lastPane.left() + inc);
	}
	_init(){
		var leftPane = this.panes[0], 
			rightPane = this.panes[1],
			toggleButton = this.toggleButton,
			left_0 = leftPane.left(),
			width_0 = leftPane.$element.outerWidth(),
			left = left_0 + width_0;
		
		toggleButton.left(left);
		rightPane.left(left + 5);

		toggleButton.$element.css("transition", "none");
		rightPane.$element.css("transition", "none");
		setTimeout(function(){
			toggleButton.$element.css("transition", "");
			rightPane.$element.css("transition", "");
		}, 0);
	}

	$postLink(){
		this._init();
	}
}
SplitterController.$inject = [];
export default angular.module("nova.common").component("novaSplitter", {
	transclude: true,
	controller: SplitterController,
	template: SplitterTemplate,
	bindings: {
		top: '<',
		bottom: '<',
		left: '<',
		width: '<'
	}
});


class SplitterPaneController{
	constructor($scope, $element, $attrs){
		this.$element = $element;
	}


	top(value){
		if(!arguments.length){
			return this.$element.position().top;
		}
		this.$element.css({"top": value});
	}
	left(value){
		if(!arguments.length){
			return this.$element.position().left;
		}
		this.$element.css({"left": value});
	}
	width(value){
		if(!arguments.length){
			return this.$element.width()
		}
		this.$element.width(value);
	}
	height(value){
		if(!arguments.length){
			return this.$element.height()
		}
		this.$element.height(value);
	}

	$onInit(){
		this.splitterCtrl.addPane(this);
	}
}
SplitterPaneController.$inject = ["$scope", "$element", "$attrs"];
angular.module("nova.common").component("novaSplitterPane", {
	transclude: true,
  	require: {
    	splitterCtrl: '^novaSplitter'
  	},
	controller: SplitterPaneController,
	template: "<nova-splitter-pane-content ng-transclude></nova-splitter-pane-content>",
	bindings: {

	}
});

class SplitterToggleController{
	constructor($scope, $element, $attrs){
		this.$element = $element;
	}
	left(value){
		if(!arguments.length){
			return this.$element.position().left;
		}
		this.$element.css({"left": value});
	}
	$onInit(){
		this.splitterCtrl.setToggleButton(this);
	}
}
SplitterToggleController.$inject = ["$scope", "$element", "$attrs"];
angular.module("nova.common").component("novaSplitterToggle", {
  	require: {
    	splitterCtrl: '^novaSplitter'
  	},
	controller: SplitterToggleController,
	template: '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>',
	bindings: {
		
	}
});