import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TableModal from "./components/TableModal";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ResultPage from "./pages/ResultPage";
function App() {
  return (
    <div className="relative selection:text-gray-50 selection:bg-orange-400 dark:bg-slate-700">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>

      {/* <TableModal /> */}
      <Footer />
    </div>
  );
}

export default App;
