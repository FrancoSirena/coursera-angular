(function(){
'use strict';
angular.module('MenuApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  return {
    templateUrl: 'partials/found-items.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  }
}

NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService){
  var myCtrl = this;

  myCtrl.searchTerm = "";
  myCtrl.foundItems = [];
  myCtrl.loading = false;
  myCtrl.removeFoundItem = function (index) {
    console.log("ahsdhasda")
  }
  myCtrl.getMenuItens = function () {
    if (!myCtrl.searchTerm)
      return;
    myCtrl.loading = true;
    myCtrl.foundItems = [];
    MenuSearchService.getMatchedMenuItems(myCtrl.searchTerm).then(function(resp) {
      myCtrl.foundItems = resp;
      myCtrl.loading= false;
    });
  }
}

MenuSearchService.$inject = ['ApiBasePath','$http'];
function MenuSearchService(ApiBasePath,$http) {
  var service = this;
  service.getMatchedMenuItems = function (searchTerm) {
    if(!searchTerm)
      return null;
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response.then(function(resp) {
      var result = resp.data;
      return result.menu_items.filter(function(it) {
        
        if (it.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
          return it;
      })
    })
  }
}

})();
