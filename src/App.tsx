import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Layout } from 'antd';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import MainPage from './components/MainPage';
import { Content } from 'antd/lib/layout/layout';


function App() {
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#F6F6F6', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Signup" element={<SignupPage />} />
            <Route path="/Mainpage" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      
    </Layout>
  );
}

export default App;
