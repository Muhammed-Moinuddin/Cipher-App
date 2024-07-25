import { useState } from "react";
import OneTimePadEncryption from "./OneTimePadEncryption";
import OneTimePadDecryption from "./OneTimePadDecryption";

const OneTimePadCipher = () => {
  const [mode, setMode] = useState('encryption');

  const handleMode = (value) => {
    setMode(value);
  }

  return (
    <div className="relative isolate px-6 pt-1 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="font-bold text-4xl tracking-tight text-gray-900 sm:text-6xl">One-Time Pad Cipher</h1>
          <p className="mt-6 text-lg leading-6 text-gray-600">One-Time Pad Cipher is a method of encrypting alphabetic text. It is one of the most secure encryption techniques.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button onClick={() => handleMode('encryption')} 
              className='flex rounded-md bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible: outline'
              >Encrypt</button>
            <button onClick={() => handleMode('decryption')}
              className='flex rounded-md bg-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-200 focus-visible: outline'
              >Decrypt</button>
          </div>
        </div>
        {mode === 'encryption' ? <OneTimePadEncryption /> : <OneTimePadDecryption />}
      </div>
    </div>
  )
}

export default OneTimePadCipher;
