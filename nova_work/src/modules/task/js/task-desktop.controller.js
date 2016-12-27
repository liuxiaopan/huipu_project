require("../template/task-desktop.template.css");

export default class TaskDesktopController{
    constructor(TaskService){
        this.TaskService = TaskService;
        this.showCase=true;
        this.showCtrlBtn=true;
        this.showCases();
        this.getInstanceInfo();
        this.current=0;
        this. getTaskData();
    }
    getInstanceInfo(){
        //获取matrixData
        var self=this;
        self.TaskService.getInstances().then(function(res){
            self.SectionTree= res.SectionTree;
        });
    }
    getCaseInfo(){
        //获取matrixData
        var self=this;
        self.TaskService.getCase().then(function(res){
            self.caseInfo= res.Case;
            self.stepInfo= res.StepAndPackageList;
            self.CasePackage=res.CasePackage;
        });
    }
    showCases(secId,index){
        //控制section下的cases显示与否
        this.index=index;
        this.secId=secId;
        this.showCase=!this.showCase;
        this.showCtrlBtn=!this.showCtrlBtn;
    }
    getSectionInfo(){
        //获取matrixData
        var self=this;
        self.TaskService.getSection().then(function(res){
            self.sectionData= res;
        });
    }
    getInstanceData(){
        //获取matrixData
        var self=this;
        self.TaskService.getInstanceData().then(function(res){
            self.instanceData= res;
        });
    }
    getTaskData(){
        var self=this;
        self.TaskService.getTaskData().then(function(res){
            self.taskData= res.Task;
            self.planData=res.Plan;
        });
    }
    show(index){
        this.current=index;
    }

}
TaskDesktopController.$inject=["TaskService"];