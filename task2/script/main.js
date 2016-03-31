var app = angular.module('task2', []);

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

app.directive('tab', function(){
    return {
        require: '^^tabControl',
        restrict: 'E',
        transclude: true,
        scope: {
            title:'@'
        },
        templateUrl: 'directive/tab.html',
        link: function(scope, element, attrs, tabControlController){
            tabControlController.addPane(scope);
        }
    };
});
