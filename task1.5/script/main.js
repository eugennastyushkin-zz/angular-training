var app = angular.module('task1', []);

app.controller('MainCtrl', ['$scope', function($scope){
    $scope.sharedValue = 'Shared value without writing';
}]);

app.controller('ParentCtrl1', ['$scope', function ($scope) {

}]);

app.controller('ParentCtrl2', ['$scope', function ($scope) {

}]);

app.controller('ChildCtrl1', ['$scope', function ($scope) {

}]);

app.controller('ChildCtrl2', ['$scope', function ($scope) {

}]);