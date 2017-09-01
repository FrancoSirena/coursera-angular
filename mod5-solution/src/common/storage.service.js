(function () {
    "use strict";
    
    angular.module('common')
    .service('StorageService', StorageService);
    
    
    StorageService.$inject = ['$window'];
    function StorageService($window) {
      var service = this;
    
      service.storeData = function(key, data, callback) {
          $window.localStorage.setItem(key, angular.toJson(data));
          callback();
      }

      service.retrieveData = function(key) {
          return angular.fromJson($window.localStorage.getItem(key));
      }
    }
    
    
})();
    