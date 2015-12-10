/**
 * Created by haider on 11/21/2015.
 */


angular.module('foodApp')

  .controller('recipeController', function($scope, $rootScope, recipeDetails, $state, $stateParams){
      console.log($rootScope.canCookStuf[$stateParams.partyID]);


      $scope.selectedRecipe = $rootScope.canCookStuf[$stateParams.partyID];


      //$rootScope.allIngr =0 ;


      $scope.goToHome = function (){
        for (var h = 0; h < $rootScope.selectedIngr.length; h++){
          $rootScope.allIngr.push ($rootScope.selectedIngr[h]);
        }
        $rootScope.selectedIngr = [];
        $rootScope.canCookStuf = [];
        $state.go("tabs.cookByIngr");
      }


  });
