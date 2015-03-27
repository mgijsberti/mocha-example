var helper = require('../source/helper.js');
var expect = require("chai").expect;

describe("test helper", function(){
   describe("#concat()", function(){
       it("should concat 2 strings", function(){
           expect(helper.concat('a','b')).to.equal('ab');
       });
   });
});