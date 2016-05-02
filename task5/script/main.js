var app = angular.module('task5', []);

app.service('blockService', function () {
    return {
        first: { value : 'first' },
        second: { value : 'second' }
    }
});

app.controller('MainCtrl', function ($scope) { });

app.directive("block1", ['blockService', function (blockService) {
    return {
        restrict: 'E',
        scope: {},
        controller: function ($scope) {
            $scope.data = blockService.first;
            $scope.set = function (value) {
                blockService.second.value = value;
            };
        },
        templateUrl: 'directive.html'
    };
}]);

app.directive("block2", ['blockService', function (blockService) {
    return {
        restrict: 'E',
        scope: {},
        controller: function ($scope) {
            $scope.data = blockService.second;
            $scope.set = function (value) {
                blockService.first.value = value;
            };
        },
        templateUrl: 'directive.html'
    };
}]);
