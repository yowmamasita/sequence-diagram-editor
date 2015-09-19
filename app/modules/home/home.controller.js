define(['jsd', 'canvg'], function (Diagram, canvg) {
  'use strict';

  controller.$inject = ['$scope'];

  function controller(scope) {
    var self = this;
    self.source_code = 'A->B: Hello World!';

    var diagram_div = document.getElementById('diagram');

    scope.$watch(function() { return self.source_code; }, function(val) {
      if (!val) return;

      diagram_div.innerHTML = '';
      Diagram.parse(val).drawSVG('diagram', {theme: 'hand'});
      var svg = diagram_div.querySelector('svg');
      canvg(document.getElementById('canvas'), svg.outerHTML);
    });
  }

  return controller;
});
