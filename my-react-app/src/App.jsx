import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Weather from "./pages/Weather";

function App() {
  return (
    <div>
      {/* Simple navbar */}
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/weather">Weather</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
