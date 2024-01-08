import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/Home/HomePage";
import FlashCardsPage from "./pages/FlashCard/FlashCardsPage";
import ContactPage from "./pages/Contact/ContactPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flashcards" element={<FlashCardsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
