var myTicTacToe = angular.module('myTicTacToe', []);

myTicTacToe.controller('ticTacToeController', ['$scope', function($scope) {

  $scope.board = [
    [ { value: '-' }, { value: '-' }, { value: '-' } ],
    [ { value: '-' }, { value: '-' }, { value: '-' } ],
    [ { value: '-' }, { value: '-' }, { value: '-' } ]
  ];

  $scope.reset = function() {
    $scope.board.forEach(function(line){
      line.forEach(function(tile){
        return tile.value = '-';
      })
    });
    $scope.currentPlayer = 'X';
    $scope.winner = false;
    $scope.cat = false;
  };

  $scope.reset();

  $scope.isTaken = function(cell) {
    return cell.value !== '-';
  };

  var checkForMatch = function(cell1, cell2, cell3) {
    return cell1.value === cell2.value &&
           cell1.value === cell3.value &&
           cell1.value !== '-';
  };

  var checkForEndOfGame = function() {
    var board = $scope.board;
    var checker = []

    var rowMatch = checkForMatch(board[0][0], board[0][1], board[0][2]) || checkForMatch(board[1][0], board[1][1], board[1][2]) || checkForMatch(board[2][0], board[2][1], board[2][2]);

    var columnMatch = checkForMatch(board[0][0], board[1][0], board[2][0]) || checkForMatch(board[0][1], board[1][1], board[2][1]) || checkForMatch(board[0][2], board[1][2], board[2][2]);

    var diagonalMatch = checkForMatch(board[0][0], board[1][1], board[2][2]) || checkForMatch(board[0][2], board[1][1], board[2][0]);

    $scope.winner = rowMatch || columnMatch || diagonalMatch;

    $scope.board.forEach(function(line){
      line.forEach(function(tile){
        checker.push(tile.value)
      })
    });

    $scope.cat = !checker.some(function(e){
      return e === '-';
    });

    return $scope.winner || $scope.cat;
  };

  $scope.move = function(cell) {
    if (checkForEndOfGame() === false) {
        cell.value = $scope.currentPlayer;
        if (checkForEndOfGame() === false) {
          $scope.currentPlayer = $scope.currentPlayer === 'X' ? 'O' : 'X';
        }
    }
  };

}]);
