/* angular.module("uiRoute").controller('headerController', ['$scope', function($scope) {
    $scope.header = {
        link1: 'home',
        link2:'aboutus'
    };
        
}])

.directive('mainHeader', function() {
    return {
        restrict: 'E', 
        template: '<nav><li> {{header.link1}}</li>' +
              '<li>Type: {{header.link2}}</li></nav>'
    };
});
 */


angular.module('angularapp').directive('mainHeader', function () {

    
    return {
        templateUrl: 'header.html',
        restrict: 'E',
        replace:'true',
        scope: {
            
        },
          controller: function ($scope,headerService,nameprovider,$rootScope) {

            $rootScope.$on("event", function (event, args) {

                document.getElementById('headerimg').src = args;
                
             });

            $scope.values=headerService.get();

            $scope.app=nameprovider.appName;
          
            }

    };



});