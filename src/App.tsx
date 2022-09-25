import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AvailableVehicle, CarPage, HomePage, Purches } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/purches" element={<Purches />} />
          <Route path="/availale-vehicles" element={<AvailableVehicle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
