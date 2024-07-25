import React, { useState } from 'react';

const OneTimePadDecryption = () => {
  const [cipherText, setCipherText] = useState('');
  const [key, setKey] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleCipherTextChange = (event) => {
    const text = event.target.value.toUpperCase();
    setCipherText(text);
    setKey(generateRandomKey(text.length));
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value.toUpperCase());
  };

  const handleDecrypt = () => {
    const decrypted = stringDecryption(cipherText, key);
    setDecryptedText(decrypted);
  };

  const stringDecryption = (s, key) => {
    let plainText = "";
    let plain = [];
    for (let i = 0; i < key.length; i++) {
      plain[i] = s.charCodeAt(i) - 'A'.charCodeAt(0) - (key.charCodeAt(i) - 'A'.charCodeAt(0));
    }
    for (let i = 0; i < key.length; i++) {
      if (plain[i] < 0) {
        plain[i] = plain[i] + 26;
      }
    }
    for (let i = 0; i < key.length; i++) {
      let x = plain[i] + 'A'.charCodeAt(0);
      plainText += String.fromCharCode(x);
    }
    return plainText;
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

export default OneTimePadDecryption;
