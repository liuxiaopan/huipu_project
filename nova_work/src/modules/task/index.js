import angular from 'angular';
import routing from './route.js';
import TaskService from './js/task.service.js';
import { instanceSettings } from "./js/task.directive.js";
import { scInfo } from "./js/task.directive.js";
import CreateModal from '../../utils/modal/modal.service.js';
import SearchService  from '../../utils/modal/js/single.search.service';
import CommonService from '../../utils/common.service.js';

export default angular.module("nova.task", [])
.config(routing)
.service("TaskService", TaskService)
  .service("CreateModal", CreateModal)
  .service("SearchService", SearchService)
  .service("CommonService", CommonService)
.directive("instanceSettings", instanceSettings)
.directive("scInfo",scInfo)
.name;