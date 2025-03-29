import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
var API = "http://localhost:3000/feedbacks";
export const createFeedback = createAsyncThunk(
  "feedback/createFeedback",
  async (data) => {
    await axios.post(API, data);
    return data;
  }
);
export const viewFeedback = createAsyncThunk(
  "feedback/viewFeedback",
  async () => {
    const res = await axios.get(API);
    return res.data;
  }
);
export const deleteFeedback = createAsyncThunk(
  "feedback/deleteFeedback",
  async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      return id;
    } catch (err) {
      console.log(err);
    }
  }
);
export const updateFeedback = createAsyncThunk(
  "feedback/updateFeedback",
  async (data) => {
    const { id } = data;
    await axios.put(`${API}/${id}`,data);
    return data;
  }
);
const AuthSlice = createSlice({
  name: "feedback",
  initialState: {
    feedbacklist: [],
  },
  reducers: {},
  extraReducers: (apipro) => {
    apipro
      .addCase(createFeedback.fulfilled, (state, action) => {
        state.feedbacklist.push(action.payload);
      })
      .addCase(viewFeedback.fulfilled, (state, action) => {
        state.feedbacklist = action.payload;
      })
      .addCase(deleteFeedback.fulfilled, (state, action) => {
        const id = action.payload;
        state.feedbacklist = state.feedbacklist.filter((feedbacks) => {
          return feedbacks.id !== id;
        });
        // state.feedbacklist = deltedata
      })
      .addCase(updateFeedback.fulfilled, (state, action) => {
        const {id} = action.payload;
        const updated = state.feedbacklist.findIndex((feedbacks) => {
          return feedbacks.id === id;
        });
        if(updated !== -1){
            state.feedbacklist[updated] = action.payload
        }
        // state.feedbacklist = action.payload;
      });
  },
});
export default AuthSlice.reducer;
