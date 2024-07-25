// RailFenceCipher.js
import { useState } from 'react';
import RailFenceEncryption from './RailFenceEncryption';
import RailFenceDecryption from './RailFenceDecryption';

const RailFenceCipher = () => {
  const [mode, setMode] = useState('encryption');

  const handleMode = (value) => {
    setMode(value);
  };

  return (
    <div className="relative isolate px-6 pt-1 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="font-bold text-4xl tracking-tight text-gray-900 sm:text-6xl">Rail Fence Cipher</h1>
          <p className="mt-6 text-lg leading-6 text-gray-600">
            The Rail Fence Cipher is a form of transposition cipher that rearranges the characters of the plaintext.
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
        {mode === 'encryption' ? <RailFenceEncryption /> : <RailFenceDecryption />}
      </div>
    </div>
  );
};

export default RailFenceCipher;
