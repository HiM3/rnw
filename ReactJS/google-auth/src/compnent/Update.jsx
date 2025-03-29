import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { updateFeedback } from '../features/AuthSlice';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {feedbacklist} = useSelector(state=>state.feedbacks)
    const feedback = feedbacklist.find((feedback)=> feedback.id === id)
    const {register,handleSubmit,reset} = useForm();
    const navigate = useNavigate();
    useEffect(()=>{
        if(feedback){
            reset(feedback)
        }
    },[feedback,reset])
    function update(data){
        dispatch(updateFeedback(data))
        navigate('/view-user')
    }
  return (
    <> <form
    className="col-lg-6 mx-auto my-5 p-5 shadow bg-light"
    onSubmit={handleSubmit(update)}
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
  </form></>
  )
}

export default Update