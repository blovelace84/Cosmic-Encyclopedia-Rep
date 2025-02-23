import { BrowserRouter as Router, Routes, Route, BrowserRouter  } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import ContentPage from "./ContentPage";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planets" element={<ContentPage category="planets" />} />
          <Route path="/stars" element={<ContentPage category="stars" />} />
          <Route path="/galaxies" element={<ContentPage category="galaxies" />} />
        </Routes>
    </BrowserRouter>
  
  );
}

export default App
