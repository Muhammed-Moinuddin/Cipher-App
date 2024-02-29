import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import CeaserCipher from './components/CeaserCipher/CeaserCipher'
import VigenereCipher from "./components/VigenereCipher/VigenereCipher";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="ceasercipher" element={<CeaserCipher />} />
        <Route path="vigenerecipher" element={<VigenereCipher />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
