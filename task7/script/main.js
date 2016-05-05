var app = angular.module('task7', []);

app.controller('MainCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.fileList = fileList;

    $scope.submit = function(){
        $timeout(function () {
            var checkboxes = $('p').find('input:checked');
            $scope.fileList = checkboxes.map(function(index, item){
                $(item).prop( "checked", false );
                return $(item).parent().find('span').text();
            });
        }, 1000);
    };

}]);

app.directive('widget', function(){
    return {
        restrict: 'E',
        scope: false,
        templateUrl: 'directive.html',
        controller: function(){
        }
    }
});

var fileList = [
    '05/04/2016  05:19 PM    <DIR>          .',
    '05/04/2016  05:19 PM    <DIR>          ..',
    '12/22/2015  12:20 PM                71 .cvsignore',
    '12/22/2015  12:20 PM                94 .gitignore',
    '12/22/2015  12:21 PM    <DIR>          .idea',
    '05/04/2016  05:19 PM    <DIR>          apioutsys-batchimport',
    '05/04/2016  05:19 PM    <DIR>          apioutsys-morphlines-validation',
    '05/04/2016  05:19 PM    <DIR>          buildsupport',
    '02/01/2016  11:56 AM            12,290 dataprocessor.iml',
    '05/04/2016  05:19 PM            33,491 pom.xml',
    '04/08/2016  05:22 PM    <DIR>          target',
    '4 File(s)         45,946 bytes',
    '7 Dir(s)  355,833,065,472 bytes free'
];