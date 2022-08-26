import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  function inccCount() {
    return {
      type: "INC",
    };
  }

  function resetCount() {
    return {
      type: "RESET",
    };
  }



  return (
    <div className="App">
      <div className="display"><h3>You've walked {state.count} steps today!</h3></div>

      <button className="add" onClick={()=>dispatch(inccCount())}>
        <b>Add a Step</b>
      </button>

      <button className="reset" onClick={()=>dispatch(resetCount())}>
        <b>Reset Steps</b>
      </button>
    </div>
  );
}

export default App;