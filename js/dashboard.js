angular.module('angularapp')
 .controller('dashboardcntl',  function ($scope,Myservice) {
   
  $scope.message = 'test';
  /* $scope.getCountriesData=function(){
 
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'myfirstchart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
          { year: '2008', value: 20 },
          { year: '2009', value: 10 },
          { year: '2010', value: 5 },
          { year: '2011', value: 5 },
          { year: '2012', value: 20 }
        ],
        // The name of the data record attribute that contains x-values.
        xkey: 'year',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['value'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Value']
      }); */
/* 
      Morris.Bar({
        element: 'bar-example',
        data: [
          { y: '2006', a: 100, b: 90 },
          { y: '2007', a: 75,  b: 65 },
          { y: '2008', a: 50,  b: 40 },
          { y: '2009', a: 75,  b: 65 },
          { y: '2010', a: 50,  b: 40 },
          { y: '2011', a: 75,  b: 65 },
          { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B']
      });

 */
      /* Morris.Donut({
        element: 'donut-example',
        data: [
          {label: "Download Sales", value: 12},
          {label: "In-Store Sales", value: 30},
          {label: "Mail-Order Sales", value: 20}
        ]
      });
       */
     


Myservice.get("http://shamba.shambadigital.com/Shamba/orgType").then(function(resp){
if(resp.status=="success"){

$scope.countriesList=angular.copy(resp.result);

/* $scope.filterData($scope.countriesList);
 $scope.filterData1($scope.countriesList); */ 

console.log($scope.countriesList);

}
else if(resp.status=='fail'){
swal("Failed... Please Try Again");	

}

})



  /* $scope.barexample = function(object){
    Morris.Bar({
    element: 'bar-example',
    data: object,
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Constitions']
    });
    
    };
 
}*/
  
   /* $scope.scotches = [
       {
           name: 'Macallan 12',
           price: 50
       },
       {
           name: 'Chivas Regal Royal Salute',
           price: 10000
       },
       {
           name: 'Glenfiddich 1937',
           price: 20000
       }
   ]; */

   /* $scope.makeBarChart = function(object){
    Morris.Bar({
    element: 'bar-example',
    data: object,
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Constitions']
    });
    
    };
    $scope.filterData = function(object){
    
    $scope.finalArray=[]
    for(var i=0;i<object.length;i++){
    var obj={}
    obj.a = angular.copy(object[i].constitutions.length);
    obj.y = angular.copy(object[i].countyName);
    $scope.finalArray.push(obj)
    
    };
    $scope.makeBarChart($scope.finalArray);
    console.log($scope.finalArray)
    };

    $scope.makeDonutChart = function(object){
        Morris.Donut({
        element: 'donut-example',
        data: object
        
        });
        
        };
        $scope.filterData1 = function(object){
        
        $scope.finalArray=[]
        for(var i=0;i<object.length;i++){
        var obj={}
        obj.value = angular.copy(object[i].constitutions.length);
        obj.label = angular.copy(object[i].countyName);
        $scope.finalArray.push(obj)
        
        };
        $scope.makeDonutChart($scope.finalArray);
        console.log($scope.finalArray)
        };
     */
    
    
    var dataSet=[

      ["null","Feed",1,"t"],
      ["null","Seed",2,"t"],
      ["null","Fertilizer",3,"t"],
      ["null","Pesticide",4,"t"],
      ["null","Irrigation",5,"t"],
      ["null","Vehicle",6,"t"],
      ["null","Soil",7,"t"],
      ["null","Organization",8,"t"],
      ["null","Insurance",9,"t"],
      ["null","Finance",10,"t"],
      ["null","Partner",11,"t"],
      ["null","Feed",12,"t"],
      ["null","Seed",13,"t"],
      ["null","Fertilizer",14,"t"],
      ["null","Pesticide",15,"t"],
      ["null","Irrigation",16,"t"],
      ["null","Vehicle",17,"t"],
      ["null","Soil",18,"t"],
      ["null","Organization",19,"t"],
      ["null","Insurance",20,"t"],
      ["null","Finance",21,"t"],
      ["null","Partner",22,"t"]


];

var userdata=[

{
  "name":"ravali",
  "id":1
},
{
  "name":"chani",
  "id":2
},
{
  "name":"abhi",
  "id":3
},
{
  "name":"abhinaya",
  "id":4
}


]



  $('#example').DataTable( {
      data: dataSet,
      columns: [
          { title: "OrgType" },
          { title: "name" },
          { title: "id" },
          { title: "activeFlag" }
          
      ]
  } );
    
  $('#userdata').DataTable( {
    data: userdata,
    columns: [
        { "data":"id","title":"name" },
        { "data":"name","title":"name" }
        
    ]
} );

$scope.numberarray=[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"25"},{value:"this is a string"}];

});