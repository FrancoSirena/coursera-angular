(function(){
'use strict';
angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ToBuyService', ShoppingListService)
.service('BoughtService', ShoppingListService)

ToBuyController.$inject = ['ToBuyService', 'BoughtService'];

function ToBuyController(ToBuyService, BoughtService){
  var toBuy = this;
  ToBuyService.addItem('Chicken Breasts', '10');
  ToBuyService.addItem('Red meat', '10');
  ToBuyService.addItem('Brown Rice', '10');
  ToBuyService.addItem('Yams', '10');
  ToBuyService.addItem('Quinoa', '10');
  ToBuyService.addItem('Salmon', '10');

  toBuy.items = ToBuyService.getItems();
  toBuy.buyItem = function (itemIndex) {
    BoughtService.addItem(toBuy.items[itemIndex].name, toBuy.items[itemIndex].quantity);
  }


}


function ShoppingListService() {
  var service = this;
  var items = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}
}
)
