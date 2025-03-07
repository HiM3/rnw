import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/Header";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./Redux-Toolkit/HomePage";
import CreateRecipe from "./Redux-Toolkit/CreateRecipe";
import UpdateRecipe from "./Redux-Toolkit/UpdateRecipe";
import ViewRecipe from "./Redux-Toolkit/ViewRecipe";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateRecipe />} />
          <Route path="/View" element={<ViewRecipe />} />
          <Route path="/update/:id" element={<UpdateRecipe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
// import { useDispatch, useSelector } from "react-redux"
// import 'bootstrap/dist/css/bootstrap.css';

// const App = () => {

//   const count = useSelector((state) => state);
//   const dispatch = useDispatch();

//   function minus(){
//     dispatch({type: "DEC"});
//   }

//   return (
//     <>
//       <h3>
//         {count} 
//       </h3>
//       <button className="btn btn-success" onClick={()=> dispatch({type: "INC"})}>+</button>
//       <button className="btn btn-danger" onClick={minus}>-</button>
//     </>
//   )
// }

// export default App