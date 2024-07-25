import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import CaesarCipher from './components/CaesarCipher/CaesarCipher'
import VigenereCipher from "./components/VigenereCipher/VigenereCipher";
import OneTimePadCipher from "./components/OneTimePadCipher/OneTimePadCipher";
import PlayfairCipher from "./components/PlayfairCipher/PlayfairCipher";
import HillCipher from "./components/HillCipher/HillCipher";
import RailFenceCipher from "./components/RailFenceCipher/RailFenceCipher";
import RowColumnCipher from "./components/RowColumnTranspositionCipher/RowColumnCipher";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="caesarcipher" element={<CaesarCipher />} />
        <Route path="vigenerecipher" element={<VigenereCipher />} />
        <Route path="onetimepadcipher" element={<OneTimePadCipher/>} />
        <Route path="playfaircipher" element={<PlayfairCipher/>} />
        <Route path="hillcipher" element={<HillCipher/>} />
        <Route path="railfencecipher" element={<RailFenceCipher/>} />
        <Route path="rowcolumncipher" element={<RowColumnCipher/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
