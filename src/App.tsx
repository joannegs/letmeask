import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./services/firebase";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {

  return (
    <BrowserRouter> 
        <Routes>
        <AuthContextProvider>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
          </AuthContextProvider>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
