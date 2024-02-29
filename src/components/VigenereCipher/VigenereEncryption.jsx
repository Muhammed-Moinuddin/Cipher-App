import React, { useState } from 'react';

const VigenereEncryption = () => {
  const [plainText, setPlainText] = useState('');
  const [keyword, setKeyword] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const handlePlainTextChange = (event) => {
    setPlainText(event.target.value);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleEncrypt = () => {
    const encrypted = vigenereCipherEncrypt(plainText, keyword);
    setEncryptedText(encrypted);
  };

  const vigenereCipherEncrypt = (text, keyword) => {
    let result = '';
    let keywordIndex = 0;
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
  
      if (char.match(/[a-zA-Z]/)) {
        const isUpperCase = char === char.toUpperCase();
        const alphabet = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';
  
        const keywordChar = keyword[keywordIndex % keyword.length];
        keywordIndex++;
  
        const keywordIndexInAlphabet = alphabet.indexOf(keywordChar);
        const charIndex = alphabet.indexOf(char);
  
        const shiftedIndex = (charIndex + keywordIndexInAlphabet) % 26;
        result += alphabet[shiftedIndex];
      } else {
        // Preserve non-alphabetic characters (e.g., spaces, punctuation)
        result += char;
      }
    }
  
    return result;
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

      <label className="block mb-2 text-gray-600" htmlFor="keyword">
        Enter Keyword:
      </label>
      <input
        type="text"
        id="keyword"
        value={keyword}
        onChange={handleKeywordChange}
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

export default VigenereEncryption;
