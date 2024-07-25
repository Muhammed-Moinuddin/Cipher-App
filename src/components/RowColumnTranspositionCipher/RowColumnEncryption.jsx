// RowColumnEncryption.js
import React, { useState } from 'react';

const RowColumnEncryption = () => {
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
    const encrypted = rowColumnEncrypt(plainText, key);
    setEncryptedText(encrypted);
  };

  const rowColumnEncrypt = (text, key) => {
    const numRows = Math.ceil(text.length / key.length);
    const grid = Array.from({ length: numRows }, () => Array(key.length).fill('X'));

    let k = 0;
    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < key.length; c++) {
        if (k < text.length) {
          grid[r][c] = text[k];
          k++;
        }
      }
    }

    const sortedKey = key.split('').map((char, index) => ({ char, index })).sort((a, b) => a.char.localeCompare(b.char));
    let encryptedText = '';

    for (let col of sortedKey) {
      for (let row = 0; row < numRows; row++) {
        encryptedText += grid[row][col.index];
      }
    }

    return encryptedText;
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

export default RowColumnEncryption;
