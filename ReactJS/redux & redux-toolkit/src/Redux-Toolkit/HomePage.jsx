import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center my-5">
      <h1>Welcome to Recipe Manager 🍽️</h1>
      <p>Organize, create, and explore delicious recipes effortlessly!</p>
      <div className="mt-4">
        <Link to="/create" className="btn btn-success me-3">Add New Recipe</Link>
        <Link to="/view" className="btn btn-primary">View Recipes</Link>
      </div>
    </div>
  );
};

export default Home;
