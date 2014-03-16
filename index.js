Function.prototype.bindRight = function (thisArg /*, rightArgs... */) {
  var rightArgs = Array.prototype.slice.call(arguments, 1);
  var fn = this;
  return function (/* args.. */) {
    var args = Array.prototype.slice.call(arguments).concat(rightArgs);
    return fn.apply(thisArg, args);
  };
};