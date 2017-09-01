(function() {
    angular.module('public')
    .controller('MyInfoController', MyInfoController)

    MyInfoController.$inject = ['ApiPath', 'user'];
    function MyInfoController(ApiPath, user) {
        var myInfo = this;
        myInfo.user = user;
        myInfo.basePath = ApiPath;
    }
})()