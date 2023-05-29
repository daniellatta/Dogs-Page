import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Navbar from "./components/NavBar/NavBar";
import FormCreate from "./components/FormCreate/FormCreate";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/create" element={<FormCreate />} />
      </Routes>
    </div>
  );
}

export default App;
