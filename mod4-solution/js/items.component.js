(function(){
  angular.module('MenuApp')
    .component('items', {
      templateUrl: 'partials/items.html',
      bindings: {
        categoryDetails: '<'
      },
      controller: function() {
        this.showItems = true;
      }
    } )

})()