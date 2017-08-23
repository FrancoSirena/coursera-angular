(function() {
'use strict'
angular.module('MenuApp')
.config(RouteConfig);

RouteConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function RouteConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'pages/home.html'
    })
    .state('categories',{
      url: '/categories',
      templateUrl: 'pages/categories.html',
      controller: 'CategoriesController as categories',
      resolve: {
        list: ['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('categories.items',{
      url:'/{short_name}',
      template: '<items category-details=items.list></items>',
      controller: 'ItemsController as items',
      resolve: {
        list: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.short_name)
        } ]
      }
    })
}

})()