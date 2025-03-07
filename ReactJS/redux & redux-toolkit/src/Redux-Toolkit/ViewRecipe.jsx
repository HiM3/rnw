import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteRecipe } from "./recipeSlice";

const ViewRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const { recipeList } = useSelector((state) => state || []);
  const dispatch = useDispatch();

  useEffect(() => {
    setRecipes(recipeList);
  }, [recipeList]);

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this recipe?")) {
      dispatch(deleteRecipe(id));
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">Recipe List</h2>
      <table className="table table-hover table-striped table-success">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Description</th>
            <th>Ingredients</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes &&
            recipes.map((recipe, index) => (
              <tr key={recipe.id}>
                <td>{index + 1}</td>
                <td>{recipe.name}</td>
                <td>{recipe.description}</td>
                <td>{recipe.ingredients}</td>
                <td>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => handleDelete(recipe.id)}
                  >
                    <MdDelete />
                  </button>
                  <NavLink
                    className="btn btn-warning"
                    to={`/update/${recipe.id}`}
                  >
                    <FaPen />
                  </NavLink>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewRecipe;
