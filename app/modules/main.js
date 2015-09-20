require.config({
  paths: {
    angular: '/bower_components/angular/angular.min',
    underscore: '/bower_components/underscore/underscore-min',
    raphael: '/bower_components/raphael/raphael-min',
    jsd: '/bower_components/js-sequence-diagrams/build/sequence-diagram-min',
    rgbcolor: '/bower_components/canvg/rgbcolor',
    stackblur: '/bower_components/canvg/StackBlur',
    canvg: '/bower_components/canvg/canvg',
  },
  shim: {
    angular: {exports: 'angular'},
    underscore: {exports: '_'},
    raphael: {exports: 'Raphael'},
    jsd: {deps: ['underscore', 'raphael'], exports: 'Diagram'},
    rgbcolor: {exports: 'RGBColor'},
    stackblur: {exports: 'stackBlur'},
    canvg: {deps: ['rgbcolor', 'stackblur'], exports: 'canvg'},
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
