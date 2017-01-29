var app = angular.module("app",['ngRoute']);

app.config(function($routeProvider,$locationProvider){

	$locationProvider.hashPrefix('');

	$routeProvider
		.when('/',{
			templateUrl:'pages/main.html',
			controller:'mainController'
		})
		.when('/about',{
			templateUrl:'pages/about.html',
			controller:'secondController'
		})
		.when('/projects',{
			templateUrl:'pages/projects.html',
			controller:'thirdController'
		}).
		when('/contact',{
			templateUrl:'pages/contact.html',
			controller:'fourthController'
		})


});


app.directive('navigation',function(){

	return {
		template:
				'<div id="navToggle" ng-click="slide()">'
					+'<span></span>'
				+'</div>'
				+'<ul class="navigation">'
		        	+'<li><a href="#">home</a></li>'
		        	+'<li><a href="#/about">about</a></li>'
		        	+'<li><a href="#/projects">projects</a></li>'
		        	+'<li><a href="#/contact">contact</a></li>'
			    +'</ul>'
			    
	}

});

app.controller('mainController',['$scope','myService',function($scope,myService){

	$scope.slide = myService.slide;

}]);


app.controller('secondController',['$scope','myService',function($scope, myService){

	$scope.slide = myService.slide;

}]);

app.controller('thirdController',['$scope','myService',function($scope, myService){

	$scope.slide = myService.slide;

	$scope.projects = [

		{
			img: 'img/project1.jpg'
		},
		{
			img: 'img/project2.jpg'
		},
		{
			img: 'img/project3.jpg'
		}


	]


}]);


app.controller('fourthController',['$scope','myService',function($scope, myService){

	$scope.slide = myService.slide;




}]);


app.service('myService',function(){

	var slideNav = function(){
		$('.navigation').slideToggle();
	}


	return {

		slide: slideNav

	}

});



