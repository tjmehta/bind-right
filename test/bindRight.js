var should = require('should');

describe('bindRight', function () {
  before(function () {
    require('../index');
  });
  it('should extend the function prototype', function () {
    should.exist(Function.prototype.bindRight);
  });
  it('should bind arguments to the right of a Function', function () {
    var args;
    var thisArg = {};
    var returnThis = function () {
      return this;
    };
    var bound = returnThis.bindRight(thisArg);
    bound().should.equal(thisArg);
  });
  it('should bind arguments to the right of a function', function () {
    var args;
    var setArgs = function () {
      args = Array.prototype.slice.call(arguments);
    };
    var setArgs456 = setArgs.bindRight(null, 4, 5, 6);
    setArgs456(1, 2, 3);

    args.should.eql([1,2,3,4,5,6]);
  });
});