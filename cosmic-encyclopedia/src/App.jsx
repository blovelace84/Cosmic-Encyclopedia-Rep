import { BrowserRouter as Router, Routes, Route, BrowserRouter  } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import ContentPage from "./ContentPage";
import data from "./data";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <HomePage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planets" element={<CategoryPage category="planets" />} />
          <Route path="/stars" element={<CategoryPage category="stars" />} />
          <Route path="/galaxy" element={<CategoryPage category="galaxies" />} />
          <Route path="/content/:id" element={<ContentPage />} />
        </Routes>
    </BrowserRouter>
  
  );
}

export default App;
