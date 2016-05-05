var app = angular.module('task6', []);

app.controller('MainCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

    $scope.sentJS = function (text) {
        setTimeout(function () {
            $scope.textJS = text;
        }, 1000);
    };

    $scope.sentAngular = function (text) {
        $timeout(function () {
            $scope.textAngular = text;
        }, 1000);
    };

}]);
