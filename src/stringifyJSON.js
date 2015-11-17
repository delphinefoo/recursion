// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number') {
    return '' + obj;
  }

  if (obj === null) {
    return '' + null;
  }

  if (typeof obj === 'boolean') {
    return '' + obj;
  }

  if (typeof obj === 'string'){
    return '"' + obj + '"';
  }

  // if (obj.length === 0) {
  //   return '[]';
  // }

  if (Array.isArray(obj)) {
    // return   "[" + obj + "]" ;
    var container = [];
    for (var i = 0; i < obj.length; i++) {
      container.push(stringifyJSON(obj[i]));
    }
    return '[' + container + ']';
  }

  if (obj !== null && typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return "{}";
    }

    else {
      for (var key in obj) {
      var keyVar = stringifyJSON(key);
      var valVar = stringifyJSON(obj[key]);

     }
     return '{'+ keyVar + ':' + valVar + '}';
    }



  }


};



