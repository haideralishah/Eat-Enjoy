/**
 * Created by haider on 11/21/2015.
 */

angular.module('foodApp')

  .controller('homeController', function($scope, $state){

    $scope.moveToCooking = function (){
      /*document.getElementById("ionNav").className += " show";*/
      $state.go('tabs.cookByRecip');

    };
    $scope.moveToCredits = function (){
      /*document.getElementById("ionNav").className += " show";*/
      $state.go('credits');

    };

    $scope.moveToCredits = function (){
      /*document.getElementById("ionNav").className += " show";*/
      $state.go('credits');

    };


  });
