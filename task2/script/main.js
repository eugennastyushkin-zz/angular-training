var app = angular.module('task2', []);

app.controller('MainCtrl', function($scope, $http){
    $scope.content = "";
    $scope.setContent = function(tabNumber){
        debugger;
        alert(tabNumber);
    };

    $scope.onTabActivatedhandlerFirst = function(pane, evt){
        console.log("asdasdasdas");
    };

    $scope.onTabActivatedhandlerSecond = function(pane, evt){
        $scope.setContent(2);
    };

    $scope.onTabActivatedhandlerThird = function(pane, evt){
        $http.get('http://vk.com').success(function(result){
            $scope.content = result;
        }).error(function(error, status, handler, request){
            debugger;
            $scope.content = request.url;
        })
    }
});
app.directive('tabControl', function(){
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: 'directive/tab-control.html',
        controller: function($scope){
            var panes = $scope.panes = [];

            $scope.select = function(pane) {
                angular.forEach(panes, function(pane) {
                    pane.selected = false;
                });
                pane.selected = true;
            };

            this.addPane = function(pane) {
                if (panes.length === 0) {
                    $scope.select(pane);
                }
                panes.push(pane);
            };
        }
    };
});

var setContent = function(tabNumber){
    alert(tabNumber);
};

app.directive('tab', function(){
    return {
        require: '^^tabControl',
        restrict: 'E',
        transclude: true,
        scope: {
            title:'@',
            onTabActivated: '&'
        },
        templateUrl: 'directive/tab.html',
        link: function(scope, element, attrs, tabControlController){
            tabControlController.addPane(scope);
        }
    };
});
