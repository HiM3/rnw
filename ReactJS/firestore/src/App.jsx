import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./firestore/Header";
import AddUser from "./firestore/AddUser";
import UpdateUser from "./firestore/UpdateUser";
import ViewUser from "./firestore/ViewUser"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
function App() {
  return (
    <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/view" element={<ViewUser />} />
        <Route path="/update/:id" element={<UpdateUser />} /> 
      </Routes>
    </Router>
  );
}

export default App;
