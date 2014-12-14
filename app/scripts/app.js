(function(document) {
  'use strict';

  var tabs = document.querySelector('paper-tabs');
  var list = document.querySelector('post-list');

  tabs.addEventListener('core-select', function() {
    list.show = tabs.selected;
  });

  document.addEventListener('polymer-ready', function() {
    list.show = tabs.selected = 'public';
  });

})(wrap(document));
