import { BrowserRouter as Router, Routes, Route, BrowserRouter  } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import ContentPage from "./ContentPage";
import data from "./data";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <HomePage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/content/:id" element={<ContentPage />} />
        </Routes>
    </BrowserRouter>
  
  );
}

export default App;
