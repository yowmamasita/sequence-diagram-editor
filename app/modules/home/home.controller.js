define([], function () {
  'use strict';

  controller.$inject = ['$scope'];

  function controller($scope) {
    var _this = this;
    _this.message = 'Hello World!';
    $scope.message = 'I\'m a message in $scope';
  }

  return controller;
});