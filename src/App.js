import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";

import InteractiveCreditCard from "./pages/InteractiveCreditCard";
import InteractiveRating from "./pages/InteractiveRating";
import WeatherApp from "./pages/WeatherApp";
import Header from "./components/Header";
import Accordion from "./pages/Accordion";
import Carousel from "./pages/Carousel";
import DarkMode from "./pages/DarkMode";
import LoadMore from "./pages/LoadMore";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credit-card" element={<InteractiveCreditCard />} />
        <Route path="/rating" element={<InteractiveRating />} />
        <Route path="/weather-app" element={<WeatherApp />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/dark-mode" element={<DarkMode />} />
        <Route path="/load-more" element={<LoadMore />} />
      </Routes>
    </Router>
  );
}

export default App;
