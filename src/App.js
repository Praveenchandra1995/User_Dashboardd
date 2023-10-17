import "./App.css";
import Sidemenu from "./Components/Sidemenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Product from "./Pages/Product";
import Customers from "./Pages/Customers";
import Income from "./Pages/Income";
import Promote from "./Pages/Promote";
import Help from "./Pages/Help";
function App() {
  return (
    <div className="App">
      <Router>
        <Sidemenu />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/income" element={<Income />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
