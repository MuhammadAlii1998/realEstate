import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login";
import Signup from "./components/signup";
import MainPage from "./components/main-page";
import Tryx from "./components/tryx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/catalogue" element={<MainPage />} />
          <Route path="/try" element={<Tryx />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
