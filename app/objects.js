if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {

    },

    iterate : function(obj) {
      var answers = [];
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          answers.push(i + ': ' + obj[i]);
        }
      }
      return answers;
    }
  };
});
