import Adduser from "./firebase-realtime/Adduser";
import Viewuser from "./firebase-realtime/Viewuser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./firebase-realtime/Header";
import UpdateUser from "./firebase-realtime/UpdateUser";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Adduser />} />
        <Route path="/View" element={<Viewuser />} />
        <Route path="/UpdateUser/:id" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
