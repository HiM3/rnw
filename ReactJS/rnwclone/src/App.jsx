import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";
import banner from "./banner.png"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <>
      <Header />
      <img src={banner} width="100%" />
      <Home />
      <Footer />
    </>
  );
}

export default App;
