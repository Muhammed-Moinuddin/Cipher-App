import React, { useState } from 'react';

const PlayfairEncryption = () => {
  const [plainText, setPlainText] = useState('');
  const [key, setKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const handlePlainTextChange = (event) => {
    setPlainText(event.target.value);
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  const handleEncrypt = () => {
    const encrypted = playfairEncrypt(plainText, key);
    setEncryptedText(encrypted);
  };

  const playfairEncrypt = (text, key) => {
    const sanitizedText = text.replace(/j/g, 'i').toUpperCase().replace(/[^A-Z]/g, '');
    const sanitizedKey = key.replace(/j/g, 'i').toUpperCase().replace(/[^A-Z]/g, '');
    const matrix = generateKeyMatrix(sanitizedKey);

    let encryptedText = '';
    for (let i = 0; i < sanitizedText.length; i += 2) {
      let pair = sanitizedText.slice(i, i + 2);
      if (pair.length < 2) pair += 'X';
      if (pair[0] === pair[1]) pair = pair[0] + 'X';

      const pos1 = findPosition(pair[0], matrix);
      const pos2 = findPosition(pair[1], matrix);

      if (pos1.row === pos2.row) {
        encryptedText += matrix[pos1.row][(pos1.col + 1) % 5];
        encryptedText += matrix[pos2.row][(pos2.col + 1) % 5];
      } else if (pos1.col === pos2.col) {
        encryptedText += matrix[(pos1.row + 1) % 5][pos1.col];
        encryptedText += matrix[(pos2.row + 1) % 5][pos2.col];
      } else {
        encryptedText += matrix[pos1.row][pos2.col];
        encryptedText += matrix[pos2.row][pos1.col];
      }
    }

    return encryptedText;
  };

  const generateKeyMatrix = (key) => {
    const alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'; // 'J' is omitted
    let keyString = key + alphabet;
    keyString = Array.from(new Set(keyString)).join('');

    let matrix = [];
    for (let i = 0; i < 5; i++) {
      matrix.push(keyString.slice(i * 5, (i + 1) * 5).split(''));
    }
    return matrix;
  };

  const findPosition = (char, matrix) => {
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (matrix[row][col] === char) {
          return { row, col };
        }
      }
    }
    return null;
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md mt-8">
      <label className="block mb-2 text-gray-600" htmlFor="plainText">
        Enter Plain Text:
      </label>
      <input
        type="text"
        id="plainText"
        value={plainText}
        onChange={handlePlainTextChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-md mb-4"
      />

      <label className="block mb-2 text-gray-600" htmlFor="key">
        Enter Key:
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

export default PlayfairEncryption;
