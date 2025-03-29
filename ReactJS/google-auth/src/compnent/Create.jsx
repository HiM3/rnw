import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createFeedback } from "../features/AuthSlice";

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  function addFeedback(data) {
    dispatch(createFeedback(data));
    reset();
    navigate("/view-user");
  }

  return (
    <form
      className="col-lg-6 mx-auto my-5 p-5 shadow bg-light"
      onSubmit={handleSubmit(addFeedback)}
    >
      <h3 className="text-center">Submit Feedback</h3>

      {/* Rating Selection */}
      <div className="mt-4">
        <label className="mt-2">Rate (1-5):</label>
        <select
          className="form-control"
          {...register("rating", { required: true })}
        >
          <option value="">Select Rating</option>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
      </div>

      {/* Feedback Input */}
      <div className="mt-4">
        <label className="mt-3">Your Feedback:</label>
        <textarea
          className="form-control"
          {...register("feedback", { required: true })}
          placeholder="Enter your feedback here"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="mt-4">
        <button type="submit" className="btn btn-success form-control">
          Submit Feedback
        </button>
      </div>
    </form>
  );
};

export default Create;
