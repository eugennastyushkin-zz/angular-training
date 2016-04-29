var app = angular.module('task5', []);

app.service('blockService', function () {
    return {
        data: {
            first: 'first',
            second: 'second'
        }
    }
});

app.controller('MainCtrl', ['$scope', function ($scope) { }]);

app.directive("block1", ['blockService', function (blockService) {
    return {
        restrict: 'E',
        scope: {},
        controller: function ($scope) {
            $scope.data = blockService.data.first;

            $scope.set = function (value) {
                blockService.data.second = value;
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
            $scope.data = blockService.data.second;

            $scope.set = function (value) {
                blockService.data.first = value;
            };
        },
        templateUrl: 'directive.html'
    };
}]);
