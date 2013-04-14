if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      var count = 0;
      for (var i = 0; i < arr.length; i++) {
        count += arr[i];
      }
      return count;
    },

    remove : function(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1);
        }
      }
      return arr;
    },
    
    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    concat : function(arr1, arr2) {
      var arr = arr1.concat(arr2);
      return arr;
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var count = 0;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          count++;
        }
      }
      return count;
    },

    duplicates : function(arr) {

    },

    square : function(arr) {
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
      }
      return arr;
    },

    findAllOccurrences : function(arr, target) {
      var indices = [];
      var startIndex = 0;
      var currentIndex = arr.indexOf(target, startIndex);
      
      while (currentIndex !== -1) {
        indices.push(currentIndex);
        startIndex = currentIndex + 1;
        currentIndex = arr.indexOf(target, startIndex);
      }

      return indices;
    }
  };
});
