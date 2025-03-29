import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFeedback, viewFeedback } from "../features/AuthSlice";
import { NavLink } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const View = () => {
  const { feedbacklist } = useSelector((state) => state.feedbacks);
  // console.log(feedbacklist);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewFeedback());
  }, [dispatch]);
  async function handleDelete(id) {
    if(confirm("Do you want to delete the data")){
      dispatch(deleteFeedback(id))
    }
  }
  const filter = 
  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center">FeedBack List</h2>
        <table className="table table-striped table-hover">
          <thead className="table-success">
            <tr>
              <th>Sr No.</th>
              <th>Rating</th>
              <th>Feedback</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedbacklist&&feedbacklist.map((feedbacks, index) => (
              <tr key={feedbacks.id}>
                <td>{index + 1}</td>
                <td>{feedbacks.rating}</td>
                <td>{feedbacks.feedback}</td>
                <td>
                  <NavLink
                    to={`/update-user/${feedbacks.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    <FaPen />
                  </NavLink>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(feedbacks.id)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default View;
