(function() {
/* globals define, Ladda */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('ladda', { 'default': Ladda});
})();
