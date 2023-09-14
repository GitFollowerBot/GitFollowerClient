import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
