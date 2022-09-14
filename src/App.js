import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div className="relative selection:text-gray-50 transition-colors duration-700 selection:bg-orange-400 dark:selection:bg-gray-400 dark:bg-slate-700 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
