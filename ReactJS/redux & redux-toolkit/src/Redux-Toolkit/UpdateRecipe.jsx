import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateRecipe } from "./recipeSlice";

const UpdateRecipe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { recipeList } = useSelector((state) => state);
  
  const recipe = recipeList.find((recipe) => recipe.id === id);
  
  useEffect(() => {
    if (recipe) {
      reset(recipe);
    }
  }, [recipe, reset]);

  const onSubmit = (data) => {
    dispatch(updateRecipe(data));
    alert("Recipe updated successfully!");
    navigate("/View");
  };

  return (
    <form className="col-lg-6 mx-auto my-5 p-5 shadow bg-light" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-center">Update Recipe</h2>

      <div className="mt-4">
        <input type="text" placeholder="Recipe Name" className="form-control" {...register("name")} />
      </div>

      <div className="mt-4">
        <textarea placeholder="Description" className="form-control" {...register("description")} />
      </div>

      <div className="mt-4">
        <textarea placeholder="Ingredients" className="form-control" {...register("ingredients")} />
      </div>

      <div className="mt-4">
        <button type="submit" className="btn btn-warning">Update Recipe</button>
      </div>
    </form>
  );
};

export default UpdateRecipe;
