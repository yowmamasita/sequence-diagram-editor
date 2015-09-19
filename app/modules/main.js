require.config({
  paths: {
    underscore: '/bower_components/underscore/underscore-min',
    raphael: '/bower_components/raphael/raphael-min',
    jsd: '/bower_components/js-sequence-diagrams/build/sequence-diagram-min',
    angular: '/bower_components/angular/angular.min',
  },
  shim: {
    'underscore': {exports: 'underscore'},
    'raphael': {exports: 'Raphael'},
    'jsd': {deps: ['underscore', 'raphael'], exports: 'Diagram'},
    'angular': {exports: 'angular'},
  },
  packages: [],
  waitSeconds: 60
});
require([
  'angular',
  'underscore',
  'raphael',
  'jsd',
  'home/home.module'
], function (angular) {
  'use strict';

  angular.bootstrap(document,['homeModule']);

});
