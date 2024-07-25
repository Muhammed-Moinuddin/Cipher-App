// RailFenceDecryption.js
import React, { useState } from 'react';

const RailFenceDecryption = () => {
  const [cipherText, setCipherText] = useState('');
  const [rails, setRails] = useState(3);
  const [decryptedText, setDecryptedText] = useState('');

  const handleCipherTextChange = (event) => {
    setCipherText(event.target.value);
  };

  const handleRailsChange = (event) => {
    setRails(parseInt(event.target.value, 10));
  };

  const handleDecrypt = () => {
    const decrypted = railFenceDecrypt(cipherText, rails);
    setDecryptedText(decrypted);
  };

  const railFenceDecrypt = (text, rails) => {
    if (rails === 1) return text;

    const railArray = Array.from({ length: rails }, () => []);
    const textLength = text.length;
    let direction = 1;
    let row = 0;
    let index = 0;

    // Initialize rail array with placeholders
    for (let char of text) {
      railArray[row].push(char);
      row += direction;
      if (row === 0 || row === rails - 1) direction *= -1;
    }

    // Fill the rail array with actual characters
    for (let i = 0; i < rails; i++) {
      for (let j = 0; j < railArray[i].length; j++) {
        railArray[i][j] = text[index++];
      }
    }

    let decryptedText = '';
    row = 0;
    direction = 1;

    // Read the rail array in zigzag manner
    for (let i = 0; i < textLength; i++) {
      decryptedText += railArray[row].shift();
      row += direction;
      if (row === 0 || row === rails - 1) direction *= -1;
    }

    return decryptedText;
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

      <label className="block mb-2 text-gray-600" htmlFor="rails">
        Enter Number of Rails:
      </label>
      <input
        type="number"
        id="rails"
        value={rails}
        onChange={handleRailsChange}
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

export default RailFenceDecryption;
