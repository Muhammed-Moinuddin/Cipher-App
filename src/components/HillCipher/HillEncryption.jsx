// HillEncryption.js
import React, { useState } from 'react';

// Utility functions
const charToIndex = (char) => char.charCodeAt(0) - 'A'.charCodeAt(0);
const indexToChar = (index) => String.fromCharCode(index + 'A'.charCodeAt(0));

const hillEncrypt = (text, key) => {
  const size = Math.sqrt(key.length);
  if (size % 1 !== 0) {
    throw new Error('Key length must be a perfect square.');
  }

  const matrix = generateKeyMatrix(key, size);
  let encryptedText = '';

  // Encrypt each block of text
  for (let i = 0; i < text.length; i += size) {
    const block = text.slice(i, i + size).padEnd(size, 'X'); // Padding if block size < matrix size
    const encryptedBlock = multiplyMatrixVector(matrix, block, size);
    encryptedText += encryptedBlock.join('');
  }

  return encryptedText;
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

const HillEncryption = () => {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value.toUpperCase());
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value.toUpperCase());
  };

  const handleEncrypt = () => {
    try {
      const encrypted = hillEncrypt(text, key);
      setEncryptedText(encrypted);
    } catch (error) {
      console.error("Encryption failed:", error);
      setEncryptedText("Error during encryption.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md mt-8">
      <label className="block mb-2 text-gray-600" htmlFor="text">
        Enter Plain Text:
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

      <button onClick={handleEncrypt} className="w-full bg-indigo-600 text-white rounded-md py-2">
        Encrypt
      </button>

      {encryptedText && (
        <div className="mt-4">
          <p className="mb-2 text-gray-600">Encrypted Text:</p>
          <div className="border border-gray-300 px-3 py-2 rounded-md">{encryptedText}</div>
        </div>
      )}
    </div>
  );
};

export default HillEncryption;
