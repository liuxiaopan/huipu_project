
export default class TaskService{
    constructor(CommonService) {
        this.CommonService = CommonService;
    }
    getInstances() {
        var taskId = "1601000300001";
        return this.CommonService.getData('/TaskAPI/GetTaskMatrix?taskId=', taskId);
    }
    getCase() {
        return this.CommonService.getDemoData("/src/modules/Jsons/GetCaseAndSteps.json");
    }
    getSection() {
        return this.CommonService.getDemoData("/src/modules/Jsons/GetSectionPackage.json");
    }
    getInstanceData() {
        return this.CommonService.getDemoData("/src/modules/Jsons/GetInstance.json");
    }
    getTaskData(){
        return this.CommonService.getDemoData("/src/modules/Jsons/GetTaskAndPlan.json");
    }

    getTasks(searchInfo) {
        return this.CommonService.postData('/TaskAPI/Search', searchInfo);
    }

    getTaskInfo(contactId) {
        return this.CommonService.getData('/TaskAPI/GetTask?taskId=', contactId);
    }

    addTask(taskInfo) {
        return this.CommonService.postData('/api/TaskAPI/AddTask', taskInfo);
    }

    saveTaskInfo(taskInfo) {
        var info = {};
        info.Model = taskInfo;
        info.ColumnaNames = [];
        for (var key in taskInfo) {
            info.ColumnaNames.push(key);
        }
        return this.CommonService.postData('/TaskAPI/UpdateTask', info);

    }

    sendTaskInfo(taskId) {
        return this.CommonService.getData('/TaskAPI/SendTask?taskId=', taskId);
    }

    setNp(param) {
        console.log(param);
        return this.CommonService.postData('/TaskAPI/SetPackageStatusNP', param);

    }

    setNs(param) {
        console.log(param);
        return this.CommonService.postData('/TaskAPI/SetPackageStatusNS', param);
    }

    setNormal(param) {
        console.log(param);
        return this.CommonService.postData('/TaskAPI/SetPackageStatusNormal', param);
    }
}
TaskService.$inject = ["CommonService"];