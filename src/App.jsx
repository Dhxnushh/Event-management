import './App.css'
import Login from './login'
import Home from './home'
import Home_public from './home-public'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Event_register from './new-event';
import Register from './register';
import Home_staff from './home-staff';
import Req from './requests';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home_public/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path='/event' element={<Event_register/>}/>
          <Route path='/reg' element={<Register/>}></Route>
          <Route path='/staff' element={<Home_staff/>}></Route>
          <Route path='/req' element={<Req/>}></Route>
        </Routes>  
      </Router>
  )
}

export default App
