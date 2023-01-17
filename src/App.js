import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Pointeur from './Pointeur';
import Login from './Login';
import Navbar from './Navbar';

function App() {
  return (

<div>
<Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Pointeur />} />
          <Route path="Login" element={<Login />} />
          <Route path="Pointeur" element={<Pointeur />} />
        </Route>
      </Routes>

  
  </div>
  );
}



export default App;
