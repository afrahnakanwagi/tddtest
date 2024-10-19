// test/multiplication.test.mjs

import { expect } from 'chai';

// Simple multiplication function
function multiply(num1, num2) {
    return num1 * num2;
}

// Mocha test suite
describe('Multiplication Function', () => {
    it('should return 1 when multiplying 1 by 1', () => {
        expect(multiply(1, 1)).to.equal(1);
    });

    it('should return 4 when multiplying 2 by 2', () => {
        expect(multiply(2, 2)).to.equal(4);
    });

    it('should return 9 when multiplying 3 by 3', () => {
        expect(multiply(3, 3)).to.equal(9);
    });

    it('should return 16 when multiplying 4 by 4', () => {
        expect(multiply(4, 4)).to.equal(16);
    });

    it('should return 575 when multiplying 23 by 25', () => {
        expect(multiply(23, 25)).to.equal(575);
    });

    it('should return 575 when multiplying 25 by 23', () => {
        expect(multiply(25, 23)).to.equal(575);
    });
});
