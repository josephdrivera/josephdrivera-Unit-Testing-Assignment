// Requirements

// TDD - create tests for a module that will:
// obscure credit card number excpt the last 4 digits
// Test make sure the function obscures credit card numbers that are between / the length of 12 and 16 digit:
//input: 123456789012
// output: XXXXXXXXXXXX9012



const ccObscure = require('./cc_obscure');

describe('Credit Card Obfuscation', () => {

    // Positive Test
    it('should obscure a credit card number that is 12 digits long', () => {
        expect(ccObscure('123456789012')).toBe('XXXXXXXX9012');
    });

    // Negative Tests
    it('should return "Invalid Credit Card" for less than 12 digits', () => {
        expect(ccObscure('12345')).toBe('Invalid Credit Card');
    });

    it('should return "Invalid Credit Card" for more than 16 digits', () => {
        expect(ccObscure('12345678901234567')).toBe('Invalid Credit Card');
    });

});
