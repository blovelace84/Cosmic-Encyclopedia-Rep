import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import ContentPage from "./ContentPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/planets" element={<CategoryPage category="planets" />} />
            <Route path="/stars" element={<CategoryPage category="stars" />} />
            <Route path="/galaxies" element={<CategoryPage category="galaxies" />} />
            <Route path="/content/:id" element={<ContentPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
