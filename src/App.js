import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import  NewForm from "./NewForm"
function App() {
  

  return (
    <BrowserRouter>
    <div>
      <span>
        <Routes>
          <Route path="/" element={<NewForm />} />
          <Route path="/done" element={<Home />} />
        </Routes>
      </span>
    </div>
  </BrowserRouter>
  );
}

export default App;
