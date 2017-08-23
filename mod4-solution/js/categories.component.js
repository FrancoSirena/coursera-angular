(function(){
  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'partials/categories.html',
      bindings: {
        list: '<'
      }
    } )

})()