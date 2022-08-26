import { createStore } from "redux"

const initValue={
    count:0
};

const counterReducer=(state=initValue,action)=>{
    switch(action.type){
        case "INC":{
            return {
                count:state.count+1
            }
        }
        case "RESET":{
            return {
                count:0
            }
        }

        default:
            return state
    }

}

const store=createStore(counterReducer)

export {store}