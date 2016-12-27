import angular from 'angular';
import routing from './route.js';

export default angular.module("nova.home", [])
.config(routing).name;