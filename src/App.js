import Mail from './MailForm/Mail';
import Home from './Welcome/Home';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Mailsent from '../src/MailForm/Mailsent';
import Login from './Welcome/Auth pages/Login';
import Registration from './Welcome/Auth pages/Registration';





function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
        <Route path="/bulk-mailer" element={<Mail />} />
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/mail-sent" element={<Mailsent/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App