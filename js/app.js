var app = angular.module('app',['ngRoute','ngMessages','uiGmapgoogle-maps']);

/* -- ROUTER & GOOGLE MAPS -- */

	app.config(['$routeProvider','$locationProvider','uiGmapGoogleMapApiProvider',function($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider){

		uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDUXW5CayVZ3HG8BXF0MVPBhhjVfwGxwv8',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    	});

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
	}]);
/* -- END of ROUTER -- */	


/* -- TEMPLATES -- */

	app.directive('navigation',function(){

		return {
			template:
					'<div id="navToggle" ng-click="slide()">'
						+'<span></span>'
					+'</div>'
					+'<ul class="navigation">'
			        	+'<li><a href="#">h<span>o</span>me</a></li>'
			        	+'<li><a href="#/about">ab<span>o</span>ut</a></li>'
			        	+'<li><a href="#/projects">pr<span>o</span>jects</a></li>'
			        	+'<li><a href="#/contact">c<span>o</span>ntact</a></li>'
				    +'</ul>'				    
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
				href:'http://www.tomaszgajek.pl',
				name: 'TG FOTOGRAFIA'
			},
			{
				img: 'img/project2.jpg',
				href:'https://tomaszgajek.github.io/innox/',
				name: 'INNOX'
			},
			{
				img: 'img/project3.jpg',
				href:'https://tomaszgajek.github.io/Bhagaskara/',
				name: 'BHAGASKARA'
			},
			{
				img: 'img/project5.jpg',
				href:'https://tomaszgajek.github.io/TODO/',
				name: 'TODO LIST'
			},
			{
				img: 'img/project6.jpg',
				href:'https://tomaszgajek.github.io/szablon/',
				name: 'TEMPLATE'
			},
			{
				img: 'img/project4.jpg',
				href:'https://tomaszgajek.github.io/Tagmet/',
				name: 'STELMED'
			}


		]

		$scope.delayInTimeText = function(){

			$('p').each(function(i){
				var item = $(this);
				setTimeout(function(){
					item.addClass('fadeIn');
				},300*i);
			});

		};

		$scope.delayInTimeText();

		$scope.delayInTimeThumb = function(){

			$(document).bind("DOMNodeInserted", function() {


			   $(this).find('.project-thumbs__thumb').each(function(i){
			   		var item = $(this);
					setTimeout(function(){
						
						item.addClass('zoomIn');
					},500*i);
				});

			});
		};


		$scope.delayInTimeThumb();


	}]);


	app.controller('contactController',['$scope', 'myService','uiGmapGoogleMapApi','$http',function($scope, myService, uiGmapGoogleMapApi,$http){

		// uiGmapGoogleMapApi.then(function(maps) {

		     
		// })

		$scope.map = { 
			center: { 
				latitude: 54.3666666667, longitude: 18.6833333333 
				}, 
			zoom: 10

		};
		

		var styleArray = [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"},{"saturation":"-100"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#7f8d89"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2b3638"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2b3638"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}]

		$scope.options = {
		   styles: styleArray,

		};


		$scope.slide = myService.slide;



		$scope.sendMessage = function() { 

		var data = {
			textarea: $scope.textarea,
            username: $scope.username,
            email: $scope.email
		}

		$('.textarea-group').find('p').html('wiadomosc zostala wyslana');	

        $http( {
            url: './sendMail.php',
            method: 'POST',
            dataType: 'json',
            params: data
        } ).then( function(response) {
        		return response;
            });

    }



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



