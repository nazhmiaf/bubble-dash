import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import DataPesanan from "./pages/DataPesanan";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/DataPesanan" element={<DataPesanan/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
