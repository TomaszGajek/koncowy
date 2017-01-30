var app = angular.module("app",['ngRoute']);

/* -- ROUTER -- */

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
				controller:'contactController'
			})


	});
/* -- END of ROUTER -- */

/* -- TEMPLATES -- */

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

	app.directive('contact',function(){

		return {
			template:
					'<form name="userForm">'+
						'<input name="username" type="text" ng-model="user.username" ng-minlength="3" ng-maxlength="10">'+
						'<input type="email" placeholder="subject">'+
						'<textarea id="message" cols="30" rows="10"></textarea>'+
						'<input id ="send" type="submit" value="send">'+
					'</form>'+
					'<p ng-show="userForm.username.$error.minlength">Username is too short</p>'+
					'<p ng-show="userForm.username.$error.maxlength">Username is too long</p>'
		}

	});

/* -- END of TEMPLATES -- */

/* -- CONTROLLERS -- */

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
				img: 'img/project1.jpg',
				href:'http://www.tomaszgajek.pl'
			},
			{
				img: 'img/project2.jpg',
				href:'https://tomaszgajek.github.io/innox/'
			},
			{
				img: 'img/project3.jpg',
				href:'https://tomaszgajek.github.io/Bhagaskara/'
			}


		]


	}]);


	app.controller('contactController',['$scope','myService',function($scope, myService){

		$scope.slide = myService.slide;




	}]);
/* -- END of CONTROLLERS -- */

/* -- SERVICE -- */

	app.service('myService',function(){

		var slideNav = function(){
			$('.navigation').slideToggle();
		}


		return {

			slide: slideNav

		}

	});
/* -- END of SERVICE -- */



