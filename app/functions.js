if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
      return fn.apply(obj);
    },

    functionFunction : function(str) {
      return function(str2) {
        return str + ', ' + str2;
      };
    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {
      return function() {
        return (function() {
          return fn.apply(this, [str1, str2]) + '!!';
        }());
      };
    },

    useArguments : function() {
      var sum = 0;
      for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
      }
      return sum;
    },

    callIt : function(fn) {
      // Convert the arguments object into a real array.
      var args = Array.prototype.slice.call(arguments);
      args = args.splice(1);
      return fn.apply(this, args);
    },

    partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments);
      args = args.splice(1);
      return function() {
        var args2 = Array.prototype.slice.call(arguments);
        args = args.concat(args2);
        return (function() {
          return fn.apply(this, args);
        }());
      };
    },

    curryIt : function(fn) {

    }
  };
});
