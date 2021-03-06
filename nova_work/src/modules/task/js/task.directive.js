export function instanceSettings($rootScope, $animate){
    return {
        restrict: 'AE',
        transclude: false,
        scope: {
            instance:"=",
            selectedLevel:"="
        },
        template:getTemplate(),
        link: function(scope, elem, attrs){
            scope.$watch("selectedLevel",function (newValue) {
                if(newValue==1){
                    scope.showLevel=[1,0,0,0,0];
                }else if(newValue==2){
                    scope.showLevel=[1,1,0,0,0];
                }else if(newValue==3){
                    scope.showLevel=[1,1,1,0,0];
                }else if(newValue==4){
                    scope.showLevel=[1,1,1,1,0];
                }else{
                    scope.showLevel=[1,1,1,1,1];
                }
            });

        }

    };
    function   getTemplate(){
        return "<div style='width: 330px;'>" +
            "<form>" +
            "<div class='nova-row'> " +
            "<input class='form-control nova-checkbox' type='checkbox' style='margin-top: 1px;'/>" +
            " <span class='nova-instance-name'>{{instance.Name}}</span> " +
            "<input class='form-control nova-input' type='text'/> " +
            "<span class='glyphicon glyphicon-pencil nova-glyphicon'></span> " +
            "<span class='glyphicon glyphicon-remove nova-glyphicon'></span> " +
            "</div> " +
            "<div class='nova-row nova-instance-row' ng-show='showLevel[1]'> " +
            "<label for='plantForm' class='nova-task-label'>plantForm</label> " +
            "<input id='plantForm' placeholder='Platform1' class='form-control nova-input' ng-model='instance.PlatformId' type='text' class='form-control'/> " +
            "</div> " +
            "<div class='nova-row nova-instance-row'ng-show='showLevel[1]' > " +
            "<label for='HWSku' class='nova-task-label'>HWSku</label> " +
            "<input id='HWSku' class='form-control nova-input' ng-model='instance.HwSku' placeholder='sku-1' type='text' class='form-control'/> " +
            "</div>" +
            "<div class='nova-row nova-instance-row' ng-show='showLevel[1]'> " +
            "<label for='HW-Phase' class='nova-task-label'>Hwphase</label> " +
            "<input id='HW-Phase' class='form-control nova-input' ng-model='instance.HwPhase' placeholder='hw-phase' type='text' class='form-control'/>" +
            " </div> " +
            "<div class='nova-row nova-instance-row' ng-show='showLevel[2]'> " +
            "<label for='OS' class='nova-task-label'>OS</label> " +
            "<input id='OS' class='form-control nova-input' ng-model='instance.OS' placeholder='window' type='text' class='form-control'/> " +
            "<button class='btn btn-primary nova-change-btn'>Change</button>" +
            " </div> " +
            "<div class='nova-row nova-instance-row' ng-show='showLevel[2]'>" +
            " <label for='OS-Lang' class='nova-task-label' >OS-Lang</label> " +
            "<input id='OS-Lang' ng-model='instance.OSLang' ng-model-options='{ updateOn: \"default blur\" }' class='form-control nova-input' placeholder='window/wxke' type='text' class='form-control'/> " +
            "<button class='btn btn-primary nova-change-btn'>Change</button>" +
            " </div> " +
            "<div class='nova-row nova-component' ng-show='showLevel[3]'> " +
            "<h5>components</h5> " +
            "<ul class='nova-component-list'>" +
            " <li ng-repeat='component in instance.Components' ng-show='($index<=1 && showLevel[3])||($index>=2 && showLevel[4])'>" +
            " <input type='checkbox' class='form-control nova-checkbox'/> " +
            "<span>{{component.Name}}</span> " +
            "</li> " +
            "</ul> " +
            "<div class='nova-component-ctrl'> " +
            "<button class='btn btn-primary nova-change-btn'>Change</button> " +
            "<button class='btn btn-primary nova-change-btn'>Delete</button> " +
            "</div> " +
            "</div> " +
            "</form>"+
            "</div>"
    }

}
instanceSettings.$inject = ["$rootScope", "$animate"];

