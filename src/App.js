import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TableModal from "./components/TableModal";
import Home from "./pages/Home";
function App() {
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <Home />
      {/* <TableModal /> */}
      <Footer />
    </div>
  );
}

export default App;
