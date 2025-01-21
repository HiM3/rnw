import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import "../src/pages/whole.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import About from "./pages/About";
function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <About /> */}
      <Footer />
    </>
  );
}

export default App;
