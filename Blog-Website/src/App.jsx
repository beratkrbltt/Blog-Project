import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Anasayfa from './Component/Anasayfa';
import İletisim from './Component/İletisim';
import Onerivs from './Component/Onerivs';
import Kart1 from './Component/Kart1';
import Hakkimda from './Component/Hakkimda';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Anasayfa />} />
        <Route path='/hakkimda' element={<Hakkimda />} />
        <Route path='/iletisim' element={<İletisim />} />
        <Route path='/oneri-yorumlar' element={<Onerivs />} />
        <Route path='/kart1' element={<Kart1 />} />
      </Routes>
    </div>
  );
}

export default App;
