
var app = angular.module("Hangmanapp",[]);
app.controller("gamecontroller",['$scope',function($scope){

    var words =["anushka","ashi","yash","mummy","papa","vanshika","samriddhi"];
    $scope.incorrectletterschosen = [];
    $scope.correctletterschosen = [];
    $scope.guess = 6;
    $scope.displayword = '';
    $scope.input = {
        letter : ''
    }

    var gue = $scope.guess;

    var selectrandomword = function(){
        var index = Math.round(Math.random()*words.length);
        return words[index];
    }

    var newgame = function(){

        $scope.incorrectletterschosen = [];
        $scope.correctletterschosen = [];
        $scope.guess = 6;
        $scope.displayword = '';
         selectedword = selectrandomword();
         var tempdisplayword = '';

         for(var i=0;i<selectedword.length;i++){
             tempdisplayword +='*';
         }
         $scope.displayword = tempdisplayword;
    }

    $scope.letterchosen = function(){
        
      for( i=0;i<$scope.correctletterschosen.length;i++){
            if($scope.correctletterschosen[i].toUpperCase() == $scope.input.letter.toUpperCase()){
                $scope.input.letter = '';
                return;
            }
        }

        for( i=0;i<$scope.incorrectletterschosen.length;i++){
            if($scope.incorrectletterschosen[i].toUpperCase() == $scope.input.letter.toUpperCase()){
                $scope.input.letter = '';
                return;
            }
        } 

        var correct = false;
        for( var i=0;i<selectedword.length;i++){
            if(selectedword[i].toUpperCase() == $scope.input.letter.toUpperCase()){
                $scope.displayword = $scope.displayword.slice(0,i)+$scope.input.letter.toUpperCase()+$scope.displayword.slice(i+1);
                correct = true;
            }
        }

        if(correct){
            $scope.correctletterschosen.push($scope.input.letter.toUpperCase());
        }
        else{
            $scope.guess--;
            $scope.incorrectletterschosen.push($scope.input.letter.toUpperCase());
        }

        $scope.input.letter = '';
        if($scope.guess ==0){
            alert("you lost!");
            newgame();
        }
        if($scope.displayword.indexOf("*")==-1){
            alert("you won!");
            newgame();
        }
    }

    newgame();
}]);