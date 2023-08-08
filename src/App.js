
import './App.css';

import Pagination from './components/Pagination';
import Header from './components/Header/Header';
import PasswordGenerator from './components/passgenerator/PasswordGenerator';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
  <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/" element={<PasswordGenerator/>}/>
      <Route exact path="/pagination" element={<Pagination/>}/>
    </Routes>
    </BrowserRouter>

  </div>

  );
}

export default App;
