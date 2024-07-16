import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import PersonalInfo from './pages/PersonalInfo';
import SubjectPrice from './pages/SubjectPrice';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <SubjectPrice/>
    </div>
  );
}

export default App;
