
angular.module("angularapp").controller("logincntl", function($scope,$state,Myservice1) {
    
$scope.dashboard= function () {
    
   /*  $window.location.sref="/dashboard" */
    
   /* $state.go('dashboard')
 */
   var details={

      nationalId:$scope.uname,

      password:$scope.pwd

   };

   JSON.stringify(details);

    Myservice1.post("http://shamba.shambadigital.com/Shamba/login",details).then(function success(response){

    $scope.data=response;

    console.log($scope.data);

    if(response.status === 'success'){

    $state.go("dashboard");

    }

    else{

    swal("ur credentials are wrong","","error");

    }

    })

    }

})
    