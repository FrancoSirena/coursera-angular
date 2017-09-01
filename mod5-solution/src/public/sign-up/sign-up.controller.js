(function(){
    angular.module('public')
    .controller('SignUpController', SignUpController)

    SignUpController.$inject = ['MenuService', 'StorageService', '$timeout', '$scope']
    function SignUpController(MenuService, StorageService, $timeout, $scope) {
        var signUp = this;
        signUp.alreadyRegistered = false;
        signUp.$onInit = function () {
            var userInfo = StorageService.retrieveData("userInfo");
            signUp.user = userInfo;
        }
        signUp.submit = function () {
            var promise = MenuService.getMenuItem(signUp.user.favDish);
            promise.then(function(response){
                signUp.dishNotFound = false;
                signUp.saved = true;
                StorageService.storeData("userInfo", signUp.user, function() {
                    $timeout(function() {
                        signUp.saved = true;
                    }, 1000);
                })
            }, function(response){
                signUp.dishNotFound = true;
                frmSignUp.favDish.focus();
            })
                
        }
    }
})()