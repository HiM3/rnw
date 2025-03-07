import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipeList: [],
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    createRecipe: (state, action) => {
      state.recipeList.push(action.payload);
    },
    updateRecipe: (state, action) => {
      const { id } = action.payload;
      const index = state.recipeList.findIndex((recipe) => recipe.id === id);
      if (index !== -1) {
        state.recipeList[index] = action.payload;
      }
    },
    deleteRecipe: (state, action) => {
      state.recipeList = state.recipeList.filter(
        (recipe) => recipe.id !== action.payload
      );
    },
  },
});

export const { createRecipe, updateRecipe, deleteRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
