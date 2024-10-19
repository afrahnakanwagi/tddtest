// test/multiply.test.js

const { expect } = require('chai');

// Simple multiplication function
function multiply(a, b) {
    return a * b;
}

// Mocha test suite
describe('Multiplication Function', () => {
    it('should return 1 when multiplying 1 by 1', () => {
        expect(multiply(1, 1)).to.equal(1);
    });
});
