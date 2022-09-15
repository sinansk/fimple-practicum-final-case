import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import ResultPage from "./pages/ResultPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="relative flex flex-col transition-colors duration-700 sm:min-h-screen selection:text-gray-50 selection:bg-orange-400 dark:selection:bg-gray-400 dark:bg-slate-700 sm:overflow-y-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/result" element={<ResultPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
