var app = angular.module('task2', []);

app.controller('MainCtrl', ['$scope', function($scope){
    $scope.show = false;
}]);

app.directive('tab', function(){
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title:'@',
            tubNumber: '@'
        },
        templateUrl: 'directive/tab.html',
        controller: function($scope, $element){
            $element.find('a').css('left', $scope.tubNumber * 92 - 92 + 'px');
        }
    };
});
