import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  function togglerState(task) {
    return {
      type: "TOGGLE",
      value: task,
    };
  }

  const css = {
    backgroundColor: state.bgcolor,
    height:"94vh",
    color:state.textColor
  };

  function onClickButton(){
    setToggle(!toggle)
    dispatch(togglerState(toggle))
  }

  return (
    <div className="App" style={css}>
      <p style={{paddingTop:"10px",marginBottom:"10px"}}>THE ROOM IS {state.pText}</p>
      <button onClick={onClickButton}>Flip</button>
    </div>
  );
}

export default App;