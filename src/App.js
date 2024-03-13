import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Index from './home/Index';
import Service from './services/index'
import Mission from './mission/index'
import Work from './howwework/index'
import Approach from './approach/index'
import Vision from './vision/index'
import Preloader from './header&footer/preloader';




function App() {
const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic content loading
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    // You can replace the above setTimeout with your actual data fetching logic.
  }, []);

  return (
    <>
    {loading ? (
      <Preloader />
    ) : (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Service />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/how-we-work" element={<Work />} />
        <Route path="/approach" element={<Approach />} />
      </Routes>
    </Router>
    )}
  </>
  );
}

export default App;
