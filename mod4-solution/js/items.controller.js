(function(){
  angular.module('MenuApp')
    .controller('ItemsController', ItemsController)

    ItemsController.$inject = ['list']
    function ItemsController(list) {
      var items = this;

      items.list = list;
    }
})()