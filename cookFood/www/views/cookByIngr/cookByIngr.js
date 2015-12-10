/**
 * Created by haider on 11/20/2015.
 */
angular.module('foodApp')

  .controller('cookByIngrController', function($scope, $rootScope, recipeDetails, $state){

    $scope.recipeDetails = recipeDetails;

    $rootScope.allIngr = [];
    $rootScope.selectedIngr = [];

    for(var i = 0; i < $scope.recipeDetails.length; i++){
      for(var j = 0; j < $scope.recipeDetails[i].ingrd.length; j++){
        if($rootScope.allIngr.indexOf($scope.recipeDetails[i].ingrd[j]) == -1){
          $rootScope.allIngr.push($scope.recipeDetails[i].ingrd[j]);
        }
      }
    }


    $scope.hide = true;
    /*code for selecting and making them chips*/
    $scope.select = function (ingr){
      $scope.selectedIngr.push(ingr);
      var indexOfIngr = $scope.allIngr.indexOf(ingr);
      //console.log(indexOfIngr);
      $scope.allIngr.splice(indexOfIngr, 1);
      $scope.searchIngr = "";



    };
    /*code for selecting and making them chips*/



    /*code for removing biscuits and adding them again to ingr list*/


    $scope.removeFromSelectedList = function (selectedIngr){
      $rootScope.allIngr.push(selectedIngr);
      var indexOfIngr = $scope.selectedIngr.indexOf(selectedIngr);
      //console.log(indexOfIngr);
      $scope.selectedIngr.splice(indexOfIngr, 1);
    };
    /*code for removing biscuits and adding them again to ingr list*/
    /*$rootScope.selectedIngre = [];*/
    $scope.checkTheMeal = function (){



      $state.go("tabs.availRecepie");

    }


  });
