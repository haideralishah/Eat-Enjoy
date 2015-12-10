/**
 * Created by haider on 11/20/2015.
 */


angular.module('foodApp')

  .controller('availRecepieController', function($scope, recipeDetails, $rootScope){
    $scope.recipeDetails = recipeDetails;
    $rootScope.canCookStuf = [];

    for(var i = 0; i < $scope.recipeDetails.length; i++){
      for(var j = 0; j < $rootScope.selectedIngr.length; j++){
        if($scope.recipeDetails[i].ingrd.indexOf($rootScope.selectedIngr[j]) !== -1 && $rootScope.canCookStuf.indexOf($scope.recipeDetails[i]) == -1){
          /*$rootScope.lengthOfMeal.push($scope.recipeDetails[i].ingrd.length);*/
          $rootScope.canCookStuf.push($scope.recipeDetails[i]);
          //console.log($rootScope.canCookStuf);
//          console.log($scope.recipeDetails[i]);
          //console.log($rootScope.canCookStuf);
        }
      }
    }


    /*for ingrdCount*/

      for ( var x = 0; x < $rootScope.canCookStuf.length; x++) {
        for (var y = 0; y < $rootScope.canCookStuf[x].ingrd.length; y++) {
          if($rootScope.selectedIngr.indexOf($rootScope.canCookStuf[x].ingrd[y]) !== -1) {
            $rootScope.canCookStuf[x].matchingIngrd++;
          }
        }
      }

    //console.log($rootScope.canCookStuf[1].matchingIngrd);
    /*for ingrdCount*/

    /*$scope.goToRecip = function(val){
      console.log(val);
      $state.go("recipe");
    }*/


  });
