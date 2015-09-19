define([
  'home/home.controller',
  'home/home.service',
  'angular'
], function (controller, service) {
  'use strict';

  angular.module('homeModule', [])
    .controller('HomeController', controller)
    .service('homeService', service);
});
