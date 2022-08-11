import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.scss";
import Hjem from "./pages/Hjem";
import Kontakt from "./pages/Kontakt";
import Omos from "./pages/Omos";
import Navbar from "./components/Navbar";
import Produkter from "./pages/Produkter";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path ="/" element={<Hjem />} />
        <Route path="/om-os" element={<Omos />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/produkter" element={<Produkter />} />
      </Routes>
    </Router>
  );
}

export default App;