import React, { useState } from 'react';
import CaesarEncryption from './CeaserEncryption';
import CaesarDecryption from './CeaserDecryption';

const CeaserCipher = () => {
  const [mode, setMode] = useState('encryption'); // Default mode is encryption

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className="relative isolate px-6 pt-1 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Ceaser Cipher</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            It is a basic substitution cipher where each letter is shifted by a fixed number of positions in the alphabet, commonly associated with Julius Caesar's usage. It is a simple form of encryption.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              className={`flex rounded-md bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              onClick={() => handleModeChange('encryption')}
            >
              Encryption
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </span>
            </button>
            <button
              className={`flex rounded-md border border-indigo-600 px-6 py-2.5 text-sm font-semibold shadow-sm`}
              onClick={() => handleModeChange('decryption')}
            >
              Decryption
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        {/* Render Encryption or Decryption component based on mode */}
        {mode === 'encryption' ? <EncryptionComponent /> : <DecryptionComponent />}
      </div>
    </div>
  );
};

// Placeholder components, replace with your actual components
const EncryptionComponent = () => <CaesarEncryption/>
const DecryptionComponent = () => <CaesarDecryption/>

export default CeaserCipher;
