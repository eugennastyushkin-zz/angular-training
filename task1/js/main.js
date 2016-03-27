angular.module('initExample', [])
    .controller('MyController', ['$scope', function($scope) {
        $scope.sharedValue = 'Some shared value'
    }]);