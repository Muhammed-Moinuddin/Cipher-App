// RowColumnCipher.js
import { useState } from 'react';
import RowColumnEncryption from './RowColumnEncryption';
import RowColumnDecryption from './RowColumnDecryption';

const RowColumnCipher = () => {
  const [mode, setMode] = useState('encryption');

  const handleMode = (value) => {
    setMode(value);
  };

  return (
    <div className="relative isolate px-6 pt-1 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="font-bold text-4xl tracking-tight text-gray-900 sm:text-6xl">Row Column Transposition Cipher</h1>
          <p className="mt-6 text-lg leading-6 text-gray-600">
            The Row-Column Transposition Cipher is a method of encrypting text by writing it into a grid, then reading it off in a different order.
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
        {mode === 'encryption' ? <RowColumnEncryption /> : <RowColumnDecryption />}
      </div>
    </div>
  );
};

export default RowColumnCipher;