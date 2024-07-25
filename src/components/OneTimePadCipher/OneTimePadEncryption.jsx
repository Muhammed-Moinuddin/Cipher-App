import React, { useState } from 'react';

const OneTimePadEncryption = () => {
  const [plainText, setPlainText] = useState('');
  const [key, setKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const handlePlainTextChange = (event) => {
    const text = event.target.value.toUpperCase();
    setPlainText(text);
    setKey(generateRandomKey(text.length));
  };

  const generateRandomKey = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const handleEncrypt = () => {
    const encrypted = stringEncryption(plainText, key);
    setEncryptedText(encrypted);
  };

  const stringEncryption = (text, key) => {
    let cipherText = "";
    let cipher = [];
    for (let i = 0; i < key.length; i++) {
      cipher[i] = text.charCodeAt(i) - 'A'.charCodeAt(0) + key.charCodeAt(i) - 'A'.charCodeAt(0);
    }
    for (let i = 0; i < key.length; i++) {
      if (cipher[i] > 25) {
        cipher[i] = cipher[i] - 26;
      }
    }
    for (let i = 0; i < key.length; i++) {
      let x = cipher[i] + 'A'.charCodeAt(0);
      cipherText += String.fromCharCode(x);
    }
    return cipherText;
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
        <p>As it is assignment: Showing key so that it can be crosschecked manually</p>
        <br />
         Generated Key:
      </label>
      <input
        type="text"
        id="key"
        value={key}
        disabled
        className="w-full border border-gray-300 px-3 py-2 rounded-md mb-4 bg-gray-100"
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

export default OneTimePadEncryption;
