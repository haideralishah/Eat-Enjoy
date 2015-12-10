/**
 * Created by haider on 11/21/2015.
 */



angular.module('foodApp')

  .controller('recipeByRecipeSelectionController', function($scope, $rootScope, recipeDetails, $stateParams, $state){
    var recID = $stateParams.recepID;
    var recipies = recipeDetails;
    console.log(recID);

    $scope.recipeToShow = recipies[recID];

    $scope.goToHome = function (){
      /*for (var h = 0; h < $rootScope.selectedIngr.length; h++){
        $rootScope.allIngr.push ($rootScope.selectedIngr[h]);
      }
      $rootScope.selectedIngr = [];
      $rootScope.canCookStuf = [];*/
      $state.go("tabs.cookByRecip");
      $scope.searchRecip = "";
    }


  });
