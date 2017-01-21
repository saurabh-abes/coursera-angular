(function () {
  angular.module('myFirstApp', [])
  .controller('myFirstController',function ($scope) {

    $scope.name="saurabh";
    $scope.sayHello=function(){
      return "Hello coursera";
    }
  });
})();
