if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      var regex = /\d/;
      return regex.test(str);
    },

    containsRepeatingLetter : function(str) {
      var regex = /([a-zA-Z])\1/;
      return regex.test(str);
    },

    endsWithVowel : function(str) {
      var regex = /[aeiou]$/i;
      return regex.test(str);
    },

    captureThreeNumbers : function(str) {
      var regex = /(\d{3})/;
      var matches = str.match(regex);
      if (matches) {
        return matches[0];
      } else {
        return false;
      }
    },

    matchesPattern : function(str) {
      var regex = /^\d{3}-\d{3}-\d{4}$/;
      var matches = str.match(regex);
      if (matches) {
        return true;
      } else {
        return false;
      }
    },
    isUSD : function(str) {
      // TODO: finish writing
      var regex = /^\$[\d,]+(.\d{2})?$/;
      var matches = str.match(regex);
      if (matches) {
        return true;
      } else {
        return false;
      }
    }
  };
});