//scInfo

export function scInfo($rootScope, $animate){
    return {
        restrict: 'AE',
        transclude: false,
        scope: {
            packageList:"=",
            dirParam:"=",
            rowSelected:"@",
            packageId:"=",
            sectionTree:"=",
            sectionData:"="
        },
        template:getTemplate(),
        controller : ['$scope',function($scope){

            //section/case 行控行为
            $scope.getChecked=function (){
                 $scope.rowSelected.indexOf($scope.packageList.ID)<=-1? $scope.checked= false: $scope.checked= true ;
                return $scope.checked;
            }
            $scope.$watch("rowSelected",function (newValue) {
                // $scope.getChecked();
            });

        }],
        link: function(scope, elem, attrs){
            //控制PakageList具体与section/case 和 instance对应的td 哪些被选中
            scope.getParam=function (packageList){
                var flagIn=("flag"　in packageList);
                if(!flagIn){
                    packageList.flag=true;
                }
                if(  packageList.flag){
                    for(var i=0;i<scope.sectionTree.length;i++){
                        if( scope.sectionTree[i].ID==packageList.ID){
                            scope.sectionTree[i].checkItem=false;
                        }
                    }
                }else {
                    packageList.flag=false;
                    for(var i=0;i<scope.sectionTree.length;i++){
                        if( scope.sectionTree[i].ID==packageList.ID){
                            scope.sectionTree[i].checkItem=true;
                        }
                    }
                }
                var curString=packageList.PackageId+"";

                if(packageList.PackageType=="S"){
                    if(scope.dirParam.SectionPackageIds.indexOf(curString)<=-1){
                        if(scope.dirParam.SectionPackageIds.length<=0){
                            scope.dirParam.SectionPackageIds=scope.dirParam.SectionPackageIds+packageList.PackageId;
                        }else {
                            if(scope.dirParam.SectionPackageIds.indexOf(packageList.PackageId)<=-1){
                                scope.dirParam.SectionPackageIds=scope.dirParam.SectionPackageIds+","+packageList.PackageId;
                            }
                        }
                    }else {
                        scope.packageId--;
                        var dirParamArray=scope.dirParam.SectionPackageIds.split(",");
                        dirParamArray.splice(dirParamArray.indexOf(curString),1);
                        scope.dirParam.SectionPackageIds=dirParamArray.join(",");
                    }
                }else if(packageList.PackageType=="C"){
                    if(scope.dirParam.CasePackageIds.indexOf(curString)<=-1){
                        if(scope.dirParam.CasePackageIds.length<=0){
                            scope.dirParam.CasePackageIds=scope.dirParam.CasePackageIds+curString;
                        }else {
                            scope.dirParam.CasePackageIds=scope.dirParam.CasePackageIds+","+curString;

                        }
                    }else {
                        var dirParamArray=scope.dirParam.CasePackageIds.split(",");
                        dirParamArray.splice(dirParamArray.indexOf(curString),1);
                        scope.dirParam.CasePackageIds=dirParamArray.join(",");
                    }
                }
            }
        }

    };
    function   getTemplate(){
        return '<div>'+
            '<div class="nova-left-status">'+
            '<div class="nova-right-checkbox">'+
            ' <span><input type="checkbox" ng-click="getParam(packageList)"  ng-checked="getChecked()"/></span>'+
            '</div>'+
           ' <div>'+
            '<label class="nova-level">Status:</label>'+
        '<div class="nova-section-select form-control nova-select">{{packageList.Status}}</div>'+
        '</div>'+
        '<div  ng-show="packageList.Status==0">'+
            '<label class="nova-level" style="margin-left: 20%;">Assigenee:</label>'+
        '<div class="nova-section-select form-control nova-select">{{packageList.AssigneeId}}</div>'+
        '</div>'+
       '</div>'+

        '</div>'
    }

}
scInfo.$inject = ["$rootScope", "$animate"];
