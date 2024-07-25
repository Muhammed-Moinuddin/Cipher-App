// RailFenceEncryption.js
import React, { useState } from 'react';

const RailFenceEncryption = () => {
  const [plainText, setPlainText] = useState('');
  const [rails, setRails] = useState(3);
  const [encryptedText, setEncryptedText] = useState('');

  const handlePlainTextChange = (event) => {
    setPlainText(event.target.value);
  };

  const handleRailsChange = (event) => {
    setRails(parseInt(event.target.value, 10));
  };

  const handleEncrypt = () => {
    const encrypted = railFenceEncrypt(plainText, rails);
    setEncryptedText(encrypted);
  };

  const railFenceEncrypt = (text, rails) => {
    if (rails === 1) return text;

    const railArray = Array.from({ length: rails }, () => []);
    let direction = 1;
    let row = 0;

    for (let char of text) {
      railArray[row].push(char);
      row += direction;
      if (row === 0 || row === rails - 1) direction *= -1;
    }

    return railArray.flat().join('');
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

export default RailFenceEncryption;
