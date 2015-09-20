define([
  'angular',
  './home.controller'
], function (angular, controller) {
  'use strict';

  angular.module('homeModule', [])
    .controller('HomeController', controller);
});
