module.exports = function ccObscure(creditCard) {
    if (creditCard.length < 12 || creditCard.length > 16) {
        return 'Invalid Credit Card';
    }

    const obscuredPart = 'X'.repeat(creditCard.length - 4);
    const visiblePart = creditCard.slice(-4);

    return obscuredPart + visiblePart;
};
