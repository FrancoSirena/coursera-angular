(function(){
'use strict';
angular.module('ShoppingListCheckOffService', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;
  var toBuyItems = [{name:'Chicken', quantity:'10'},
                    {name:'Red meat', quantity:'10'},
                    {name:'Turkey', quantity:'10'},
                    {name:'Yams', quantity:'10'},
                    {name:'Salmon', quantity:'10'},
                    {name:'Tilapia', quantity:'10'}];
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    
    var item = {name: toBuyItems[itemIndex].name, quantity: toBuyItems[itemIndex].quantity};

    boughtItems.push(item);

    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
