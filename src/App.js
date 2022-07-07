import './App.css';
import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Searchpage from './pages/Searchpage';

import mainData from "./data/main.json";

function App() {
  document.title = mainData.name;

  return (
    <Routes>
      <Route path='/' element={<Homepage name={mainData.name}/>}/>
      <Route path='/search' element={<Searchpage/>}/>
    </Routes>
  );
}

export default App;
