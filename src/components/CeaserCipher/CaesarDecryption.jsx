import React, { useState } from 'react';

const CaesarDecryption = () => {
  const [encryptedText, setEncryptedText] = useState('');
  const [shift, setShift] = useState(3); // Default shift value is 3
  const [decryptedText, setDecryptedText] = useState('');

  const handleEncryptedTextChange = (event) => {
    setEncryptedText(event.target.value);
  };

  const handleShiftChange = (event) => {
    setShift(parseInt(event.target.value, 10));
  };

  const handleDecrypt = () => {
    // Implement Caesar Cipher decryption logic
    const decrypted = caesarCipherDecrypt(encryptedText, shift);
    setDecryptedText(decrypted);
  };

  const caesarCipherDecrypt = (text, shift) => {
    return text
      .split('')
      .map((char) => {
        if (char.match(/[a-zA-Z]/)) {
          const isUpperCase = char === char.toUpperCase();
          const alphabet = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';
          const index = alphabet.indexOf(char);
          const shiftedIndex = (index - shift + 26) % 26;
          return alphabet[shiftedIndex];
        } else {
          return char;
        }
      })
      .join('');
  };
  

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md mt-8">
      <label className="block mb-2 text-gray-600" htmlFor="encryptedText">
        Enter Encrypted Text:
      </label>
      <input
        type="text"
        id="encryptedText"
        value={encryptedText}
        onChange={handleEncryptedTextChange}
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

export default CaesarDecryption;
