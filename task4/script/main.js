var app = angular.module('task4', []);

app.controller('MainCtrl', ['$scope', function($scope){ }]);

app.directive("block1", function(){
    return {
        restrict : 'E',
        scope: {},
        controller : function($scope){
            $scope.data = '';

            $scope.$on('SECOND_DIR_UPDATED', function(e, data){
                $scope.data = data;
            });

            $scope.set = function(value){
                $scope.$parent.$broadcast('FIRST_DIR_UPDATED', value);
            };
        },
        templateUrl: 'directive.html'
    };
});

app.directive("block2", function(){
    return {
        restrict : 'E',
        scope: {},
        controller : function($scope){
            $scope.data = '';

            $scope.$on('FIRST_DIR_UPDATED', function(e, data){
                $scope.data = data;
            });

            $scope.set = function(value){
                $scope.$parent.$broadcast('SECOND_DIR_UPDATED', value);
            };
        },
        templateUrl: 'directive.html'
    };
});
