import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import ContentPage from "./ContentPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planets" element={<CategoryPage category="planets" />} />
        <Route path="/stars" element={<CategoryPage category="stars" />} />
        <Route path="/galaxies" element={<CategoryPage category="galaxies" />} />
        <Route path="/content/:id" element={<ContentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
