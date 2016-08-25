var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Arithmetic = require('../app/arithmetic.js');

describe('Arithmetic', function () {
	it('One plus one is equal to 2', function () {
		//var arithmetic = new Arithmetic([]);
		var result = Arithmetic.add(1, 1);
		expect(result).to.equal(2);
	});

	it('Zero plus zero is equal to zero', function () {
		var result = Arithmetic.add(0, 0);
		expect(result).to.equal(0);
	});

	it('The result of adding a number to itself is the double', function () {
		for (var i = 0; i < 1000; i++) {
			var result = Arithmetic.add(i, i);
			expect(result).to.equal(i * 2);
		}
	});

	it('Adding the complementary number results in 0', function () {
		for (var i = 0; i < 1000; i++) {
			var result = Arithmetic.add(i, -i);
			expect(result).to.equal(0);
		}
	});

	it('The result of adding two negative numbers is a negative number', function () {
		var result = Arithmetic.add(-1, -2);
		expect(result).to.be.below(0);
	});
});
