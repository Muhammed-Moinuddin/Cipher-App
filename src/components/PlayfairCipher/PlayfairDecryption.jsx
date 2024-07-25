import React, { useState } from 'react';

const PlayfairDecryption = () => {
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
    const decrypted = playfairDecrypt(cipherText, key);
    setDecryptedText(decrypted);
  };

  const playfairDecrypt = (text, key) => {
    const sanitizedText = text.toUpperCase().replace(/[^A-Z]/g, '');
    const sanitizedKey = key.replace(/j/g, 'i').toUpperCase().replace(/[^A-Z]/g, '');
    const matrix = generateKeyMatrix(sanitizedKey);

    let decryptedText = '';
    for (let i = 0; i < sanitizedText.length; i += 2) {
      let pair = sanitizedText.slice(i, i + 2);

      const pos1 = findPosition(pair[0], matrix);
      const pos2 = findPosition(pair[1], matrix);

      if (pos1.row === pos2.row) {
        decryptedText += matrix[pos1.row][(pos1.col + 4) % 5];
        decryptedText += matrix[pos2.row][(pos2.col + 4) % 5];
      } else if (pos1.col === pos2.col) {
        decryptedText += matrix[(pos1.row + 4) % 5][pos1.col];
        decryptedText += matrix[(pos2.row + 4) % 5][pos2.col];
      } else {
        decryptedText += matrix[pos1.row][pos2.col];
        decryptedText += matrix[pos2.row][pos1.col];
      }
    }

    // Remove padding 'X' if it was used for encryption
    // Only remove 'X' if it is at the end or preceded by the same character
    let finalDecryptedText = '';
    for (let i = 0; i < decryptedText.length; i++) {
      if (decryptedText[i] === 'X') {
        // Check if 'X' was used as padding
        if (i === decryptedText.length - 1 || decryptedText[i - 1] === decryptedText[i + 1]) {
          continue;
        }
      }
      finalDecryptedText += decryptedText[i];
    }

    return finalDecryptedText;
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

export default PlayfairDecryption;
