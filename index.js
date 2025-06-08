function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function named() {
      return "This is a named function";
    }
    return named;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      return "This is an anonymous function";
    };
  }
  