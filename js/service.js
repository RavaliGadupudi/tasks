angular.module("angularapp")
 /* .service('Myservice',function($q,$http){

this.get=function(url){

var deferred=$q.defer();
var request={
    method:'GET',
    url:url
};

$http(request).success(function (resp){
    if(resp.status ==="fail"){

        alert("session expired");
        $state.go('home');
    
    }
deferred.resolve(resp);
}).error(function (resp){

    deferred.reject(resp);

});

return deferred.promise;

}


});  */
 .factory('Myservice', function($q,$http) {

    var factoryObj = {};

        factoryObj.get=function(url) {

            var deferred=$q.defer();
            
            var request={

                    method:'GET',

                    url:url

                };
                
                $http(request).success(function (resp){

                    if(resp.status ==="fail"){
                
                        alert("session expired");

                        $state.go('home');
                    
                    }

                deferred.resolve(resp);

                }).error(function (resp){
            
                deferred.reject(resp);
                
                });
                
                return deferred.promise;
                
                }
               
            return factoryObj;
         }) 
         
            .service('Myservice1',function($q,$http){

                this.post=function(url,requestdata){
                
                var deferred1=$q.defer();

                var request={

                    method:'POST',
                    url:url,
                    data:requestdata,
                    headers:{

                        'Content-Type':'application/json'
                
                            }
                };
                
                $http(request).success(function (resp){
                    
                    if(resp.status ==="fail"){
                
                        alert("session expired");
                        $state.go('home');
                    
                    }
                deferred1.resolve(resp);
                }).error(function (resp){
                
                deferred1.reject(resp);
                
                });
                
                return deferred1.promise;
                
                }

                this.uploadimage = function(url,data){
    
                    var deferred = $q.defer();
                    
                    $http.post(url, data, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    })

                    .success(function(resp){

                        console.log("image uploaded");
                        deferred.resolve(resp);
                        console.log("image uploading failed");

                    })

                    .error(function(resp){

                        console.log("image uploading failed");
                        deferred.reject(resp);
                        console.log("image uploading failed");

                    });
                     
                    return deferred.promise;

                }
            });