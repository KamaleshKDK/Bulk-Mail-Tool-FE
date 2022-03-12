import Mail from './Mail';
import Home from './Welcome/Home';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Mailsent from './Mailsent';





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/bulk-mailer" element={<Mail />} />
        <Route path="/" element={<Home/>} />
        <Route path="/mail-sent" element={<Mailsent/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App