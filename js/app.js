var app = angular.module('angularapp', ['ui.router','oc.lazyLoad']);

app.config(function($stateProvider, $urlRouterProvider,$ocLazyLoadProvider,$provide) {

        $provide.provider('nameprovider', function () {

            this.$get = function () { 

            var appname = "ojas"; 

            return { appName: appname };

         } 

        })

        $ocLazyLoadProvider.config({
            debug:false,
            events:true,
        });

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'login.html',
                controller:'logincntl',
                resolve:{
                        lazyLoad:function($ocLazyLoad){
                            return $ocLazyLoad.load(
                                {
                                    name:'logincntl',
                                    files:['js/logincntl.js']
                                } ),
                        $ocLazyLoad.load({
                            name:'service1',
                            files:['js/service.js']
                                })
                        
                            }
                        }

                    })

            .state("dashboard",{
                url:"/dashboard",
                templateUrl:"dashboard.html",
                controller:"dashboardcntl",
                resolve:{
                    lazyLoad:function($ocLazyLoad){
                        return $ocLazyLoad.load({
                        name:'myService',
                        files:['js/service.js']
                        }),

                        $ocLazyLoad.load({
                        name:'uiRoute',
                        files:['js/dashboard.js']
                        }),

                        $ocLazyLoad.load({
                        name:'header',
                        files:['js/customdir.js']
                        }),

                        $ocLazyLoad.load({
                        name:'headerfac',
                        files:['js/headerfac.js']
                        }), 

                        $ocLazyLoad.load({
                        name:'filter',
                        files:['js/filter.js']
                        });
                                    
                        }
                        }
                    })

            .state("signup",{
                url:"/signup",
                templateUrl:"signup.html",
                controller:"personsignupCtrl",
                resolve:{
                    lazyLoad:function($ocLazyLoad){
                        return $ocLazyLoad.load({
                        name:'signup',
                        files:['js/signup.js']
                        }),

                        $ocLazyLoad.load({
                        name:'service',
                        files:['js/service.js']
                        })
                           
                        }
                    }
                })

                .state("image",{
                    url:"/image",
                    templateUrl:"image.html",
                    controller:"imageuploadingCtrl",
                    resolve:{
                        lazyLoad:function($ocLazyLoad){
                            return $ocLazyLoad.load({
                            name:'imageupload',
                            files:['js/image.js']
                            })
    
                        }   
                            
                        }
                    })

                

});