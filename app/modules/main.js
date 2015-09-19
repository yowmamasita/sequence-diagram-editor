require.config({
  paths: {
    angular: '/bower_components/angular/angular.min'
  },
  shim: {
    'angular': {exports: 'angular'}
  },
  packages: [],
  waitSeconds: 60
});
require([
  'angular',
  'home/home.module'
], function (angular) {
  'use strict';

  angular.bootstrap(document,['homeModule']);

});
