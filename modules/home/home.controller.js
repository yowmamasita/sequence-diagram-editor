define(['jsd', 'canvg'], function (Diagram, canvg) {
  'use strict';

  controller.$inject = ['$scope'];

  function controller(scope) {
    var self = this;

    self.source_code = 'Title: Here is a title\nA->B: Normal line\nB-->C: Dashed line\nNote right of C: C thinks\\nabout it..\nC->>D: Open arrow\nD-->>A: Dashed open arrow';

    var diagram_div = document.getElementById('diagram');
    var canvas = document.getElementById('canvas');

    scope.$watch(function() { return self.source_code; }, function(val) {
      if (!val) return;

      diagram_div.innerHTML = '';
      Diagram.parse(val).drawSVG('diagram', {theme: 'simple'});
      var svg = diagram_div.querySelector('svg');
      canvg(canvas, svg.outerHTML);
    });

    var editor_div = document.getElementById('editor');

    self.download_svg = function(ev) {
      var svg = diagram_div.querySelector('svg');
      var width = parseInt(svg.width.baseVal.value);
      var height = parseInt(svg.height.baseVal.value);
      var data = editor_div.innerHTML;
      var xml = '<?xml version="1.0" encoding="utf-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"><svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" xmlns:xlink="http://www.w3.org/1999/xlink"><source><![CDATA[' + data + ']]></source>' + svg.innerHTML + '</svg>';
      ev.target.setAttribute('download', 'diagram.svg');
      ev.target.setAttribute('href', 'data:image/svg+xml,' + encodeURIComponent(xml));
    }

    self.download_image = function(ev) {
      var image = canvas.toDataURL('image/png');//.replace('image/png', 'image/octet-stream');
      ev.target.setAttribute('download', 'diagram.png');
      ev.target.setAttribute('href', image);
    }
  }

  return controller;
});
