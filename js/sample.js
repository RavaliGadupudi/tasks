$scope.$watch('pincode1', function(newVal, oldVal) {
    if (newVal && newVal.length >= 6){
         
        $http.get('http://postalpincode.in/api/pincode/'+newVal)
        .then(function (response) {
        $scope.names = response.data;
        $scope.mandal = $scope.names.PostOffice[0].Taluk;
        $scope.district = $scope.names.PostOffice[0].District;
        $scope.state = $scope.names.PostOffice[0].State;
        $scope.country = $scope.names.PostOffice[0].Country;
    }); 
}
});