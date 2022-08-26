import { createStore } from "redux";

const initValue = {
    bgcolor:"white",
    textColor:"black",
    pText:"lit"
};

const reducer = (state = initValue, action) => {
  switch (action.type) {
    case "TOGGLE": {
      return {
        bgcolor: action.value ? "black" : "white",
        textColor: action.value ? "white" : "black",
        pText:action.value?"DARK":"LIT"
      };
    }

    default:
      return state;
  }
};

const store = createStore(reducer);
export { store };