import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Upload from './pages/upload';
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FileList from "./pages/FileList";
import Analysis from "./pages/Analysis";
import Profile from "./pages/Profile";
import Navbar from './pages/Navbar';



function App() {
  

  return (
    

<Router>
  <div>
    <Navbar></Navbar>
  </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload/>} />
        <Route path="/files" element={<FileList />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/profile" element={<Profile />} />

       
      </Routes>
      
    </Router>

  );


}

export default App
