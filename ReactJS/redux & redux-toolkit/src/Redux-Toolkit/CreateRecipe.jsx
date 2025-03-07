import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe } from "./recipeSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateRecipe = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState([]);
  const { recipeList } = useSelector((state) => state.recipes?.recipeList || []);

  useEffect(() => {
    setRecipes(recipeList);
  }, [recipeList]);

  const id = uuidv4();

  const submitData = (data) => {
    console.log(data);
    const recipeData = { id, ...data };
    dispatch(createRecipe(recipeData));
    alert("Recipe created successfully!");
    navigate("/View");
  };

  return (
    <form className="col-lg-6 mx-auto my-5 p-5 shadow" onSubmit={handleSubmit(submitData)}>
      <h2 className="text-center">Create Recipe</h2>
      <div className="mt-4">
        <input type="text" placeholder="Recipe Name" className="form-control" {...register("name")} />
      </div>
      <div className="mt-4">
        <textarea placeholder="Description" className="form-control" {...register("description")} />
      </div>
      <div className="mt-4">
        <input type="text" placeholder="Ingredients (comma separated)" className="form-control" {...register("ingredients")} />
      </div>
      <div className="mt-4">
        <button type="submit" className="btn btn-success">Submit</button>
      </div>
    </form>
  );
};

export default CreateRecipe;
