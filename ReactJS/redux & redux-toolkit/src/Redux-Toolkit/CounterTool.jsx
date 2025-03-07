import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./CreateSlice";

const CounterTool = () => {
  // const {count} = useSelector((state) => state);
  const count = useSelector((state)=>state.count)
  const dispatch = useDispatch();
  function plus() {
    dispatch(increment());
  }
  function minus() {
    dispatch(decrement());
  }
  return (
    <>
      <h3>{count}</h3>
      <button className="btn btn-success" onClick={plus}>
        +
      </button>
      <button className="btn btn-danger" onClick={minus}>
        -
      </button>
    </>
  );
};

export default CounterTool;
