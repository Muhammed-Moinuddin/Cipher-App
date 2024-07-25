import React, { useState } from 'react';

const CaesarEncryption = () => {
  const [plainText, setPlainText] = useState('');
  const [shift, setShift] = useState(3); // Default shift value is 3
  const [encryptedText, setEncryptedText] = useState('');

  const handlePlainTextChange = (event) => {
    setPlainText(event.target.value); 
  };

  const handleShiftChange = (event) => {
    setShift(parseInt(event.target.value, 10)); //parsing string to Integer and integer should be of base 10 (decimal)
  };

  const handleEncrypt = () => {
    const encrypted = caesarCipherEncrypt(plainText, shift);
    setEncryptedText(encrypted);
  };

  const caesarCipherEncrypt = (text, shift) => {
    return text
      .split('')
      .map((char) => {
        if (char.match(/[a-zA-Z]/)) {
          const isUpperCase = char === char.toUpperCase();
          const alphabet = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';
          const index = alphabet.indexOf(char);
          const shiftedIndex = (index + shift) % 26;
          return alphabet[shiftedIndex];
        } else {
          return char;
        }
      })
      .join('');
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

      <label className="block mb-2 text-gray-600" htmlFor="shift">
        Enter Shift Value:
      </label>
      <input
        type="number"
        id="shift"
        value={shift}
        onChange={handleShiftChange}
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

export default CaesarEncryption;
