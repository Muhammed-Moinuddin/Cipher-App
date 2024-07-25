// HillDecryption.js
import React, { useState } from 'react';

// Utility functions
const charToIndex = (char) => char.charCodeAt(0) - 'A'.charCodeAt(0);
const indexToChar = (index) => String.fromCharCode(index + 'A'.charCodeAt(0));

const hillDecrypt = (text, key) => {
  const size = Math.sqrt(key.length);
  if (size % 1 !== 0) {
    throw new Error('Key length must be a perfect square.');
  }

  const matrix = generateKeyMatrix(key, size);
  const inverseMatrix = invertMatrix(matrix, size);
  let decryptedText = '';

  // Decrypt each block of text
  for (let i = 0; i < text.length; i += size) {
    const block = text.slice(i, i + size);
    const decryptedBlock = multiplyMatrixVector(inverseMatrix, block, size);
    decryptedText += decryptedBlock.join('');
  }

  return decryptedText.replace(/X+$/, ''); // Remove padding
};

const generateKeyMatrix = (key, size) => {
  const matrix = [];
  for (let i = 0; i < size; i++) {
    matrix.push(key.slice(i * size, (i + 1) * size).split('').map(charToIndex));
  }
  return matrix;
};

const multiplyMatrixVector = (matrix, vector, size) => {
  const result = Array(size).fill(0);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      result[i] += matrix[i][j] * charToIndex(vector[j]);
    }
    result[i] = (result[i] % 26 + 26) % 26; // Ensure result is within 0-25 range
  }
  return result.map(indexToChar);
};

const invertMatrix = (matrix, size) => {
  if (size === 2) {
    return invert2x2Matrix(matrix);
  }
  throw new Error('Matrix inversion not implemented for sizes other than 2x2.');
};

const invert2x2Matrix = (matrix) => {
  const determinant = (matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]) % 26;
  const invDeterminant = modInverse(determinant, 26);

  const inverseMatrix = [
    [(matrix[1][1] * invDeterminant) % 26, (-matrix[0][1] * invDeterminant) % 26],
    [(-matrix[1][0] * invDeterminant) % 26, (matrix[0][0] * invDeterminant) % 26]
  ];
  for (let i = 0; i < inverseMatrix.length; i++) {
    for (let j = 0; j < inverseMatrix[i].length; j++) {
      inverseMatrix[i][j] = (inverseMatrix[i][j] + 26) % 26;
    }
  }
  return inverseMatrix;
};

const modInverse = (a, m) => {
  a = a % m;
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) {
      return x;
    }
  }
  throw new Error('No modular inverse found.');
};

const HillDecryption = () => {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value.toUpperCase());
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value.toUpperCase());
  };

  const handleDecrypt = () => {
    try {
      const decrypted = hillDecrypt(text, key);
      setDecryptedText(decrypted);
    } catch (error) {
      console.error("Decryption failed:", error);
      setDecryptedText("Error during decryption.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md mt-8">
      <label className="block mb-2 text-gray-600" htmlFor="text">
        Enter Cipher Text:
      </label>
      <input
        type="text"
        id="text"
        value={text}
        onChange={handleTextChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-md mb-4"
      />

      <label className="block mb-2 text-gray-600" htmlFor="key">
        Enter Key (4 characters for 2x2 matrix):
      </label>
      <input
        type="text"
        id="key"
        value={key}
        onChange={handleKeyChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-md mb-4"
      />

      <button onClick={handleDecrypt} className="w-full bg-indigo-600 text-white rounded-md py-2">
        Decrypt
      </button>

      {decryptedText && (
        <div className="mt-4">
          <p className="mb-2 text-gray-600">Decrypted Text:</p>
          <div className="border border-gray-300 px-3 py-2 rounded-md">{decryptedText}</div>
        </div>
      )}
    </div>
  );
};

export default HillDecryption;
