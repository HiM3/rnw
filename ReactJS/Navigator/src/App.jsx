import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Create from "./pages/Create";
import View from "./pages/View";
import Update from "./pages/Update";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<Create />} />
        <Route path="/view" element={<View />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
