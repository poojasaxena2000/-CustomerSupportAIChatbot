import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatBot from "./components/ChatBot";
import History from "./components/History";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatBot />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
