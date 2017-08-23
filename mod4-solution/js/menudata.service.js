(function() {
	'use strict'
	angular.module('data')
	.service('MenuDataService', MenuDataService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")


	MenuDataService.$inject = ['ApiBasePath','$http'];
	function MenuDataService(ApiBasePath,$http) {
	  var service = this;
		service.getAllCategories = function () {
			var response = $http({
				method: 'GET',
				url: (ApiBasePath.concat('/categories.json'))
			})
			return response.then(function(resp) {
				return resp.data;
			});
		}
		service.getItemsForCategory = function(categoryShortName){
	    if(!categoryShortName)
	      return null;
	    var response = $http({
	      method: "GET",
	      url: (ApiBasePath.concat("/menu_items.json?category=").concat(categoryShortName))
	    });

			return response.then(function(resp) {
				return resp.data;	
	    })
	  }
	}
})()