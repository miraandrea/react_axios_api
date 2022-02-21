import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Page/Login/Login';
import { Home } from './Components/Page/Home/Home';
import { Register } from './Components/Page/Register/Register';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/inicio' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
