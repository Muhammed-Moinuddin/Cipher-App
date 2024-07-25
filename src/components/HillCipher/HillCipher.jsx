// HillCipher.js
import React, { useState } from 'react';
import HillEncryption from './HillEncryption';
import HillDecryption from './HillDecryption';

const HillCipher = () => {
  const [mode, setMode] = useState('encryption'); // State for modes (encryption/decryption)

  const handleMode = (value) => {
    setMode(value);
  };

  return (
    <div className="relative isolate px-6 pt-1 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="font-bold text-4xl tracking-tight text-gray-900 sm:text-6xl">Hill Cipher</h1>
          <p className="mt-6 text-lg leading-6 text-gray-600">
            The Hill cipher is a polygraphic substitution cipher based on linear algebra. It encrypts blocks of text using matrix multiplication.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button 
              onClick={() => handleMode('encryption')} 
              className="flex rounded-md bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline"
            >
              Encrypt
            </button>
            <button 
              onClick={() => handleMode('decryption')} 
              className="flex rounded-md bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline"
            >
              Decrypt
            </button>
          </div>
        </div>
        {mode === 'encryption' ? <HillEncryption /> : <HillDecryption />}
      </div>
    </div>
  );
};

export default HillCipher;
