// RowColumnDecryption.js
import React, { useState } from 'react';

const RowColumnDecryption = () => {
  const [cipherText, setCipherText] = useState('');
  const [key, setKey] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleCipherTextChange = (event) => {
    setCipherText(event.target.value);
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  const handleDecrypt = () => {
    const decrypted = rowColumnDecrypt(cipherText, key);
    setDecryptedText(decrypted);
  };

  const rowColumnDecrypt = (text, key) => {
    const numRows = Math.ceil(text.length / key.length);
    const sortedKey = key.split('').map((char, index) => ({ char, index })).sort((a, b) => a.char.localeCompare(b.char));
    const grid = Array.from({ length: numRows }, () => Array(key.length).fill('X'));

    let k = 0;
    for (let col of sortedKey) {
      for (let row = 0; row < numRows; row++) {
        if (k < text.length) {
          grid[row][col.index] = text[k];
          k++;
        }
      }
    }

    let decryptedText = '';
    for (let r = 0; r < numRows; r++) {
      for (let c = 0; c < key.length; c++) {
        decryptedText += grid[r][c];
      }
    }

    return decryptedText.replace(/X/g, '');
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md mt-8">
      <label className="block mb-2 text-gray-600" htmlFor="cipherText">
        Enter Cipher Text:
      </label>
      <input
        type="text"
        id="cipherText"
        value={cipherText}
        onChange={handleCipherTextChange}
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

export default RowColumnDecryption;