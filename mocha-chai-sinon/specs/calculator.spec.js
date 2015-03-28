var Calculator = require('../lib/calculator');

describe('When adding one and two using the calculator', function () {
    var calculator;

    before(function () {
        calculator = new Calculator();
    });

    it('should result in three using the return style approach', function () {
        var result = calculator.add(1, 2);
        expect(result).equal(3);
    });
});