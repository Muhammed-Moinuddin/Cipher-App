// Simple DES implementation in JavaScript (Educational Purposes Only)

// Basic DES Parameters (not secure, for demonstration)
const SBOX = [
    [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
    [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
    [4, 1, 14, 8, 13, 6, 11, 9, 1, 3, 4, 12, 5, 13, 7, 14],
    [11, 5, 8, 6, 9, 2, 15, 1, 14, 12, 10, 7, 13, 0, 3, 4]
];

// Permutation Tables
const IP = [58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46, 38, 30, 22, 14, 6, 64, 56, 48
    , 40, 32, 24, 16, 8, 57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 
    63, 55, 47, 39, 31, 23, 15, 7];
const IP_INV = [40, 8, 48, 16, 56, 24, 64, 32, 39, 7, 47, 15, 55, 23, 63, 31, 38, 6, 46, 14, 54, 22, 62, 30, 37, 5, 
    45, 13, 53, 21, 61, 29, 36, 4, 44, 12, 52, 20, 60, 28, 35, 3, 43, 11, 51, 19, 59, 27, 34, 2, 42, 10, 50, 18, 58,
     26, 33, 1, 41, 9, 49, 17, 57, 25];

// Convert string to binary representation
function stringToBinary(str) {
    return str.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join('');
}

// Convert binary representation to string
function binaryToString(binary) {
    return binary.match(/.{1,8}/g).map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

// DES Function
function desEncrypt(message, key) {
    const binaryMessage = stringToBinary(message);
    const binaryKey = stringToBinary(key);

    // Placeholder for DES Encryption - Just a simple transformation for demonstration
    let encryptedBinary = binaryMessage.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
    
    return binaryToString(encryptedBinary);
}

function desDecrypt(encryptedMessage, key) {
    const binaryEncryptedMessage = stringToBinary(encryptedMessage);
    const binaryKey = stringToBinary(key);

    // Placeholder for DES Decryption - Just a simple transformation for demonstration
    let decryptedBinary = binaryEncryptedMessage.split('').map(bit => (bit === '0' ? '1' : '0')).join('');
    
    return binaryToString(decryptedBinary);
}

// Example Usage
const key = '12345678'; // DES requires a key of exactly 8 bytes
const message = 'HELLO DES';

const encrypted = desEncrypt(message, key);
const decrypted = desDecrypt(encrypted, key);

console.log("Original Message:", message);
console.log("Encrypted Message:", encrypted);
console.log("Decrypted Message:", decrypted);
