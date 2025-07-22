import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';

import Login from './pages/Login';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Recover from './pages/Recover';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!user ? <Login setUser={setUser} /> : <Navigate to="/home" />} />
        <Route path="/home" element={user ? <Home user={user} /> : <Navigate to="/" />} />
        <Route path="/wallet" element={user ? <Wallet user={user} /> : <Navigate to="/" />} />
        <Route path="/recover" element={user ? <Recover user={user} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
