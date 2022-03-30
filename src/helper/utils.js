export const indexToAlpha = (num = 1) => {
    // ASCII value of first character
    const A = 'A'.charCodeAt(0);
    let numberToCharacter = number => {
       return String.fromCharCode(A + number);
    };
    return numberToCharacter(num);
 };
 