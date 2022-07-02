import './App.css';
import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Searchpage from './pages/Searchpage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/search' element={<Searchpage/>}/>
    </Routes>
  );
}

export default App;
