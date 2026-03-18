
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services.jsx";

function App() {
  return (
    <Router>
      
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/services" element={<Services />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );

}
export default App;