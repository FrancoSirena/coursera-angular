(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://damp-retreat-77094.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
